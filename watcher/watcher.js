
function Watcher (value) {
    this._value = value;
    this._handlers = [];
}

Watcher.prototype.valueOf = function valueOf () {
    return this._value;
};

Watcher.prototype.toString = function toString () {
    return '' + this._value;
};

Watcher.prototype.watch = function watch (handler) {
    this._handlers.push(handler);
};

Watcher.prototype.update = function update (value) {
    this._value = value;
    this._handlers.forEach(function (handler) {
        handler(value);
    });
};

module.exports = Watcher;
