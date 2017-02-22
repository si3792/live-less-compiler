#!/usr/bin/env node

'use strict';

var exec = require('child_process').exec;
var chokidar = require('chokidar');
var root = process.cwd();

var onChange = function(f) {
    if (typeof f !== 'string') return;

    exec('lessc  ' + f + ' --autoprefix="last 2 versions,> 5%,Firefox >= 20,iOS 7" > ' + convertExtensionToCSS(f), function(error, output, outputerr) {

      if(error != null) {
        console.log('######## ' + (new Date()).toLocaleTimeString() + ' -- ERROR --   ' + f);
        console.log(outputerr);
      } else {
          console.log("######## " + (new Date()).toLocaleTimeString() + ' -- COMPILED -- ' + f);
       }

    });
};


var convertExtensionToCSS = function(f) {
    return f.slice(0, -4) + 'css';
};

console.log('Watching ' + root);
var watcher = chokidar.watch(root + '/**/*.less', {});

watcher.on('change', onChange);
