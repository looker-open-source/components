/// <reference types="react" />
import type { DensityProp } from '@looker/design-tokens';
import type { ListItemColor } from '../ListItem';
export declare type TreeContextProps = DensityProp & {
    border?: boolean;
    color?: ListItemColor;
    depth: number;
};
export declare const TreeContext: import("react").Context<TreeContextProps>;
