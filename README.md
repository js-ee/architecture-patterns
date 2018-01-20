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
const observer = new Watcher(17);
observer.watch(() => console.log('onUpdated'));
observer.update(42);
```
