import type { DensityProp } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import type { ListItemDetailOptions } from './types';
export declare type ListItemDetailProps = ListItemDetailOptions & DensityProp & {
    children?: ReactNode;
    className?: string;
};
export declare const ListItemDetail: import("styled-components").StyledComponent<({ accessory, density, hoverDisclosure, width, ...props }: ListItemDetailProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
