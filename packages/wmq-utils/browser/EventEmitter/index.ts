class EventEmitter<T extends string, R extends Record<T, any[]>> {
  event: { [K in T]?: Set<(...args: R[T]) => void> } = {};
  pendingEvents: { [K in T]?: R[T][] } = {};

  on(event: T, fn: (...args: R[T]) => void) {
    if (!this.event[event]) {
      this.event[event] = new Set();
    }
    this.event[event].add(fn);

    if (this.pendingEvents[event]) {
      this.pendingEvents[event].forEach((args) => fn(...args));
      delete this.pendingEvents[event];
    }
  }

  emit(event: T, ...args: R[T]) {
    if (this.event[event]) {
      this.event[event].forEach((fn) => fn(...args));
      return;
    }

    if (!this.pendingEvents[event]) this.pendingEvents[event] = [];

    this.pendingEvents[event].push(args);
  }

  off(event: T, fn: (...args: R[T]) => void) {
    this.event[event]?.delete(fn);
  }
}

export default EventEmitter;
