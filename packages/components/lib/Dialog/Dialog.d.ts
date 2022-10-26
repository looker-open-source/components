import type { FC, ReactNode } from 'react';
import type { UseDialogProps } from './useDialog';
import type { DialogRenderProp } from './DialogRender';
export interface DialogProps extends Omit<UseDialogProps, 'content'> {
    children?: DialogRenderProp | ReactNode;
    /**
     * Content to rendered within the Dialog surface.
     * SOON TO BE @required
     *
     * NOTE: _VERY SOON_ this will become a required property.
     * DO NOT create new instances of `Dialog` without a content.
     * Prop is only marked optional to support legacy implementations.
     *
     * If `content` is not supplied `children` will used as the Dialog content instead
     *
     * I18n recommended: content that is user visible should be treated for i18n
     */
    content?: ReactNode;
}
export declare const Dialog: FC<DialogProps>;
