import type { Context, ReactNode } from 'react';
import type { Trap, TrapStackContextProps } from './types';
export interface TrapStackProviderProps<O = unknown> {
    activate: (trap: Trap<O>) => () => void;
    children?: ReactNode;
    context: Context<TrapStackContextProps<O>>;
}
/**
 * Manages "trap" behavior (e.g. scroll lock & focus trap)
 * in a stack of elements (e.g. layered Dialogs & Popovers)
 */
export declare const TrapStackProvider: <O>({ activate, context, children, }: TrapStackProviderProps<O>) => JSX.Element;
