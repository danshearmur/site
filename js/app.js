(function () {

  window._gaq = _gaq=[['_setAccount','UA-21690040-1'],['_trackPageview'],['_trackPageLoadTime'],['_setSiteSpeedSampleRate',10]];
  window.disqus_shortname = 'danshearmursblog';
  window.disqus_developer = 1;

  Modernizr.load([{
    load:('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js' 
  },{
    test: Modernizr.mq('only screen and (min-width: 768px)') && window.location.pathname == '/',
    yep: '/js/desktop.js'
  },{
    test: window.location.pathname == '/',
    nope: 'http://danshearmursblog.disqus.com/embed.js'
  }]);

  var body, header, svgs, gists, g, gist_id, scripts;

  function getFirst(el) {
    return document.getElementsByTagName(el)[0];
  }

  function getDivsByClass(class) {
    var divs, classes, i, div;
    if (document.querySelectorAll) {
      return document.querySelectorAll('div.' + class);
    }
    divs = document.getElementsByTagNmae('div');
    classes = [];
    for (i = 0; i < divs.length; i++) {
      div = divs[i];
      if (div.className.indexOf(class) != -1) {
        classes.push(div);
      }
    }
    return classes;
  }

  body   = getFirst('body');
  header = getFirst('header');

  svgs = [];

  // Set the class on the body, and update every 2.5 minutes
  (function () {

    var load_time, interval, time_class, transition_class;

    load_time        = new Date();
    interval         = Math.floor(load_time.getMinutes() / 2.5);
    time_class       = "t" + interval;
    transition_class = ' trans';

    body.className = time_class;
    if (body.className.indexOf(transition_class) != -1) {
      body.className += transition_class;
    } else {
      setTimeout(function () {
        body.className += transition_class;
      }, 1);
    }

    updateColours();

    setTimeout(arguments.callee, 2.5 * 60 * 1000);

  }) ();

  // <div id="gid-1993718" class="gist-insert"></div>
  document.write = function (str) {
    var id, div;
    if (str.indexOf('<div id=\"gist-') != 0) {
      return;
    }
    id = /<div id=\"gist-(\d+)/.exec(str)[1];
    el = document.getElementById('gid-' + id);
    el.innerHTML = str;
    el.className += 'gist-content';
  }

  gists = getDivsByClass('gist-insert');
  scripts = [];
  for (g = 0; g < gists.length; g++) {
    gist_id = gists[g].id.replace('gid-', '');
    Modernizr.load('https://gist.github.com/' + gist_id + '.js');
  }

})();
