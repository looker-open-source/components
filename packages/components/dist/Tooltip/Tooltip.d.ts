import type { ForwardRefExoticComponent, PropsWithoutRef, Ref } from 'react';
import type { TooltipProps } from './types';
declare type RefAttributes = {
    /**
     * @deprecated not actually forwarded, will be removed in 3.x release
     */
    ref?: Ref<unknown>;
};
export declare const Tooltip: ForwardRefExoticComponent<PropsWithoutRef<TooltipProps> & RefAttributes>;
export {};
