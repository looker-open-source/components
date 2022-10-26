import type { WidthProps } from '@looker/design-tokens';
import type { FocusEvent, ReactNode } from 'react';
import type { ValidationMessageProps } from '../../ValidationMessage/ValidationMessage';
import type { LabelProps } from '../../Label';
declare type FieldLabelBaseProps = {
    /**
     * Id of the input element to match a label to.
     */
    id?: string;
    /**
     * Defines the label for the field.
     * I18n recommended: content that is user visible should be treated for i18n
     */
    label?: ReactNode;
    /**
     * Whether or not the field should display a `*` denoting it is required.
     */
    required?: boolean;
};
export declare type UseFloatingLabelProps = {
    /**
     * Internal only
     * @private
     */
    hasValue?: boolean;
    /**
     * Internal only
     * @private
     */
    labelOffset?: string;
    /**
     * Internal only
     * @private
     */
    checkValueOnBlur?: false | ((e: FocusEvent) => boolean);
};
export declare type FieldBaseProps = FieldLabelBaseProps & {
    className?: string;
    children?: ReactNode;
    /**
     * Allows Field to adjust to the width of the input (InputText and Select)
     */
    autoResize?: boolean;
    disabled?: boolean;
    /**
     * notes and details added to the top right corner of the field
     * I18n recommended: content that is user visible should be treated for i18n
     */
    detail?: ReactNode;
    /**
     * notes and more info added to the bottom of the field
     * I18n recommended: content that is user visible should be treated for i18n
     */
    description?: ReactNode;
    /**
     * Determines where to place the label in relation to the input.
     * @default false
     */
    inline?: boolean;
    /**
     * Holds the type of validation (error, warning, etc.) and corresponding message.
     */
    validationMessage?: ValidationMessageProps;
};
export declare type HideLabelProps = {
    /**
     * Label will be visually hidden
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Apply label using aria-label, there will be no visible label in the UI
     */
    ariaLabelOnly?: boolean;
};
export declare type FieldProps = FieldBaseProps & WidthProps & HideLabelProps;
export declare type FloatingLabelFieldProps = FieldProps & {
    /**
     * External label placement above the field
     * @default false
     */
    externalLabel?: boolean;
};
export declare type FloatingLabelFieldPropsInternal = FloatingLabelFieldProps & UseFloatingLabelProps;
export declare type FieldLabelProps = HideLabelProps & FieldLabelBaseProps & LabelProps;
export {};
