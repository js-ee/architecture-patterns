
function Observer () {
    this._events = {};
}

Observer.prototype.on = function on (event, handler) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(handler);
};

Observer.prototype.off = function off (event, handler) {
    if (handler && this._events[event]) {
        this._events[event] = this._events[event].filter(h => h !== handler);
    } else {
        this._events[event] = [];
    }
};

Observer.prototype.once = function once (event, handler) {
    const proxyHandler = (...args) => {
        this.off(event, proxyHandler);
        return handler(...args);
    };
    this.on(event, proxyHandler);
};

Observer.prototype.emit = function emit (event, data) {
    if (!this._events[event]) return;
    this._events[event].forEach(function (handler) {
        handler(data);
    });
};

module.exports = Observer;
