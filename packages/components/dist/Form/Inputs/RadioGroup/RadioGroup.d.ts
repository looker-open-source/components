import type { ReactNode } from 'react';
import React from 'react';
import type { FieldsetProps } from '../../../Fieldset';
export interface RadioGroupOptionProps {
    label: string;
    value: string;
    disabled?: boolean;
    detail?: ReactNode;
}
export declare type RadioGroupProps = Omit<FieldsetProps, 'onChange'> & {
    name?: string;
    id?: string;
    inline?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    required?: boolean;
    options: RadioGroupOptionProps[];
    validationType?: 'error';
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
};
export declare const RadioGroup: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Omit<FieldsetProps, "onChange"> & {
    name?: string | undefined;
    id?: string | undefined;
    inline?: boolean | undefined;
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    options: RadioGroupOptionProps[];
    validationType?: "error" | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
