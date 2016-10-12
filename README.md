The site is published [here](http://satrdays.org/satRday-Cape-Town/).

https://www.youtube.com/watch?v=a5WleYV3wmM&feature=youtu.be
http://blog.rapporter.net/2016/09/the-start-of-satrdays.html
https://tomaztsql.wordpress.com/2016/09/06/sharing-thoughts-on-satrdays-r-conference-budapest-2016-satrdays/
http://budapest.satrdays.org/#schedule

> Hey Andrew,
> 
> thanks for your kind mail. This project is indeed very exciting! I've started the actual first steps (looking for venue etc) 3 months ago, and it was an awesome experience & looking forward to see the conference come to live
> next Saturday :) As a side note: organizing the conf required a lot more work hours than I originally expected. I thought it would be a few hours a week, but actually it became 2-3 hours a day fun project -- which was sometime
> pretty cumbersome besides doing a full time job. So be prepared for that :)

> I plan to write a blog post on my experiences as a satRday conf organizer and providing some hints, dos and donts to future organizers, also some hopefully helpful templates (eg homepage, rollup design, speaker info bundle
> etc) -- please expect that in mid-Sept.
> 
> Until then, let me reply below, inline.
> 
> Best, Gergely.


http://blog.rapporter.net/2016/08/satrday-conference-budapest-next-week.html

http://budapest.satrdays.org/#datavizcompo

Use EVENTBRITE to registration. Derivco has an account.

APPLICATION:

- Experience with R
- Food requirements

VENUES:

W17
The River Club
Derivco Cape Town

SPONSORS:

http://budapest.satrdays.org/#sponsors

iXperience
Microsoft (Gary Hope, gary.hope@microsoft.com)
DataCamp
RStudio
Vantage Data
Derivco
Toptal

Books sponsor?

THINGS TO ORGANISE:

Speakers' Dinner (the night before)
Speakers' Room (for their stuff, snacks etc.)
Swag (branded flash drives, t-shirts, lanyards)
"Ask the Experts" panel discussion at end of day?

THEMES:

http://tyler-abbot.github.io/DrJekyll/
https://hemangsk.github.io/DevJournal/
https://panossakkos.github.io/personal-jekyll-theme/
http://jekyllthemes.org/themes/saigon/

![Build Status](https://gitlab.com/pages/jekyll/badges/master/build.svg)
![Jekyll Version](https://img.shields.io/gem/v/jekyll.svg)

---

Example [Jekyll] website using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation http://doc.gitlab.com/ee/pages/README.html.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [GitLab CI](#gitlab-ci)
- [Building locally](#building-locally)
- [GitLab User or Group Pages](#gitlab-user-or-group-pages)
- [Did you fork this project?](#did-you-fork-this-project)
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: ruby:2.3

pages:
  script:
  - gem install jekyll
  - jekyll build -d public
  artifacts:
    paths:
    - public
  only:
  - master
```

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. [Install][] Jekyll
1. Generate the website: `jekyll build -d public`
1. Preview your project: `jekyll serve`
1. Add content

Read more at Jekyll's [documentation][].

## GitLab User or Group Pages

To use this project as your user/group website, you will need one additional
step: just rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.

[ci]: https://about.gitlab.com/gitlab-ci/
[Jekyll]: http://jekyllrb.com/
[install]: https://jekyllrb.com/docs/installation/
[documentation]: https://jekyllrb.com/docs/home/
[userpages]: http://doc.gitlab.com/ee/pages/README.html#user-or-group-pages
[projpages]: http://doc.gitlab.com/ee/pages/README.html#project-pages
