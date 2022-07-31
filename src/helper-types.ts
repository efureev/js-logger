type _PrependNextNum<A extends Array<any>> = A['length'] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never

type _Enumerate<A extends Array<any>, N extends number> = N extends A['length'] ? A : _Enumerate<_PrependNextNum<A>, N>

export type Enumerate<N extends number> = _Enumerate<[], N> extends (infer E)[] ? E : never

export type RangeType<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>> | TO
