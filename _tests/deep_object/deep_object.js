
const assert = require('chai').assert;
const DeepObject = require('../../deep_object');

describe('DeepObject', function () {
    it('should be defined', function () {
        assert.equal(typeof DeepObject, 'function');
        assert.equal(typeof DeepObject.prototype, 'object', 'prototype is not defined');
    });

    it('should create proxy object', function () {
        const obj = new DeepObject();
        assert.typeOf(obj, 'object');
        assert.instanceOf(obj, Object);
    });

    it('should deeply extend the object', function () {
        const obj = new DeepObject();
        obj.to.virtual.node.in.empty.object = 123;
        assert.equal(obj.to.virtual.node.in.empty.object, 123);
    });

    it('should receive default value', function () {
        const obj = new DeepObject({
            test: 23
        });
        assert.equal(obj.test, 23);
    });
});
