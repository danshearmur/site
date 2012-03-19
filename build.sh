#!/bin/sh
TMPL_FOLDER="tmpl/"
JS_FOLDER="js/"
TMPL="templates"
BASE="base.js"
DESKTOP="desktop.js"
CSS_FOLDER="css/"
CSS_FILE="dan.less"
rm $JS_FOLDER$BASE $JS_FOLDER$DESKTOP
tplcpl -t $TMPL_FOLDER -o $JS_FOLDER${TMPL}.js
SCRIPTS="raphael-min app"
DESKTOP_SCRIPTS="twitter-text moment ${TMPL} extra"
for script in $SCRIPTS; do
  uglifyjs $JS_FOLDER$script.js >> $JS_FOLDER$BASE
done
for script in $DESKTOP_SCRIPTS; do
  uglifyjs $JS_FOLDER$script.js >> $JS_FOLDER$DESKTOP
done
lessc $CSS_FOLDER$CSS_FILE $CSS_FOLDER$CSS_FILE.min.css -compress