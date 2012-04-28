---
title: A design simplification and a writing challenge
layout: posts
---

I have been working hard on the redesign of this website. As many before have done, I have chosen to put the content first and foremost.

Historically I have had little success in terms of posting here. Lack of regularity, quality and substance can be blamed on any number of excuses, but my main issue was never really spending enough time on it.

With my sketch pad full of ideas, **I hear by challenge myself to wite 12 articles in 12 weeks**. Wish me luck, I think I'm gonna need it! 

## The design

I don't get much chance to do much design these days, so I have done a tonne of thinking and planning, mulling over what I really want my online presence to acheive.

Almost every day I use hsl and the [chrome devtools](http://paulirish.com/2011/quick-color-manipulation-with-the-chrome-devtools/) to pick nice and appropriate colours. This intuitive way of representing colours lets you find colours that mathematically go together, and also easily work out what colour a definition is (compared to RGB anyhow). I have included 120 different colour schemes for the site, and the site will cycle through to the next one every 2.5 minutes.

The buttons and the logo in the header are the most important design component of the site, encompassing a a simple and clean style, with a slightly unusual vertical header. I used Raphael to create SVGs for the buttons. I am happy with the output, but there are some drawbacks, the logos require javascript and the Rapheal library with the definitions of the paths used are pretty big - nearly 95KB (not gzipped). In the future I will probably revert to SVGs with PNG fallbacks, but at the moment I like the fact that they work nicely in IE7 and 8.

Since being involved in training and support of all things front end at work, I have been taking extra care to build a useful list of resources, publications and tools on [delicious](http://delicious.com/danshearmur). Sharing great resources about the open web is not just useful but extremely important, so I wanted to promote the links I share, along side my tweets. I did this with the panels on the right hand side of the homepage. I also made sure not to include them on the mobile versions of this site, where extra HTTP requests and dom reflows are really expensive.

Keeping the javascript on this site as small as possible was an important goal of this site, so I used my own JSONP request mechanism and precompiled jade template functions. I split the code out into a base set of functionality that is needed on every page, and then a seperate file for the desktop homepage functionality.

I have kept the layout pretty simple, and have only introduced small enhancements to the larger screen sizes. The header starts small and horizontal, saving screen space and drawing attention to the content. But then changes to the more distinctive and sticky vertical style on tablet and desktop screens. The comments follow the article on mobile, but on larger screens sit on the left hand side.

<div id="gid-1993718" class="gist-insert">
  <a href="https://gist.github.com/1993718" target="_blank">https://gist.github.com/1993718</a>
</div>

## A fresh start

Over the last year or so, I feel my writing has improved quite a bit. Looking back at the last iteration of this site, I felt quite embarrased looking at the old content. For better or worse I have taken a gamble and scrapped the posts and all of the portfolio. Some day I may put the examples of work back, but in their current state they feel quite dated.

Over the years I have found an amazing selection of people doing  incredible things on the internet. I have followed great conversations on twitter and read some really useful articles in my RSS reader. Part of this challenge will be to grow discussion around the posts I write, and to do that I am going to actively engage the community through twitter and google plus.
