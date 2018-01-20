
function Observer () {
    this._events = {};
}

Observer.prototype.on = function on (event, handler) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(handler);
};

Observer.prototype.off = function off (event, handler) {

};

Observer.prototype.emit = function emit (event, data) {
    if (this._events[event]) return;
    this._events[event].forEach(function (handler) {
        handler();
    });
};

module.exports = Observer;
