import type { CompatibleHTMLProps, DensityProp } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import type { TruncateConfigProp } from '../Truncate';
import type { ListItemColorProp } from './types';
declare type ListItemLabelProps = CompatibleHTMLProps<HTMLElement> & ListItemColorProp & DensityProp & {
    disabled?: boolean;
    description?: ReactNode;
    truncate?: TruncateConfigProp;
};
export declare const ListItemLabel: import("styled-components").StyledComponent<({ color, children, disabled, density, description, truncate, ...props }: ListItemLabelProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
