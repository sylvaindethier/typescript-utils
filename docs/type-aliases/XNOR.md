[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / XNOR

# Type alias: XNOR\<X, Y, E\>

```ts
type XNOR<X, Y, E>: NOT_XOR<X, Y, E>;
```

Logical XNOR operator
[NOT_XOR](NOT_XOR.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `X` *extends* `boolean` | - | The X boolean to perform the operation |
| `Y` *extends* `boolean` | - | The Y boolean to perform the operation |
| `E` | `never` | The type to return in case any of the boolean is not literal |

## Source

[logic/operators/EQV.d.ts:18](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/logic/operators/EQV.d.ts#L18)