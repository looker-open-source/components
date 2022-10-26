import type { CSSProperties } from 'react';
import type { Instance, Options } from '@popperjs/core';
import type { ElementOrRef } from './getCurrentNode';
export interface UsePopperProps {
    anchor: ElementOrRef;
    target?: ElementOrRef;
    options: Partial<Options> & {
        placement: Options['placement'];
    };
}
export declare function usePopper({ anchor, target, options }: UsePopperProps): {
    placement: "bottom" | "left" | "right" | "top" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    popperInstanceRef: import("react").MutableRefObject<Instance | undefined>;
    style: CSSProperties;
    targetRef: (node: HTMLElement | null) => void;
};
