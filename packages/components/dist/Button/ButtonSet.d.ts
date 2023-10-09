import type { ForwardRefExoticComponent, MouseEvent, ReactNode, Ref } from 'react';
import React from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
import type { ButtonSetCallback } from './ButtonSetContext';
export interface ButtonSetOption {
    value: string;
    label?: string;
    disabled?: boolean;
}
interface ButtonSetProps<TValue extends string | string[] = string[]> extends SimpleLayoutProps, Omit<CompatibleHTMLProps<HTMLDivElement>, 'value' | 'defaultValue'> {
    /**
     * One or more ButtonItem (do not use if using options)
     */
    children?: ReactNode;
    /**
     * Available options (do not use if using ButtonItem children)
     */
    options?: ButtonSetOption[];
    /**
     * Value for controlling the component
     */
    value?: TValue;
    onItemClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export interface ButtonGroupOrToggleBaseProps<TValue extends string | string[] = string[]> extends Omit<ButtonSetProps<TValue>, 'onChange' | 'onItemClick'> {
    onChange?: ButtonSetCallback<TValue>;
}
export declare type ButtonSetType<TValue extends string | string[] = string[]> = ForwardRefExoticComponent<ButtonSetProps<TValue> & {
    ref: Ref<HTMLDivElement>;
}>;
export declare const ButtonSetLayout: ForwardRefExoticComponent<ButtonSetProps<string[]> & React.RefAttributes<HTMLDivElement>>;
export declare const ButtonSet: import("styled-components").StyledComponent<ForwardRefExoticComponent<ButtonSetProps<string[]> & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export {};
