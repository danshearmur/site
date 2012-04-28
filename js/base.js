/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-svg-mq-cssclasses-teststyles-load
 */window.Modernizr=function(a,b,c){function d(a){o.cssText=a}function e(a,b){return d(prefixes.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}var i="2.5.3",j={},k=!0,l=b.documentElement,m="modernizr",n=b.createElement(m),o=n.style,p,q={}.toString,r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,g,h,i=b.createElement("div"),j=b.body,k=j?j:b.createElement("body");if(parseInt(d,10))while(d--)h=b.createElement("div"),h.id=e?e[d]:m+(d+1),i.appendChild(h);return f=["&#173;","<style>",a,"</style>"].join(""),i.id=m,(j?i:k).innerHTML+=f,k.appendChild(i),j||(k.style.background="",l.appendChild(k)),g=c(i,a),j?i.parentNode.removeChild(i):k.parentNode.removeChild(k),!!g},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+m+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A={}.hasOwnProperty,B;!f(A,"undefined")&&!f(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if(typeof b!="function")throw new TypeError;var c=w.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(w.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(w.call(arguments)))};return d}),s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect};for(var C in s)B(s,C)&&(x=C.toLowerCase(),j[x]=s[C](),v.push((j[x]?"":"no-")+x));return d(""),n=p=null,j._version=i,j.mq=z,j.testStyles=y,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(k?" js "+v.join(" "):""),j}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(){function h(a){return document.getElementsByTagName(a)[0]}function i(a){var b,c,d,e;if(document.querySelectorAll)return document.querySelectorAll("div."+a);b=document.getElementsByTagNmae("div"),c=[];for(d=0;d<b.length;d++)e=b[d],e.className.indexOf(a)!=-1&&c.push(e);return c}window._gaq=_gaq=[["_setAccount","UA-21690040-1"],["_trackPageview"],["_trackPageLoadTime"],["_setSiteSpeedSampleRate",10]],window.disqus_shortname="danshearmursblog",window.disqus_developer=1,Modernizr.load(("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js"),Modernizr.load([{test:Modernizr.mq("only screen and (min-width: 768px)")&&window.location.pathname=="/",yep:"/js/desktop.js"},{test:window.location.pathname=="/",nope:"http://danshearmursblog.disqus.com/embed.js"}]);var a,b,c,d,e,f,g;a=h("body"),b=h("header"),c=[],function(){var b,c,d,e;b=new Date,c=Math.floor(b.getMinutes()/2.5),d="t"+c,e=" trans",a.className=d,a.className.indexOf(e)!=-1?a.className+=e:setTimeout(function(){a.className+=e},1),setTimeout(arguments.callee,15e4)}(),document.write=function(a){var b,c;if(a.indexOf('<div id="gist-')!=0)return;b=/<div id=\"gist-(\d+)/.exec(a)[1],el=document.getElementById("gid-"+b),el.innerHTML=a,el.className+="gist-content"},d=i("gist-insert"),g=[];for(e=0;e<d.length;e++)f=d[e].id.replace("gid-",""),Modernizr.load("https://gist.github.com/"+f+".js")})();