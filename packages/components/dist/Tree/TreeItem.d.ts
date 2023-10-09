import React from 'react';
import type { ListItemProps } from '../ListItem';
export declare type TreeItemProps = ListItemProps & {
    border?: boolean;
    labelBackgroundOnly?: boolean;
};
export declare const TreeItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("packages/design-tokens/src").CompatibleHTMLProps<HTMLElement> & import("../ListItem").ListItemColorProp & import("../ListItem").ListItemStatefulProps & {
    density?: import("packages/design-tokens/src").DensityRamp | undefined;
    description?: React.ReactNode;
    detail?: import("../ListItem").ListItemDetailConfig;
    icon?: import("..").IconType | undefined;
    itemRole?: import("../ListItem").ListItemRole | undefined;
    ripple?: boolean | undefined;
    truncate?: import("..").TruncateConfigProp;
} & {
    border?: boolean | undefined;
    labelBackgroundOnly?: boolean | undefined;
} & React.RefAttributes<HTMLLIElement>>, import("styled-components").DefaultTheme, {}, never>;
