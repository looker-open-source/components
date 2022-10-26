import type { SyntheticEvent } from 'react';
import React from 'react';
import type { ValidationType } from '../../ValidationMessage';
import type { SimpleLayoutProps } from '../../../Layout/utils/simple';
import type { TimeFormats } from './utils';
export interface InputTimeProps extends Omit<SimpleLayoutProps, 'size'> {
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
    autoFocus?: boolean;
    format?: TimeFormats;
    defaultValue?: string;
    value?: string;
    onChange?: (time?: string) => void;
    validationType?: ValidationType;
    onValidationFail?: (value?: string) => void;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    id?: string;
    onFocus?: (e: SyntheticEvent) => void;
    onBlur?: (e: SyntheticEvent) => void;
    required?: boolean;
}
export declare const convert12To24HrString: (value: string) => string;
export declare const InputTime: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InputTimeProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
