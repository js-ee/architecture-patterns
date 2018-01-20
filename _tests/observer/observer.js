
const assert = require('chai').assert;
const Observer = require('../../observer');

describe('Observer', function () {
    it('should be defined', function () {
        assert.equal(typeof Observer, 'function');
        assert.equal(typeof Observer.prototype, 'object', 'prototype is not defined');
    });

    it('should have proper methods', function () {
        const observer = new Observer();
        assert.equal(typeof observer.on, 'function');
        assert.equal(typeof observer.off, 'function');
        assert.equal(typeof observer.emit, 'function');
    });

    it('should call event handler', function (done) {
        const observer = new Observer();
        observer.on('some_event', done);
        observer.emit('some_event');
    });

    it('should not call event handler after off by handler', function () {
        function handler () {
            throw new Error('Should not be called');
        }
        const observer = new Observer();
        observer.on('some_event', handler);
        observer.off('some_event', handler);
        observer.emit('some_event');
    });

    it('should not call event handler after off without handler', function () {
        function handler () {
            throw new Error('Should not be called');
        }
        const observer = new Observer();
        observer.on('some_event', handler);
        observer.off('some_event');
        observer.emit('some_event');
    });

    it('should call proper event handler', function (done) {
        function handler () {
            throw new Error('Should not be called');
        }
        const observer = new Observer();
        observer.on('some_event', handler);
        observer.on('some_event', done);
        observer.off('some_event', handler);
        observer.emit('some_event');
    });

    it('should call proper event from multiple events', function (done) {
        function handler () {
            throw new Error('Should not be called');
        }
        const observer = new Observer();
        observer.on('proper_event', done);
        observer.on('other_event', handler);
        observer.emit('proper_event');
    });
});
