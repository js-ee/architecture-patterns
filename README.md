# architecture-patterns
Software Architecture Patterns

- Observer
- Watcher

```javascript
const Observer = require('architecture-patterns/observer');
const observer = new Observer();
observer.on('some_event', () => console.log('onEventCalled'));
observer.emit('some_event');
```

```javascript
const Watcher = require('architecture-patterns/watcher');
const watcher = new Watcher(17);
watcher.watch(() => console.log('onUpdated'));
watcher.update(42);
```
