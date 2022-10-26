import type { Ref } from 'react';
import React from 'react';
import type { BorderProps, SpaceProps } from '@looker/design-tokens';
import type { ValidationType } from '../../ValidationMessage';
export declare type InputDateProps = SpaceProps & BorderProps & {
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
    /**
     * Format to display the date string in, may vary by locale.
     * Supports full, long, medium, and short as well as all patterns supported by date-fns
     * @default medium
     */
    dateStringFormat?: string;
    defaultValue?: Date;
    disabled?: boolean;
    id?: string;
    /**
     * Locale object from date-fns
     * @default date-fns/locale/en-US
     * import ko from 'date-fns/locale/ko'
     */
    locale?: Locale;
    onValidationFail?: (value: string) => void;
    onChange?: (date?: Date) => void;
    readOnly?: boolean;
    ref?: Ref<HTMLInputElement>;
    validationType?: ValidationType;
    value?: Date;
};
export declare const InputDate: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & {
    borderColor?: string | undefined;
} & {
    'aria-describedby'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    /**
     * Format to display the date string in, may vary by locale.
     * Supports full, long, medium, and short as well as all patterns supported by date-fns
     * @default medium
     */
    dateStringFormat?: string | undefined;
    defaultValue?: Date | undefined;
    disabled?: boolean | undefined;
    id?: string | undefined;
    /**
     * Locale object from date-fns
     * @default date-fns/locale/en-US
     * import ko from 'date-fns/locale/ko'
     */
    locale?: Locale | undefined;
    onValidationFail?: ((value: string) => void) | undefined;
    onChange?: ((date?: Date | undefined) => void) | undefined;
    readOnly?: boolean | undefined;
    ref?: Ref<HTMLInputElement> | undefined;
    validationType?: "error" | undefined;
    value?: Date | undefined;
}, "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRight" | "borderTop" | "value" | "borderX" | "borderY" | "disabled" | "id" | "aria-describedby" | "aria-labelledby" | "onChange" | "defaultValue" | "readOnly" | "locale" | keyof import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> | "validationType" | "onValidationFail" | keyof SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> | "dateStringFormat"> & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
