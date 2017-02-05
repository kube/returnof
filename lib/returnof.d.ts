
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

// 0 argument functions
export default function returnof<T>(fn: () => T): T

// 1 argument functions
export default function returnof<A, T>(fn: (a: A) => T): T
export default function returnof<A, T>(fn: (a: A) => T, a: A): T

// 2 arguments functions
export default function returnof<A, B, T>(fn: (a: A, b: B) => T): T
export default function returnof<A, B, T>(fn: (a: A, b: B) => T, a: A): T
export default function returnof<A, B, T>(fn: (a: A, b: B) => T, a: A, b: B): T

// 3 arguments functions
export default function returnof<A, B, C, T>(fn: (a: A, b: B, c: C) => T): T
export default function returnof<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A): T
export default function returnof<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A, b: B): T
export default function returnof<A, B, C, T>(fn: (a: A, b: B, c: C) => T, a: A, b: B, c: C): T

// 4 arguments functions
export default function returnof<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T): T
export default function returnof<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A): T
export default function returnof<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B): T
export default function returnof<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B, c: C): T
export default function returnof<A, B, C, D, T>(fn: (a: A, b: B, c: C, d: D) => T, a: A, b: B, c: C, d: D): T
