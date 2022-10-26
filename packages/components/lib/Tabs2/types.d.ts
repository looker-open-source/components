import type { ReactElement } from 'react';
import type { CompatibleHTMLProps, FontSizeProps, LayoutProps, PaddingProps, TypographyProps } from '@looker/design-tokens';
export declare type Tab2Props<IDType extends string = string> = Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'> & LayoutProps & PaddingProps & TypographyProps & {
    /**
     * displays as the `Tab`'s value
     */
    label: IDType;
    /**
     * callback to manage when `Tab` is clicked
     */
    onSelect?: () => void;
    /**
     * specific `Tab` that is selected.
     */
    selected?: boolean;
};
export declare type TabList2Props = PaddingProps & FontSizeProps & {
    /**
     * element that will be displayed as the `Tab` value
     */
    children: JSX.Element[];
    className?: string;
    /**
     * spread the collection of `Tab` on its full width.
     */
    distribute?: boolean;
};
declare type TabStackMember<IDType extends string = string> = Tab2Props<IDType> & {
    id: IDType;
};
export declare type TabStack<IDType extends string = string> = TabStackMember<IDType>[];
declare type Controlled<IDType extends string = string> = {
    /**
     * Controlled: which tab to show now
     */
    tabId: IDType;
    /**
     * Callback called when tabId changes
     */
    onTabChange: (tabId: IDType) => void;
    defaultTabId?: never;
};
declare type Uncontrolled = {
    /**
     * Which tab to show on load
     */
    defaultTabId?: string;
    tabId?: never;
    onTabChange?: never;
};
export declare type Tabs2Props<IDType extends string = string> = (Controlled<IDType> | Uncontrolled) & {
    /**
     * The list of `Tab`
     */
    children: ReactElement<Tab2Props<IDType>> | ReactElement<Tab2Props<IDType>>[];
    /**
     * Spread the Tab between all the space available
     */
    distributed?: boolean;
};
export {};
