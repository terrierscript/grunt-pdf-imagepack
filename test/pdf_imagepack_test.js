'use strict';

var grunt = require('grunt');
var fs = require('fs');
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.pdf_imagepack = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  defaults: function (test) {
    test.expect(1);

    var actual = 8492;
    var stat = fs.statSync('tmp/sample.pdf');
    var expected = stat.size;
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
  with_option: function (test) {
    test.expect(1);

    var actual = 8533;
    var stat = fs.statSync('tmp/sample.pdf');
    var expected = stat.size;
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
};
