import type { FC } from 'react';
export declare type ValidationType = 'error';
export interface ValidationMessageProps {
    className?: string;
    /**
     * The type of validation, therefore changing the message's text color. Accepts: error.
     */
    type?: ValidationType;
    /**
     * The validation message to render.
     * I18n recommended: content that is user visible should be treated for i18n
     */
    message?: string;
}
export declare const ValidationMessage: import("styled-components").StyledComponent<FC<ValidationMessageProps>, import("styled-components").DefaultTheme, {}, never>;
