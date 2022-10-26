import type { FC } from 'react';
/**
 */
export interface CopyToClipboardProps {
    /**
     * Content to be copied into the clipboard
     * I18n recommended: content that is user visible should be treated for i18n
     */
    content: string;
    /**
     * button's label | a JSX element to replace the button
     * I18n recommended: content that is user visible should be treated for i18n
     */
    children?: string | JSX.Element;
    /**
     * button's successfully copied label | a JSX element to replace the button
     * I18n recommended: content that is user visible should be treated for i18n
     * @default Copied
     */
    success?: string | JSX.Element;
}
export declare const CopyToClipboard: FC<CopyToClipboardProps>;
