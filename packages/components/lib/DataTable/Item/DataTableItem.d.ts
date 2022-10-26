import type { FC, ReactNode } from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
export interface DataTableItemProps extends CompatibleHTMLProps<HTMLDivElement> {
    /**
     *  The available actions for this item
     */
    actions?: ReactNode;
    /**
     *  Sets the tooltip text and a hidden text label for the actions button (accessible to assistive technology)
     *  If unprovided by the user, a default string will be used instead
     * I18n recommended: content that is user visible should be treated for i18n
     *  @default Options
     */
    actionsTooltip?: string;
    /**
     *  The id of this item
     */
    id: string;
    /**
     * A boolean indicating whether this item is selectable or not (the item will appear greyed out if true)
     */
    disabled?: boolean;
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    children: JSX.Element | JSX.Element[];
    actionPrimary?: ReactNode;
}
export declare const DataTableItem: import("styled-components").StyledComponent<FC<DataTableItemProps>, import("styled-components").DefaultTheme, {}, never>;
