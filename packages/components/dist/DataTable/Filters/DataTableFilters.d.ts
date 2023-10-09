/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactElement } from 'react';
import type { InputFiltersProps } from '../../Form/Inputs/InputFilters';
import type { ColumnSelectorProps } from './ColumnSelector';
export interface DataTableFiltersProps extends ColumnSelectorProps {
    className?: string;
    children: ReactElement<InputFiltersProps>;
}
export declare const DataTableFilters: import("styled-components").StyledComponent<({ className, children, ...props }: DataTableFiltersProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
