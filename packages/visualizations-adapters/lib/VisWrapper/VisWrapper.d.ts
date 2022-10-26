import type { ReactNode, Ref, FC } from 'react';
import type { CommonCartesianProperties } from '../types';
export declare type VisWrapperProps = {
    children?: ReactNode;
    legend?: CommonCartesianProperties['legend'];
};
export declare type VisWrapperInternalProps = VisWrapperProps & {
    className?: string;
    ref?: Ref<HTMLDivElement>;
};
export declare const VisWrapper: import("styled-components").StyledComponent<FC<VisWrapperInternalProps>, import("styled-components").DefaultTheme, {}, never>;
