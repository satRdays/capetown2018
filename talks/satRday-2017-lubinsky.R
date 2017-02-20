# Intro 
library("rredis")
library("dplyr")
library("microbenchmark")
redisConnect()
redisSet("x",rnorm(5)) 
redisGet("x")

# Basic operations 
# ----------------
x  <-  rnorm(5)
print(x)
redisSet("x",x)
y  <-  redisGet("x")
print(y)
all.equal(x,y) 
redisGet("z") 
y  <-  redisGet("x")
print(y)
redisKeys() 
redisSelect(2) 
redisKeys() 
redisKeys() 
redisSelect(0)
redisMSet(list(x=pi,y=runif(5),z=sqrt(2))) 
redisMGet(c("x","y","z"))
redisExpire("z",1) 
#Wait a second
redisGet("z") 


# Sharing Data with Clients other than R
# ---------------------------------------
# redis-cli set shell "Greetings, R client!"
redisGet("shell")
x  <-  redisGet("shell")
redisSet("hello",  x)
redisSet("R",  "Greetings,  shell  client!")
redisSet("R",  charToRaw("Greetings,  shell  client!"))  
# get R

# Lists
# -----

redisLPush("a",1) 
redisLPush("a",2) 
redisLPush("a",3) 
redisLRange("a",0,2) 
redisLPop("a") 
redisLRange("a",0,-1) 
redisRPush("a","A") 
redisRPush("a","B") 
redisLRange("a",0,-1) 
redisRPop("a") 
redisBLPop("b",timeout=3)
redisLPush("b",runif(5)) 
redisBLPop("b",timeout=1)
redisLPush("b",5) 
redisBLPop(c("a","b","c"))
redisFlushDB()
for  (j  in  1:5)  {
  x <- redisBLPop(c("a","b"))
  print (x)
}

# In the redis cli window
lpush a "1"
lpush b "2"


# Scalable event processing over many machines


# Sets
# -----
  redisSAdd("A",runif(2)) 
  redisSAdd("A",55) 
  redisSAdd("B",55) 
  redisSAdd("B",rnorm(3)) 
  redisSCard("A") 
  redisSDiff(c("A","B")) 
  redisSInter(c("A","B")) 
  redisSUnion(c("A","B"))
# Call CLI
  
  redisCmd("set","x",runif(5))
  redisCmd("get","x")
 
# Hash sets
# ---------

redisHSet("people","1",data.frame(Name="David", Age=57))
redisHSet("people","2",data.frame(Name="Debbie", Age=53)) 

a = redisHGet("people","1")
b = redisHGet("people","2")

rbind.data.frame(a,b)

addallowed= function(df){
  if(redisExists("allowedstops")){
    d = redisGet("allowedstops")
    d = rbind.data.frame(d,df)
    redisSet("allowedstops",d)
  } else {
    redisSet("allowedstops",df)
  }
}

          
# Priority queues/sorted lists
# scores must be integers

redisDelete("sl1")
testZ = function(n) {
  for(i in 1:n){
    redisZAdd("sl1", round(1000*runif(1)),runif(1))
  }
}

testZ(1000)
redisZCount("sl1",0,100)

redisZRange("sl1",0,10)

#Speed in R

test2 = function(n){
  for(i in 1:n){
    redisHSet("t2",paste0(i),runif(1))
  }
}

microbenchmark(test2(1000), times=3)

#Working with bigger data - wEBem

redisSelect(1)
redisKeys()

redisHLen("alertsArchive")
k = redisHKeys("alertsArchive")
k[1]
k[1][[1]]
s=k[[1]][1]
s
redisHGet("alertsArchive",s)

g = redisGet("gps")
dim(g)
g
microbenchmark(redisGet("gps"), times=3)

pRedisLog = function(df){
  n = as.numeric(redisLPush("redisLog",df))
  if(n > 100) redisRPop("redisLog")
}

