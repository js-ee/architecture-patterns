/**
 * Observer pattern implementation
 *
 * @constructor
 */
function Observer () {
    this._events = {};
}

/**
 * Subscribe on the event
 *
 * @param {String} event
 * @param {Function} handler
 */
Observer.prototype.on = function on (event, handler) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(handler);
};

/**
 * Unsubscribe on the event
 *
 * @param {String} event
 * @param {Function} handler
 */
Observer.prototype.off = function off (event, handler) {
    if (handler && this._events[event]) {
        this._events[event] = this._events[event].filter(h => h !== handler);
    } else {
        this._events[event] = [];
    }
};

/**
 * Subscribe on the event just once
 *
 * @param {String} event
 * @param {Function} handler
 */
Observer.prototype.once = function once (event, handler) {
    const proxyHandler = (...args) => {
        this.off(event, proxyHandler);
        return handler(...args);
    };
    this.on(event, proxyHandler);
};

/**
 * Emit the event with the data
 *
 * @param {String} event
 * @param {*} data
 */
Observer.prototype.emit = function emit (event, data) {
    if (!this._events[event]) return;
    this._events[event].forEach(function (handler) {
        handler(data);
    });
};

module.exports = Observer;
