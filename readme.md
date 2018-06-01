This repository compiles using TypeScript 2.8, but fails in TS 2.9.

In TypeScript 2.9:

```sh
$ npx tsc --noEmit
Cannot read property 'kind' of undefined
```

The error occurs because of the following JSDoc property on `Person.js:11`:

```
@param {<type>} person { description }
```
