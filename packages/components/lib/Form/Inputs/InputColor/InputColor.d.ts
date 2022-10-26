import React from 'react';
import type { InputTextProps } from '../InputText';
import type { ComboboxProps } from '../Combobox';
export declare type InputColorProps = Omit<ComboboxProps, 'value' | 'defaultValue' | 'onChange'> & Pick<InputTextProps, 'readOnly' | 'validationType' | 'onChange'> & {
    /**
     * No longer supported and will be removed in an upcoming 3.x release
     * @deprecated
     */
    hideInput?: boolean;
    value?: string;
    defaultValue?: string;
};
export declare const InputColor: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Omit<ComboboxProps, "value" | "onChange" | "defaultValue"> & Pick<InputTextProps, "onChange" | "readOnly" | "validationType"> & {
    /**
     * No longer supported and will be removed in an upcoming 3.x release
     * @deprecated
     */
    hideInput?: boolean | undefined;
    value?: string | undefined;
    defaultValue?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
