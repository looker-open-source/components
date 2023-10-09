import type { Ref } from 'react';
import React from 'react';
import type { Locale } from 'date-fns';
import type { RangeModifier } from '../../../Calendar/types';
import type { ValidationType } from '../../ValidationMessage';
export declare type InputDateRangeProps = {
    'aria-labelledby'?: string;
    dateStringFormat?: string;
    disabled?: boolean;
    id?: string;
    locale?: Locale;
    onChange: (range: RangeModifier) => void;
    onValidationFail?: (value: string) => void;
    readOnly?: boolean;
    ref?: Ref<HTMLInputElement>;
    validationType?: ValidationType;
    value: RangeModifier;
};
export declare const InputDateRange: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<InputDateRangeProps, "value" | "disabled" | "id" | "aria-labelledby" | "onChange" | "readOnly" | "locale" | "validationType" | "onValidationFail" | "dateStringFormat"> & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
