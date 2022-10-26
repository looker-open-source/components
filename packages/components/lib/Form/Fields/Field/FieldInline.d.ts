import type { FC } from 'react';
import type { FieldBaseProps } from './types';
/**
 * `<FieldInline />` allows the rendering of a label (for FieldCheckbox, FieldRadio and FieldToggleSwitch),
 * and can render a validation message.
 * The label will always be placed on the right side of the input.
 */
interface FieldInlinePropsInternal extends FieldBaseProps {
    id: string;
}
export declare const FieldInline: import("styled-components").StyledComponent<FC<FieldInlinePropsInternal>, import("styled-components").DefaultTheme, {}, never>;
export {};
