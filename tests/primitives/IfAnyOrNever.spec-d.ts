import { expectTypeOf } from "vitest";
import type { IfAnyOrNever } from "#types/primitives";
type Actual<T> = IfAnyOrNever<T, TRUE, FALSE>;

// Prevents false positive, true negative, and error
type TRUE = "TRUE";
type FALSE = "FALSE";

describe("should respect truth table", () => {
  test("with `any` should resolve to `true`", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type T = any;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `never` should resolve to `true`", () => {
    type T = never;
    type Expected = TRUE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `unknown` should resolve to `false`", () => {
    type T = unknown;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `undefined` should resolve to `false`", () => {
    type T = undefined;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `null` should resolve to `false`", () => {
    type T = null;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `boolean` should resolve to `false`", () => {
    type T = boolean;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `number` should resolve to `false`", () => {
    type T = number;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `bigint` should resolve to `false`", () => {
    type T = bigint;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `string` should resolve to `false`", () => {
    type T = string;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });

  test("with `symbol` should resolve to `false`", () => {
    type T = symbol;
    type Expected = FALSE;
    expectTypeOf<Actual<T>>().toEqualTypeOf<Expected>();
  });
});
