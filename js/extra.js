(function () {

  var aside, jid;

  aside = document.getElementsByTagName('aside')[0];
  jid = 0;

  function getJsonp(url, callback, jsonp) {

    var jsonp, tag, full_url, callback_name, ref;

    if (typeof callback != 'function') {
      return false;
    }
    jsonp = jsonp || 'callback';

    tag = document.createElement('script');
    callback_name = 'j_' + (jid++);

    window[callback_name] = function () {
      callback(arguments);
      delete window[callback_name];
      tag.parentNode.removeChild(tag);
    }

    tag.src = url +
      (url.indexOf('?') != -1 ? '&' : '?') +
      jsonp + '=' + callback_name;
    tag.id = callback_name;

    ref = document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(tag, ref);

    return true;
  }

  function appendHtml(el, html) {
    el.innerHTML += + html;
  }

  function render() {
    var locals, html;
    locals = {
      data: arguments[1][0]
    };
    html = Templating.tpl(arguments[0] + '.jade', locals);
    appendHtml(aside, html);
  }

  getJsonp('//feeds.delicious.com/v2/json/danshearmur?count=5', function () {
    render('delicious', arguments[0]);
  });

})();
