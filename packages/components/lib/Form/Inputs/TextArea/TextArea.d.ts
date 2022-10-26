import type { FC } from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ValidationType } from '../../ValidationMessage';
import type { SimpleLayoutProps } from '../../../Layout/utils/simple';
declare type TextAreaResize = 'vertical' | 'none' | boolean;
export interface TextAreaProps extends Omit<SimpleLayoutProps, 'size'>, CompatibleHTMLProps<HTMLTextAreaElement> {
    /**
     * Allows the end-user to resize vertical height of textarea
     * @default vertical
     */
    resize?: TextAreaResize;
    validationType?: ValidationType;
}
export declare const TextArea: import("styled-components").StyledComponent<FC<TextAreaProps>, import("styled-components").DefaultTheme, TextAreaProps, never>;
export {};
