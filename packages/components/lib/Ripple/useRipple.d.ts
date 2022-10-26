import type { UseRippleProps, UseRippleResponse } from './types';
/**
 * @returns callbacks should be mapped to DOM event handlers (see useRippleHandlers)
 * and remaining props should be passed to an internal element that includes rippleStyle
 */
export declare const useRipple: ({ bounded, className, color, height, size, style, width, }: UseRippleProps) => UseRippleResponse;
