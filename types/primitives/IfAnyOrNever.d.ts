import type { IfAny } from "./IfAny.d.ts";
import type { IfNever } from "./IfNever.d.ts";

/**
 * Test a type against `any` or `never`
 * @typeParam T - The type to test against `any` or `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfAnyOrNever<T, Then = true, Else = false> = IfAny<T, Then, IfNever<T, Then, Else>>;

/**
 * Test a type against `any` or `never`
 * {@link IfAnyOrNever}
 * @typeParam T - The type to test against `any` or `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNeverOrAny<T, Then = true, Else = false> = IfAnyOrNever<T, Then, Else>;

/**
 * Test a type against not `any` or `never`
 * @typeParam T - The type to test against `any` or `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNotAnyOrNever<T, Then = true, Else = false> = IfAny<T, Else, IfNever<T, Else, Then>>;

/**
 * Test a type against not `any` or `never`
 * {@link IfNotAnyOrNever}
 * @typeParam T - The type to test against `any` or `never`
 * @typeParam Then - The type to return in case the condition is true
 * @typeParam Else - The type to return in case the condition is false
 */
export type IfNotNeverOrAny<T, Then = true, Else = false> = IfNotAnyOrNever<T, Then, Else>;