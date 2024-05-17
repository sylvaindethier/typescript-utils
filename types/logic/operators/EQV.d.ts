import type { NOT, XOR } from "../operators";

/**
 * Logical NOT_XOR operator
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam E - The type to return in case any of the boolean is not literal
 */
export type NOT_XOR<X extends boolean, Y extends boolean, E = never> = NOT<XOR<X, Y>, E>;

/**
 * Logical XNOR operator
 * {@link NOT_XOR}
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam E - The type to return in case any of the boolean is not literal
 */
export type XNOR<X extends boolean, Y extends boolean, E = never> = NOT_XOR<X, Y, E>;

/**
 * Logical EQV operator (= XNOR = NOT_XOR)
 * {@link NOT_XOR}
 * @typeParam X - The X boolean to perform the operation
 * @typeParam Y - The Y boolean to perform the operation
 * @typeParam E - The type to return in case any of the boolean is not literal
 */
export type EQV<X extends boolean, Y extends boolean, E = never> = NOT_XOR<X, Y, E>;