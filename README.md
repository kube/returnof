returnof
========

Function return type
--------------------

At the moment TypeScript does not allow to get the **return type of a function**.

```ts
const hello = () => ({ hello: 'World' })

type helloReturnType = typeof(hello) // ERROR
```

`returnof` allows you to get it, at the cost of (a little) more verbosity.

```ts
import returnof from 'returnof'

const hello = () => ({ hello: 'World' })

const helloReturnValue = returnof(hello)
type helloReturnType = typeof helloReturnValue // { hello: string }
```

At runtime, `returnofHello` value will be `null`.


Overloaded functions
--------------------

If your function is overloaded and there is an ambiguity on which one you're trying to get the return type, you can pass additional arguments:

```ts
declare function hello(): void
declare function hello(a: number): number

const helloReturnValue = returnof(hello)
type helloReturnType = typeof helloReturnValue // void

const helloReturnValue = returnof(hello, 42)
type helloReturnType = typeof helloReturnValue // number
```

If there's no ambiguity, you **do not need** to pass additional arguments:

```ts
declare function hello(a: number): number

const helloReturnValue = returnof(hello)
type helloReturnType = typeof helloReturnValue // number
```
