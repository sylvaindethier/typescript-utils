[**@sdt/typescript-utils**](../README.md) • **Docs**

***

[@sdt/typescript-utils](../globals.md) / IfBoolean

# Type alias: IfBoolean\<T, Then, Else\>

```ts
type IfBoolean<T, Then, Else>: IfNotAnyOrNever<T, T extends boolean ? Then : Else, Else>;
```

Test a type against `boolean`

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` | - | The type to test against `boolean` |
| `Then` | `true` | The type to return in case the condition is true |
| `Else` | `false` | The type to return in case the condition is false |

## Source

[primitives/IfBoolean.d.ts:9](https://github.com/sylvaindethier/typescript-utils/blob/f271884d3138386b859e820c285b0ab8864227bb/types/primitives/IfBoolean.d.ts#L9)