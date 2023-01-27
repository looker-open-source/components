/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
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
declare type NotAriaAndValidationProps<PropsType extends AriaAndValidationProps> = Omit<PropsType, typeof ariaKeys[number] | 'validationType' | 'required'>;
export declare function omitAriaAndValidationProps<PropsType extends AriaAndValidationProps>(props: PropsType): NotAriaAndValidationProps<PropsType>;
export {};
