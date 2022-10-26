import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { RippleCallbacks } from './types';
export declare const rippleHandlerKeys: readonly ["onBlur", "onFocus", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseUp"];
export declare type RippleHandlers<E extends HTMLElement> = Pick<CompatibleHTMLProps<E>, typeof rippleHandlerKeys[number]>;
/**
 *
 * @param callbacks from useRipple, start and end functions for foreground and background
 * @param currentHandlers existing event handlers for the element will be wrapped
 * @param disabled
 * @returns wrapped event handlers
 */
export declare const useRippleHandlers: <E extends HTMLElement>({ startBG, endBG, startFG, endFG }: RippleCallbacks, currentHandlers: RippleHandlers<E>, disabled?: boolean | undefined) => RippleHandlers<E>;
