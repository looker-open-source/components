import React from 'react';
import type { BorderProps, SpaceProps, CompatibleHTMLProps } from '@looker/design-tokens';
import type { ValidationType } from '../../ValidationMessage';
import type { TimeFormats } from '../InputTime/utils';
declare type intervals = 5 | 10 | 15 | 20 | 30 | 60;
export interface InputTimeSelectProps extends SpaceProps, BorderProps, Omit<CompatibleHTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    format?: TimeFormats;
    interval?: intervals;
    defaultValue?: string;
    value?: string;
    onChange?: (val?: string) => void;
    onBlur?: () => void;
    validationType?: ValidationType;
    onValidationFail?: (value: string) => void;
}
export declare const InputTimeSelect: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InputTimeSelectProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
export {};
