[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfNeverOrAny

# Type alias: IfNeverOrAny\<T, Then, Else\>

```ts
type IfNeverOrAny<T, Then, Else>: IfAnyOrNever<T, Then, Else>;
```

Test a type against `any` or `never`
[IfAnyOrNever](IfAnyOrNever.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `any` or `never` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfAnyOrNever.d.ts:19](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/primitives/IfAnyOrNever.d.ts#L19)