import type { ReactElement } from 'react';
import type { ListItemProps } from '../types';
import type { IconPlaceholderProps, IconType } from '../../Icon';
export declare type CreateListItemPartitionsProps = {
    icon?: IconType | ReactElement<IconPlaceholderProps>;
} & Pick<ListItemProps, 'color' | 'density' | 'description' | 'detail' | 'disabled' | 'children' | 'truncate'>;
export declare const createListItemPartitions: ({ color, density, description, detail, disabled, icon, children, truncate, }: CreateListItemPartitionsProps) => (false | "" | 0 | JSX.Element | null | undefined)[];
