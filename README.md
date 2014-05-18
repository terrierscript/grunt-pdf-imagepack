# grunt-pdf-imagepack

> Generate image packed pdf

This plugin depends [pdfkit](http://pdfkit.org/).

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pdf-imagepack --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('pdf-imagepack');
```

## The "pdf_imagepack" task

### Overview
In your project's Gruntfile, add a section named `pdf_imagepack` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pdf_imagepack: {
    options: {
      pdf:{
        // Task-specific options (for pdfkit) go here.
      }
    },
    files: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.pdf
Type: `Object`

This option through to pdfkit object.

### Usage Examples

#### Default Options
In this example, the source file is packed to pdf file.

```js
grunt.initConfig({
  pdf_imagepack: {
    defaults: {
      files: {
        'tmp/sample.pdf': ['some/images/*']
      }
    }
  }
})
```

#### Custom Options
If you want specify the pdf size. You can use `options.pdf`

```js
grunt.initConfig({
  pdf_imagepack: {
    with_pdf_option: {
      options : {
        pdf : {
          size : "B5"
        }
      },
      files: {
        'tmp/sample.pdf': ['some/images/*']
      }
    }
  }
})
```

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 suisho. Licensed under the MIT license.
