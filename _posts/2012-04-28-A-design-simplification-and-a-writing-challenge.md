---
title: A design simplification and a writing challenge
layout: posts
---

I have been working on the redesign of this website for quite a while now. As many before have done, I have chosen to put the content first and foremost.

Historically I have had little success in terms of posting here. Lack of regularity, quality and substance can be blamed on any number of excuses, but my main issue was never really spending enough time on it.

So with the aim of changing this situation and my sketch pad full of ideas, **I hear by challenge myself to wite 12 articles in 12 weeks**.

## A fresh start

Over the last year or so, I feel my writing has improved quite a bit. Looking back at the last iteration of this site, I felt quite embarrased looking at the old content. For better or worse I have taken a gamble and scrapped the posts as well as the portfolio. Some day I may put the examples of work back, but in their current state they feel quite dated.

## The design

Almost every day I use hsl and the [chrome devtools](http://paulirish.com/2011/quick-color-manipulation-with-the-chrome-devtools/) to pick nice and appropriate colours. This intuitive way of representing colours lets you find colours that mathematically go together, and also easily work out what colour a definition is (compared to RGB anyhow). I have included 120 different colour schemes for the site that are generated with [Less](http://lesscss.org), and the site will cycle through to the next one every 2.5 minutes.

The buttons and the logo in the header are the most important design component of the site, encompassing a simple and clean style, with a slightly unusual vertical header. I initally used [Raphaël](http://raphaeljs.com/) to draw them as SVGs with JavaScript. But including an extra library purely to display 4 images was really overkill, not to mention that it wouldn't work without JavaScript! So I replaced them with SVGs as background images and provided png fallbacks using [Modernizr](http://modernizr.com/).

Keeping the JavaScript on this site as small as possible was an important goal of this site. I split the code out into a base set of functionality that is needed on every page, and then loaded a seperate file for the desktop homepage functionality conditionally with [yepnope](http://yepnopejs.com/).

I have kept the layout pretty simple, and have only introduced small enhancements to the larger screen sizes, building on top of the mobile first styles. The header starts small and horizontal, saving screen space and drawing attention to the content. But then changes to the more distinctive and sticky vertical style on tablet and desktop screens. The comments follow the article on mobile, but on larger screens sit on the left hand side.




