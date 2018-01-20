
const assert = require('chai').assert;
const Proxy = require('../../proxy');

describe('Proxy', function () {
    it('should be defined', function () {
        assert.equal(typeof Proxy, 'function');
        assert.equal(typeof Proxy.prototype, 'object', 'prototype is not defined');
    });

    it('should create proxy object', function () {
        const proxy = new Proxy({}, {});
        assert.typeOf(proxy, 'object');
        assert.instanceOf(proxy, Object);
    });

    it('should have initial object properties', function () {
        const proxy = new Proxy({
            a: 1,
            b: 2,
            c: 'hello'
        }, {});
        assert.equal(proxy.a, 1);
        assert.equal(proxy.b, 2);
        assert.equal(proxy.c, 'hello');
    });

    it('should have proxy object properties', function () {
        const proxy = new Proxy({
            a: 1,
            b: 2,
            c: 'hello'
        }, {
            get: (target, key, receiver) => {
                if (key === 'b') {
                    return 'this value was override';
                } else {
                    return Reflect.get(target, key, receiver);
                }
            }
        });
        assert.equal(proxy.a, 1);
        assert.equal(proxy.b, 'this value was override');
        assert.equal(proxy.c, 'hello');
    });
});
