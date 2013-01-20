// Generated by CoffeeScript 1.3.3
(function() {
  var Portfolio, Site, test, utils;

  utils = (function() {
    var format_r, id_counter;
    id_counter = 0;
    format_r = /[^a-zA-Z0-9-]/g;
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
      format: function(str) {
        return this.trim(str.toLowerCase()).replace(format_r, "-");
      },
      remove: function(el) {
        return el.parentElement.removeChild(el);
      }
    };
  })();

  window.utils = utils;

  Site = (function() {

    function Site(conf, container) {
      this.conf = conf;
      this.container = container;
      this.conf.trunc_site_link = this.conf.site_link.replace(/.*?:\/\//g, "");
      this.conf.id = utils.id("site-");
      this.image = "<img class=\"browser-screenshot\" src=\"img/screenshots/" + this.conf.site_img + ".png\" alt=\"screenshot\" />";
      if (Modernizr.csstransforms) {
        this.draw_iframe();
      } else {
        this.draw_image();
      }
    }

    Site.prototype.draw_ui = function(content) {
      return this.container.innerHTML += "<div id=\"" + (utils.format(this.conf.site_name)) + "\" class=\"item\">\n    <a class=\"lb-reset\" href=\"#_\"></a>\n    <div class=\"lb-wrapper\">\n        <div class=\"browser\" data-site-id=\"" + this.conf.id + "\">\n            <a class=\"browser-search\" href=\"#" + (utils.format(this.conf.site_name)) + "\">" + this.conf.trunc_site_link + "</a>\n            <div class=\"browser-dom\">\n                " + content + "\n            </div>\n        </div>\n        <div class=\"lb-content\">\n            <h2><a href=\"" + this.conf.site_link + "\" target=\"_blank\">" + this.conf.site_name + "</a></h2>\n            " + (this.conf.site_desc || "") + "\n            <p><a href=\"" + this.conf.site_link + "\" target=\"_blank\">" + this.conf.trunc_site_link + "</a></p>\n            <p><a href=\"#_\">Close</a></p>\n        </div>\n    </div>\n</div>";
    };

    Site.prototype.draw_image = function() {
      return this.draw_ui(this.image);
    };

    Site.prototype.draw_iframe = function() {
      var _this = this;
      this.draw_ui("" + this.image + "\n<iframe class=\"browser-iframe\"></iframe>\n<div class=\"browser-spinner\"></div>");
      return setTimeout(function() {
        return _this.load.call(_this);
      }, 1);
    };

    Site.prototype.load = function() {
      var _this = this;
      this.browser = utils.q("[data-site-id=\"" + this.conf.id + "\"]");
      this.iframe = utils.q(".browser-iframe", this.browser);
      this.spinner = utils.q(".browser-spinner", this.browser);
      this.dom = utils.q(".browser-dom", this.browser);
      this.iframe.addEventListener("load", function(e) {
        return _this.browser.classList.add("browser-show");
      });
      this.iframe.src = this.conf.site_link;
      return this.iframe_showing = true;
    };

    Site.prototype.remove_iframe = function() {
      var _this = this;
      this.browser.classList.remove("browser-show");
      return setTimeout(function() {
        utils.remove(_this.iframe);
        return _this.browser.classList.add("browser-show");
      }, 500);
    };

    Site.prototype.add_iframe = function() {
      var _this = this;
      this.browser.classList.remove("browser-show");
      return setTimeout(function() {
        return _this.dom.insertBefore(_this.iframe, _this.spinner);
      }, 500);
    };

    Site.prototype.toggle_iframe = function() {
      if (this.iframe_showing) {
        this.remove_iframe();
      } else {
        this.add_iframe();
      }
      return this.iframe_showing = !this.iframe_showing;
    };

    return Site;

  })();

  Portfolio = (function() {

    function Portfolio(init, selector) {
      this.init = init;
      this.selector = selector;
      this.container = utils.q(this.selector);
      if (!(this.container != null)) {
        return;
      }
      this.render();
      this.bind_btns();
    }

    Portfolio.prototype.render = function() {
      var div,
        _this = this;
      this.iframe_showing = Modernizr.csstransforms;
      this.browsers = [];
      div = false;
      return this.init.forEach(function(o) {
        if (o.p) {
          div = false;
          return _this.p(o.p);
        } else {
          if (!div) {
            div = document.createElement("div");
            div.className = "container";
            _this.container.appendChild(div);
          }
          return _this.browsers.push(new Site(o.site, div));
        }
      });
    };

    Portfolio.prototype.p = function(txt) {
      return this.container.innerHTML += "<p>" + txt + "</p>";
    };

    Portfolio.prototype.toggle_all = function(show_iframe) {
      var method;
      if (show_iframe === this.iframe_showing) {
        return;
      }
      method = "" + (show_iframe ? 'add' : 'remove') + "_iframe";
      this.browsers.forEach(function(browser) {
        return browser[method]();
      });
      return this.iframe_showing = !this.iframe_showing;
    };

    Portfolio.prototype.bind_btns = function() {
      var nav,
        _this = this;
      nav = utils.q(".iframe-toggle");
      nav.classList.add("on");
      return utils.qa(".iframe-toggle-butt").forEach(function(el) {
        return el.addEventListener("click", function(e) {
          var bool;
          e.preventDefault();
          bool = el.id === "true";
          _this.toggle_all(bool);
          if (bool) {
            nav.classList.remove("off");
            return nav.classList.add("on");
          } else {
            nav.classList.remove("on");
            return nav.classList.add("off");
          }
        });
      });
    };

    return Portfolio;

  })();

  window.Portfolio = Portfolio;

  test = [
    {
      p: "lol what"
    }, {
      site: {
        site_name: "Semantico Coding Standards",
        site_link: "http://semantico.github.com/standards",
        site_img: "standards"
      }
    }, {
      p: "lol what"
    }, {
      site: {
        site_name: "Semantico Corporate Website",
        site_link: "http://www.semantico.com",
        site_img: "standards"
      }
    }, {
      site: {
        site_name: "xyz",
        site_link: "http://www.semantico.com",
        site_img: "standards"
      }
    }, {
      site: {
        site_name: "Old Acres Printers",
        site_link: "http://www.oldacres.co.uk",
        site_img: "standards"
      }
    }, {
      p: "lol what"
    }, {
      site: {
        site_name: "Semantico Coding Standards",
        site_link: "http://semantico.github.com/standards",
        site_img: "standards"
      }
    }
  ];

  window.portfolio = new Portfolio(test, '#main');

}).call(this);
