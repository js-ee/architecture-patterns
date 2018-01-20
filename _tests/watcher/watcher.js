
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

    it('should return number', function () {
        const watcher = new Watcher(17);
        assert.equal(watcher, 17);
    });

    it('should return string', function () {
        const watcher = new Watcher('Hello');
        assert.equal(watcher, 'Hello');
    });

    it('should return object', function () {
        const obj = {test: 222};
        const watcher = new Watcher(obj);
        assert.equal(watcher.valueOf(), obj);
    });

    it('should update value', function () {
        const watcher = new Watcher('Hello');
        assert.equal(watcher, 'Hello');

        watcher.update(42);
        assert.equal(watcher, 42);

        const obj = {test: 222};
        watcher.update(obj);
        assert.equal(watcher.valueOf(), obj);
    });
});
