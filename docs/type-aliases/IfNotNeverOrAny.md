[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNotNeverOrAny

# Type alias: IfNotNeverOrAny\<T, Then, Else\>

```ts
type IfNotNeverOrAny<T, Then, Else>: IfAnyOrNever_Not<T, Then, Else>;
```

Test a type against not `any` or `never`
[IfAnyOrNever_Not](IfAnyOrNever_Not.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `any` or `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfAnyOrNever.d.ts:45](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/primitives/IfAnyOrNever.d.ts#L45)