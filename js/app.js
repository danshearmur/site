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
      },
      trim: function(str) {
        return String.prototype.trim.call(str);
      },
      toggleClass: function(el, name, isOn) {
        if (isOn) {
          return el.className += " " + name;
        } else {
          return el.className = this.trim((" " + el.className + " ").replace(new RegExp(" " + name + " ", "g")));
        }
      }
    };
  })();

  Site = (function() {

    function Site(conf, container) {
      this.conf = conf;
      this.container = container;
      this.conf.trunc_site_link = this.conf.site_link.replace(/.*?:\/\//g, "");
      this.conf.id = utils.id("site-");
      this.image = "";
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
      return this.drawUi(this.image);
    };

    Site.prototype.drawIframe = function() {
      this.drawUi("" + this.image + "\n<iframe class=\"browser-iframe\"></iframe>\n<div class=\"browser-spinner\"></div>");
      this.iframe = utils.q(".browser-iframe", this.browser);
      this.spinner = utils.q(".browser-spinner", this.browser);
      return this.load();
    };

    Site.prototype.load = function() {
      var _this = this;
      this.iframe.addEventListener('load', function(e) {
        console.log(_this.browser);
        return utils.toggleClass(_this.browser, "browser-iframe-show", true);
      });
      return this.iframe.src = this.conf.site_link;
    };

    return Site;

  })();

  container = utils.q('.container');

  site = new Site({
    site_link: "http://semantico.github.com/standards",
    site_img: "standards"
  }, container);

  new Site({
    site_link: "http://www.semantico.com",
    site_img: "standards"
  }, container);

  new Site({
    site_link: "http://www.semantico.com",
    site_img: "standards"
  }, container);

  new Site({
    site_link: "http://www.oldacres.co.uk",
    site_img: "standards"
  }, container);

}).call(this);
