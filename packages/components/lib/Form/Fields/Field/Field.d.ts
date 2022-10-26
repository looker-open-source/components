/// <reference types="react" />
import type { FieldProps } from './types';
export declare const fieldPropKeys: string[];
export declare const pickFieldProps: (props: FieldProps) => Partial<FieldProps>;
export declare const omitFieldProps: (props: FieldProps) => Partial<FieldProps>;
/**
 * `<Field />` allows the rendering of a label (optionally associated with a child input like `<InputText />`),
 * and can render a validation message. Generally, this component is used with form inputs to give user
 * feedback about the status of the input values.
 */
export declare const Field: import("styled-components").StyledComponent<({ autoResize, className, children, description, detail, id, ariaLabelOnly, label, hideLabel, required, validationMessage, }: FieldProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
