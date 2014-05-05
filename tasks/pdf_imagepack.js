/*
 * pdf-imagepack
 *
 *
 * Copyright (c) 2014 suisho
 * Licensed under the MIT license.
 */
'use strict';
var PDFImagePack = require("pdf-image-pack");

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('pdf_imagepack', 'Generate image packed pdf', function () {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pdf : {} // pdf option
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var srcImages = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      var imagePack = new PDFImagePack(options.pdf);
      imagePack.output(srcImages, file.dest, function(err){
        if(err){
          grunt.log.warn('error ' + err);
        }
        // Print a success message.
        grunt.log.writeln('File "' + file.dest + '" created.');
        done();
      });
    });
  });

};
