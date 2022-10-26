/// <reference types="lodash" />
import type { AriaAttributes } from 'react';
import type { ValidationType } from '../ValidationMessage';
declare const ariaKeys: readonly ["aria-describedby", "aria-invalid", "aria-label", "aria-labelledby"];
declare type SelectedAriaAttributes = Pick<AriaAttributes, typeof ariaKeys[number]>;
export interface AriaAndValidationProps extends SelectedAriaAttributes {
    required?: boolean;
    validationType?: ValidationType;
}
export declare function pickAriaAndValidationProps({ required, validationType, ...props }: AriaAndValidationProps): {
    'aria-invalid': boolean;
    required: boolean | undefined;
    'aria-describedby'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
};
export declare function omitAriaAndValidationProps(props: AriaAndValidationProps): import("lodash").Omit<AriaAndValidationProps, "aria-describedby" | "aria-invalid" | "aria-label" | "aria-labelledby" | "required" | "validationType">;
export {};
