import type { TrapStackContextProps } from '@looker/components-providers';
import type { Context, Ref } from 'react';
export interface UseTrapStackBaseProps<Element extends HTMLElement = HTMLElement> {
    /**
     * Turns off functionality completely, for use in components
     * where trap behavior can be optionally disabled
     */
    disabled?: boolean;
    /**
     * A forwarded ref to be merged with the ref returned in the hook result
     */
    ref?: Ref<Element>;
}
export interface UseTrapStackProps<Element extends HTMLElement = HTMLElement, Options = unknown> extends UseTrapStackBaseProps<Element> {
    context: Context<TrapStackContextProps<Options>>;
    options?: Options;
}
/**
 * Adds & removes an element to & from a context managing a
 * stack of "traps" – e.g. scroll lock or focus trap in one or more
 * Dialogs & Popovers
 */
export declare const useTrapStack: <E extends HTMLElement = HTMLElement, O = unknown>({ context, disabled, ref, options, }: UseTrapStackProps<E, O>) => [E | null, (node: E | null) => void];
