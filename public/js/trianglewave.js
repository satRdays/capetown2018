paper._execute = function(__$__,view,project,Point,Size,Rectangle,Shape,Raster,Path,onFrame) {var waveSpeed = 1.8;
var dripSpeed = 1.4;

var sqwidth,
largeSide,
halfLargeSide,
unitSize, drip = [],
raster, mesh = [], restizeTime,
noAnim = false,
darken;

var loaded = false;


function init () {
  debugger;

  var w = getViewport().width;
  if (w < 720) {
      noAnim = true;
  }

  sqwidth = getSqSize();
  largeSide = hypotenuse(sqwidth);
  halfLargeSide = __$__(largeSide, "/" , 2);
  unitSize = new Size(sqwidth, sqwidth);
  raster = new Raster(getImg());
  drip = [];

  raster.on('load', function() {

    raster.fitBounds(view.bounds, true);
    loaded = true;

    darken = Shape.Rectangle(new Point(0,0), view.size);
    darken.bringToFront();

    darken.fillColor = '#3580C2';
    darken.blendMode = 'multiply';
    darken.opacity = 1;

    var startX = __$__(view.center.x, "-" , __$__(Math.ceil(__$__(view.center.x, "/" , largeSide)), "*" , largeSide));
    var next = [
      startX,
      __$__(view.center.y, "-" , __$__(Math.ceil(__$__(view.center.y, "/" , largeSide)), "*" , largeSide))
    ];

    var line = 0;
    var end = false;

    while(next) {
      var res = generateSquare(next, line, mesh);
      var pre = __$__(__$__(line, "%" , 4), "==" , 0) ? 1 : -1;

      if (res[0] > view.size.width && res[1] > view.size.height && __$__(end, "==" , false)) {

        end = __$__(line, "+" , 1)
        res[0] = __$__(startX, "+" , __$__(__$__(pre, "*" , halfLargeSide),"/", 2));
        res[1] = __$__(next[1], "+" , halfLargeSide);
        line = __$__(line, "+", 2);

      } else if (res[0] > view.size.width) {
        if (end) {
          next = false;
          break;
        }
        res[0] = __$__(startX, "+" , __$__(__$__(pre, "*" , halfLargeSide),"/", 2));
        res[1] = __$__(next[1], "+" , halfLargeSide);
        line = __$__(line, "+", 2);
      } else {
        res[0] = __$__(next[0], "+" , largeSide);
        res[1] = next[1]
      }
      next = res;
    }

  });
}

function wavePoint (point, line, pre) {
  var l = __$__(line, "+" , Math.sin(line));
  return __$__(0.5 * Math.pow(
    Math.sin(
      __$__(__$__(__$__(point.x, "+" , l), "+" , __$__(__$__(pre, "*" , sqwidth),"/", 2)), "/" , 3)
    ), 2
  ), "+" , 0.2)
}

function generateSquare (coords, line, mesh) {
  var x = coords[0],
      y = coords[1];
  var rand = [];

  if (Math.random() > 0.55) {
    rand = [0,2]
  } else {
    rand = [1,3]
  }

  var center = new Point(__$__(x,"-", (halfLargeSide)), __$__(y,"-", (halfLargeSide)))

  var triangle1 = new Path.Rectangle(center, unitSize);
  triangle1.removeSegment(rand[0]); // 0
  triangle1.rotate(45);
  triangle1.opacity = wavePoint(center, line, 1)
  triangle1.JSCwaveProp = [center, line, 1]
  triangle1.passive = true;
  triangle1.fillColor='#3580C2';
  triangle1.on('mouseenter', onMouseEnter)

  mesh.push(triangle1)

  var triangle2 = new Path.Rectangle(center, unitSize);
  triangle2.removeSegment(rand[1]); // 2
  triangle2.rotate(45);
  triangle2.opacity = wavePoint(center, __$__(line,"+", 1), -1)
  triangle2.JSCwaveProp = [center, __$__(line,"+", 1), -1]
  triangle2.passive = true;
  triangle2.fillColor='#3580C2';
  triangle2.on('mouseenter', onMouseEnter)

  mesh.push(triangle2)

  return [__$__(x,"+", (halfLargeSide)), __$__(y,"+", (halfLargeSide))];

}

function hypotenuse (a) {
  return Math.sqrt(__$__(Math.pow(a, 2), "*" , 2));
}

function getViewport () {
  var ratio = window.devicePixelRatio &&  window.devicePixelRatio > 1 ? 2 : 1;
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  return {
    ratio: ratio,
    width: width
  }
}

function getImg () {
  var vp = getViewport();
  var ratio = vp.ratio;
  var width = vp.width;
  if (width > 1080) {
    return '/images/bg1080x2.jpg'
  } else if (width > 720 && ratio > 1) {
    return '/images/bg1080x2.jpg'
  } else if (width > 720 && __$__(ratio, "==" , 1)) {
    return '/images/bg1080.jpg'
  } else if (ratio > 1) {
    return '/images/bg720x2.jpg'
  } else {
    return '/images/bg720.jpg'
  }
}

function getSqSize () {
  var width = getViewport().width;
  if (width > 900) {
    return 64;
  } else  {
    return 28;
  }
}

function remove (item) {
  item.remove();
  item = null;
  return null;
}

function reset () {
  view.onFrame = function () {}
  raster.remove();
  darken.remove()
  mesh = mesh.map(remove);
  mesh = [];
  project.clear();
}

function setSize () {
  var width = getViewport().width;
  var c = document.getElementById('Trianglewave').parentNode;
  view.viewSize.width = c.clientWidth;
  view.viewSize.height = c.clientHeight;
}

function onMouseEnter () {
  var that = this;
  this.passive = false;
  this.opacity = 1;
  //var prop = this.JSCwaveProp;
}

function withinRadius (currentPoint, centerPoint, outerRadius, innerRadius) {
  var coords = __$__(Math.pow(__$__(currentPoint.x, "-" , centerPoint.x),2), "+" , Math.pow(__$__(currentPoint.y, "-" , centerPoint.y),2)),
      insideOuter = coords < Math.pow(outerRadius,2),
      outsideInner = coords > Math.pow(innerRadius,2);
  return insideOuter && outsideInner;
}

function onFrame (e) {
  if (noAnim) return;
  if (window.menuOpen) return;

  mesh.map(function (tri, i) {
    if (tri.passive) {
      tri.JSCwaveProp[0] = __$__(tri.JSCwaveProp[0], "+", __$__(e.delta, "*" , waveSpeed))
      tri.opacity = wavePoint.apply(null, tri.JSCwaveProp);
    } else {
      tri.opacity = __$__(tri.opacity, "-", .005)

      if (tri.opacity <= mesh[__$__(i,"-", 1)].opacity) {
        tri.opacity = mesh[__$__(i,"-", 1)].opacity;
        tri.passive = true;
      }
    }
  });
}

function resize () {
  reset();
  setSize();
  init();
}

window.addEventListener('resize', function () {
  clearTimeout(restizeTime);
  restizeTime = setTimeout(resize, 400)
});

setSize();
init();

return { onFrame: onFrame };
}