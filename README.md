# FrozenObject<T>

A TypeScript utility type that provides **deep readonly access** while remaining
**compatible with existing mutable APIs**.

The same object is:
- **Deeply immutable** when accessed as `FrozenObject<T>`
- **Fully mutable** when passed to code expecting `T`

No overloads, no unions, no runtime cost.

---

## Installation

```
npm install OR
make install-deps
```

## Run Unit Tests

```
npm run typecheck OR
make run-tests
```