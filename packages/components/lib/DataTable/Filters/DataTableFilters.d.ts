import type { FC, ReactElement } from 'react';
import type { InputFiltersProps } from '../../Form/Inputs/InputFilters';
import type { ColumnSelectorProps } from './ColumnSelector';
export interface DataTableFiltersProps extends ColumnSelectorProps {
    className?: string;
    children: ReactElement<InputFiltersProps>;
}
export declare const DataTableFilters: import("styled-components").StyledComponent<FC<DataTableFiltersProps>, import("styled-components").DefaultTheme, {}, never>;
