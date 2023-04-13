import type { FlexProps } from '@looker/components';
import React from 'react';
interface FieldProps extends Omit<FlexProps, 'onClick' | 'disabled'> {
    label: string;
    displayLabel: React.ReactNode;
    detail?: string;
    payload?: any;
    isSecondary?: boolean;
    disabled?: string;
    onClick: (label: string, payload?: any) => void;
}
export declare const Field: import("styled-components").StyledComponent<({ payload, label, onClick, isSecondary, detail, disabled, displayLabel, ...props }: FieldProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
