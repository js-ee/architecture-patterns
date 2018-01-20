/**
 * Inspired by https://habrahabr.ru/company/tuturu/blog/334546/
 */

/**
 * Deep extandable object
 *
 * @constructor {Object}
 */
function DeepObject (initialObject = {}) {
	return new Proxy(initialObject,
		{
			get: function (target, key, receiver) {
				if (key === 'toJSON') {
					return target;
				} else {
					if (!Reflect.has(target, key)) {
						Reflect.set(target, key, DeepObject());
					}
					return Reflect.get(target, key, receiver);
				}
			}
		}
	);
}

module.exports = DeepObject;
