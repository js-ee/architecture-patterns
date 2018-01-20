
const assert = require('assert');
const Observer = require('../../observer/observer');

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

    // it('instanseof Positive', function () {
    //     const instance = new Positive(1);
    //     assert(instance instanceof Positive);
    // });
    //
    // it('instanseof Number', function () {
    //     const instance = new Positive(1);
    //     assert(instance instanceof Number);
    // });
    //
    // it('equal to number', function () {
    //     const str = 25;
    //     const instance = new Positive(str);
    //     assert.equal(instance, str);
    // });
    //
    // it('has expected methods', function () {
    //     const instance = new Positive();
    //     assert.equal(typeof instance.validate, 'function', 'validate is not defined');
    // });
    //
    // describe('validate', function () {
    //     it('empty', function () {
    //         assert(!(new Positive()).validate());
    //     });
    //
    //     it('valid', function () {
    //         assert((new Positive(1)).validate());
    //     });
    //
    //     it('invalid', function () {
    //         assert(!(new Positive(-1)).validate());
    //         assert(!(new Positive('Hello')).validate());
    //     });
    // });
});
