/// <reference types="react" />
import type { FieldProps, FloatingLabelFieldProps } from './types';
export declare const fieldPropKeys: readonly ["className", "description", "detail", "externalLabel", "id", "inline", "label", "hideLabel", "validationMessage", "width"];
export declare const pickFieldProps: (props: FieldProps) => Partial<FieldProps>;
declare type ExcludedProps = typeof fieldPropKeys[number];
declare type OmitFieldPropsResult<FieldPropsType extends FloatingLabelFieldProps> = Omit<FieldPropsType, ExcludedProps>;
export declare function omitFieldProps<FieldPropsType extends FloatingLabelFieldProps>(props: FieldPropsType): OmitFieldPropsResult<FieldPropsType>;
/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */
export declare const Field: import("styled-components").StyledComponent<({ autoResize, className, children, description, detail, id, ariaLabelOnly, label, hideLabel, required, validationMessage, }: FieldProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
