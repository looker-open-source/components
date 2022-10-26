import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import type { IconType } from '../../Icon';
export interface DataTableActionProps extends CompatibleHTMLProps<HTMLElement> {
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    detail?: ReactNode;
    icon?: IconType;
    /**
     * Determines if the DataTableAction is an <a/> or <button/> element
     * Note: The value passed into this prop is passed into the underlying MenuItem's itemRole prop
     * @default button
     */
    itemRole?: 'link' | 'button';
}
/**
 * MenuItem may undergo a refactor soon. Creating a proxy in the form of DataTableAction
 * allows us to adapt to any changes to MenuItem or its interface.
 * */
export declare const DataTableAction: (props: DataTableActionProps) => JSX.Element;
