/// <reference types="react" />
import type { DensityProp, HeightProps, WidthProps } from '@looker/design-tokens';
import type { WindowedTreeNodeProps } from './types';
import type { TreeCollectionProps } from './TreeCollection';
export declare type WindowedTreeCollectionProps = Omit<TreeCollectionProps, 'children'> & DensityProp & HeightProps & WidthProps & {
    /**
     * Use this array of objects representing the tree(s) instead of children
     * in order to support windowing of long trees
     */
    trees: WindowedTreeNodeProps[];
};
export declare const WindowedTreeCollection: import("styled-components").StyledComponent<({ density, trees, ...props }: WindowedTreeCollectionProps) => JSX.Element, import("styled-components").DefaultTheme, TreeCollectionProps, never>;
