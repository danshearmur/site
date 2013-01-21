#!/bin/sh

for file in *.png
do
    echo $file
    optipng -o7 $file
done
