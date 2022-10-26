import type { UseBoundedRippleProps, UseBoundedRippleResponse } from './types';
/**
 * @returns callbacks should be mapped to DOM event handlers (see useRippleHandlers)
 * and remaining props should be passed to an internal element that includes rippleStyle
 */
export declare const useBoundedRipple: <T extends HTMLElement = HTMLElement>({ ref: forwardedRef, ...props }: UseBoundedRippleProps<T>) => UseBoundedRippleResponse<T>;
