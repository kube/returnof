returnof
========

A workaround to get the return type of a function in TypeScript.

DEPRECATED
==========

Since [TypeScript 2.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html), and thanks to new [Conditional Types] and `infer` keyword, a `ReturnType` is now directly available in the language, permitting to get the return type of a function in a fully declarative way.

Usage
-----

```ts
const hello = () => ({ hello: 'World' })

type HelloReturn = ReturnType<typeof hello>
```

****

If for **some *strange* reason** you cannot upgrade to TypeScript 2.8+:

(Some teams stay locked in the past for a while)

[![](https://seeklogo.com/images/B/Back_to_the_Future-logo-B35A8AFD69-seeklogo.com.png)](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html)

Install
-------

```sh
npm install returnof
```


Function return type
--------------------

At the moment TypeScript does not allow to get the **return type of a function**.

```ts
const hello = () => ({ hello: 'World' })

type helloReturnType = typeof hello() // ERROR
```

`returnof` allows you to get it, at the cost of (a little) more verbosity.

```ts
import returnof from 'returnof'

const hello = () => ({ hello: 'World' })

const helloReturnValue = returnof(hello)
type helloReturnType = typeof helloReturnValue // { hello: string }
```

At runtime, `helloReturnValue` will be `null`.


Overloaded functions
--------------------

If your function is overloaded and there is an ambiguity on which one you're trying to get the return type, you can pass additional arguments:

```ts
declare function hello(): void;
declare function hello(a: number): number;

const helloReturnValue = returnof(hello)
type helloReturnType = typeof helloReturnValue // void

const helloReturnValue = returnof(hello, 42)
type helloReturnType = typeof helloReturnValue // number
```

If there's no ambiguity, you **do not need** to pass additional arguments:

```ts
declare function hello(a: number): number;

const helloReturnValue = returnof(hello)
type helloReturnType = typeof helloReturnValue // number
```
