var page = require('webpage').create();

page.paperSize = { format: 'A4', orientation: 'portrait', border: '18px' };
page.open('http://dan.shearmur.co.uk/cv/', function () {
    page.render('cv.pdf');
    phantom.exit();
});
