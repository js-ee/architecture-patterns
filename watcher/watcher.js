/**
 * Watcher pattern implementation
 *
 * @param {*} value
 * @constructor
 */
function Watcher (value) {
    this._value = value;
    this._handlers = [];
}

/**
 * Returns the value
 *
 * @returns {*}
 */
Watcher.prototype.valueOf = function valueOf () {
    return this._value;
};

/**
 * Transform the value to String
 *
 * @returns {String}
 */
Watcher.prototype.toString = function toString () {
    return '' + this._value;
};

/**
 * Watch for value changes
 *
 * @param {Function} handler
 */
Watcher.prototype.watch = function watch (handler) {
    this._handlers.push(handler);
};

/**
 * Update the value
 *
 * @param {*} value
 */
Watcher.prototype.update = function update (value) {
    this._value = value;
    this._handlers.forEach(function (handler) {
        handler(value);
    });
};

module.exports = Watcher;
