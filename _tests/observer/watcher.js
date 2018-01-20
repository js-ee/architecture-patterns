
const assert = require('assert');
const Watcher = require('../../observer/watcher');

describe('Watcher', function () {
    it('should be defined', function () {
        assert.equal(typeof Watcher, 'function');
        assert.equal(typeof Watcher.prototype, 'object', 'prototype is not defined');
    });

    it('should have proper methods', function () {
        const observer = new Watcher();
        assert.equal(typeof observer.watch, 'function');
        assert.equal(typeof observer.update, 'function');
    });

    it('should call event handler', function (done) {
        const observer = new Watcher();
        observer.watch(done);
        observer.update('some_event');
    });
});
