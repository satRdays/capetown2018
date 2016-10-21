# Workshops

## Shiny Workshop [Julia Silge]

[Shiny](http://shiny.rstudio.com/) is a framework for building interactive web apps and dashboards using the statistical programming language R. In this workshop, we will walk through how to move from an analysis performed in R, with plots and tables that an analyst wants to share, to a self-contained web app. We will learn

- what reactive programming is,
- how to use the flexdashboard package to customize your app, and
- how to publish and share your app.

Attendees should bring a laptop with the latest versions of [R](https://www.r-project.org/) and [RStudio](https://www.rstudio.com/products/rstudio/download/) installed, and we will build a Shiny app from scratch together.

## Using Git and GitHub with R, RStudio, and R Markdown [Jennifer Bryan]

### Overview

Data analysts can use the [Git version control system](https://git-scm.com) to manage a motley assortment of project files in a sane way (e.g., data, code, reports, etc.). This has benefits for the solo analyst and, especially, for anyone who wants to communicate and collaborate with others. Git helps you organize your project over time and across different people and computers. Hosting services like [GitHub](https://github.com), [Bitbucket](https://bitbucket.org), and [GitLab](https://about.gitlab.com) provide a home for your Git-based projects on the internet.

What's special about using R and Git(Hub)?

-   the active R package development community on GitHub
-   workflows for R scripts and [R Markdown](http://rmarkdown.rstudio.com) files that make it easy to share source and rendered results on GitHub
-   Git- and GitHub-related features of the [RStudio IDE](https://www.rstudio.com/products/rstudio-desktop/)

### Outline

The tutorial will be structured as ~5 task-oriented units. Indicative topics:

-   The most difficult part: installation and configuration!
-   Creating a Git repository and connecting the local repo to a GitHub remote, for new and existing projects.
-   The intersection of GitHub and the R world: R packages developed on Github and how to make use of ["issues"](https://guides.github.com/features/issues/); [METACRAN](http://www.r-pkg.org) [read-only mirror](https://github.com/cran) of all of CRAN; R-specific searching tips.
-   Daily workflows and FAQ: how often should I commit?, which files should I commit? how do I change a commit or its message? how do groups of 1, 5, or 10 people structure their work with Git(Hub)? etc.

This will be a hands-on tutorial, so bring your prepared laptop and pre-register a free GitHub account.

## Opinionated Analysis Development [Hilary Parker]

The process of developing an analysis has gotten relatively little airtime compared to other areas of data science, such as productionizing algorithms. In this workshop, I'll go through the ideal properties of an analysis (reproducible, error-free and collaborative), and then the best tools to help tackle each property. We'll go end-to-end through the process of developing an analysis using these tools.

# Keynote Talks

## Text Mining with Tidy Tools [Julia Silge]

Unstructured, text-heavy data sets are increasingly important in many domains, and tidy data principles and tidy tools can make text mining tasks easier and more effective. In this talk, I will demonstrate how we can manipulate, summarize, and visualize the characteristics of text using R packages from the tidy tool ecosystem; these tools extend naturally to many text analyses and allow you to integrate natural language processing into effective workflows you may already be using. We will explore how to implement approaches such as sentiment analysis of texts and measuring tf-idf to quantify what documents are about.


## Behind every great plot there's a great deal of wrangling [Jennifer Bryan]

If you are struggling to make a plot, tear yourself away from stackoverflow for a moment and ... take a hard look at your data. Is it really in the most favorable form for the task at hand? Time and time again I have found that my visualization struggles are really a symptom of unfinished data wrangling. R has long had excellent facilities for data aggregation or "split-apply-combine": split an object into pieces, compute on each piece, and glue the result back together again. Recent developments, especially in the purrr package, have made "split-apply-combine" even easier and more general. But this requires a certain comfort level with lists, especially with lists that are columns inside a data frame. This is unfamiliar to most of us. I give an overview of this set of problems and match them up with solutions based on grouped, nested, and split data frames.

## Talk 3 [Hilary Parker]

*Abstract goes here...*