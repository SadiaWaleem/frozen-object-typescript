# FrozenObject<T>

A TypeScript utility type that provides **deep readonly access** while remaining
**compatible with existing mutable APIs**.

The same object is:
- **Deeply immutable** when accessed as `FrozenObject<T>`
- **Fully mutable** when passed to code expecting `T`

No overloads, no unions, no runtime cost.

---

> [!NOTE]
> Node Version : v21.7.3 is used when writing this code


## Installation

```
npm install OR
make install-deps
```

## Run Unit Tests

```
npm run test OR
make run-tests
```


## Check Type (Run Script `frozenObject.ts`)

```
npm run typecheck OR
make check-type
```