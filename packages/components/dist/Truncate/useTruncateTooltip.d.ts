/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ReactNode } from 'react';
export declare type UseTruncateTooltipProps = {
    children: ReactNode;
    description?: string;
    element?: HTMLElement | null;
};
export declare const useTruncateTooltip: ({ children, description, element, }: UseTruncateTooltipProps) => {
    domProps: {
        onBlur: () => void;
        onFocus: (e: {
            currentTarget: HTMLElement;
        }) => void;
        onMouseOut: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
        onMouseOut: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
