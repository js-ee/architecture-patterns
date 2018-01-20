
const assert = require('chai').assert;
const Watcher = require('../../watcher');

describe('Watcher', function () {
    it('should be defined', function () {
        assert.equal(typeof Watcher, 'function');
        assert.equal(typeof Watcher.prototype, 'object', 'prototype is not defined');
    });

    it('should have proper methods', function () {
        const watcher = new Watcher();
        assert.equal(typeof watcher.watch, 'function');
        assert.equal(typeof watcher.update, 'function');
    });

    it('should call event handler', function (done) {
        const watcher = new Watcher(17);
        watcher.watch(done);
        watcher.update(42);
    });
});
