var webpage = require('webpage');
var fs = require('fs');

var file = fs.read('../../../_includes/portfolio/sites.json');
var json = JSON.parse(file);
var sites = [];
json.forEach(function (item) {
    if (!item.p) {
        sites.push(item.site.site_link);
    }
});
    console.log(sites);

(function (i) {
    console.log(i);
    var page = webpage.create();
    page.viewportSize = { width: 1200, height: 622 };
    page.clipRect = { top: 0, left: 0, width: 1200, height: 622 };
    var site = sites[i];
    var image = site.replace(/.*?:\/\//g, '').replace(/[^a-zA-Z0-9-]/g, '-') + '.png';
    var fn = arguments.callee;
    console.log(site, image);
    page.open(site, function () {
        setTimeout(function () { // dom ready doesn't mean all scripts have finished
            page.render(image);
            if (++i == sites.length) {
                phantom.exit();
            } else {
                fn.call(null, i);
            }
        }, 5000);
    });
})(0);
