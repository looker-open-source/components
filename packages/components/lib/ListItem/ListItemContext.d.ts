/// <reference types="react" />
import type { DensityProp } from '@looker/design-tokens';
import type { ListColor } from '../List';
export declare type ListItemContextProps = DensityProp & {
    iconGutter: boolean;
    color?: ListColor;
};
export declare const ListItemContext: import("react").Context<ListItemContextProps>;
