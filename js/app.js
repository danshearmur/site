// Generated by CoffeeScript 1.3.3
(function() {
  var Site, container, site, utils;

  utils = (function() {
    var id_counter;
    id_counter = 0;
    return {
      q: function(selector, scope) {
        return (scope || document).querySelector(selector);
      },
      qa: function(selector, scope) {
        var nodes;
        nodes = (scope || document).querySelectorAll(selector);
        return Array.prototype.slice.call(nodes);
      },
      id: function(pfx) {
        var id, start;
        id = ++id_counter;
        start = pfx != null ? '' + pfx : '';
        return start + id;
      }
    };
  })();

  Site = (function() {

    function Site(conf, container) {
      this.conf = conf;
      this.container = container;
      this.conf.trunc_site_link = this.conf.site_link.replace(/.*?:\/\//g, "");
      this.conf.id = utils.id("site-");
      if (Modernizr.csstransforms) {
        this.drawIframe();
      } else {
        this.drawImage();
      }
    }

    Site.prototype.drawUi = function(content) {
      this.container.innerHTML += "<div class=\"browser\" data-site-id=\"" + this.conf.id + "\">\n    <a class=\"browser-search\" href=\"" + this.conf.site_link + "\" target=\"_blank\">" + this.conf.trunc_site_link + "</a>\n    <div class=\"browser-dom\">\n        " + content + "\n    </div>\n</div>";
      return this.browser = utils.q("[data-site-id=\"" + this.conf.id + "\"]", this.container);
    };

    Site.prototype.drawImage = function() {
      return this.drawUi("<img src=\"img/screenshots/" + this.conf.site_img + ".png\" alt=\"screenshot\" />");
    };

    Site.prototype.drawIframe = function() {
      this.drawUi("<iframe class=\"browser-iframe\"></iframe>\n<div class=\"browser-spinner\"></div>");
      this.iframe = utils.q(".browser-iframe", this.browser);
      this.spinner = utils.q(".browser-spinner", this.browser);
      return this.load();
    };

    Site.prototype.load = function() {
      var _this = this;
      this.iframe.addEventListener('load', function(e) {
        return _this.browser.className += " browser-iframe-show";
      });
      return this.iframe.src = this.conf.site_link;
    };

    return Site;

  })();

  container = utils.qa('.container');

  site = new Site({
    site_link: "http://semantico.github.com/standards",
    site_img: "standards"
  }, container[0]);

}).call(this);
