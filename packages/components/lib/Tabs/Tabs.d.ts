import type { FC } from 'react';
export interface UseTabsProps {
    controlledIndex?: number;
    defaultIndex?: number;
    index?: number;
    isControlled?: boolean;
    onChange?: (index: number) => void;
}
export interface TabsProps extends UseTabsProps {
    children: JSX.Element[];
}
/**
 * @deprecated Use `Tabs2` and `Tab2` instead
 */
export declare function useTabs(props?: UseTabsProps): {
    onSelectTab: (index: number) => void;
    selectedIndex: number | undefined;
};
/**
 * @deprecated Use `Tabs2` and `Tab2` instead
 */
export declare const Tabs: FC<TabsProps>;
