import type { MouseEvent } from 'react';
import React from 'react';
import type { UseTooltipProps } from './types';
export declare const useTooltip: ({ canClose, canOpen, content, isOpen: initializeOpen, width, maxWidth, textAlign, disabled, id, invert, triggerElement, placement: propsPlacement, delay, ariaDescribedById, }: UseTooltipProps) => {
    domProps: {
        onBlur: () => void;
        onFocus: (e: {
            currentTarget: HTMLElement;
        }) => void;
        onMouseOut: (event: MouseEvent<HTMLElement>) => void;
        onMouseOver: (e: {
            currentTarget: HTMLElement;
        }) => void;
        ref: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
        'aria-describedby'?: undefined;
        className?: undefined;
    } | {
        onBlur: () => void;
        onFocus: (e: {
            currentTarget: HTMLElement;
        }) => void;
        onMouseOut: (event: MouseEvent<HTMLElement>) => void;
        onMouseOver: (e: {
            currentTarget: HTMLElement;
        }) => void;
        ref: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
        'aria-describedby': string | undefined;
        className: string | undefined;
    };
    popperInstanceRef: React.MutableRefObject<import("@popperjs/core").Instance | undefined>;
    tooltip: JSX.Element | null;
};
