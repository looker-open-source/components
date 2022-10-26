import React from 'react';
import type { FontSizeProps, PaddingProps } from '@looker/design-tokens';
export interface TabListProps extends PaddingProps, FontSizeProps {
    children: JSX.Element[];
    selectedIndex?: number;
    onSelectTab?: (index: number) => void;
    className?: string;
    distribute?: boolean;
}
/**
 * @deprecated Use `Tabs2` & `Tab2` instead
 */
export declare const TabList: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {
    fontSize: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "fontSize">;
