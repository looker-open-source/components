import type { FC } from 'react';
import type { UseSuggestableProps } from './use_suggestable';
import type { UseExpressionStateProps } from './use_expression_state';
export declare type DashboardFilterProps = UseExpressionStateProps & UseSuggestableProps;
/**
 * Renders a dashboard filter, including label and validation, and fetches suggestions
 * if necessary. For rendering just the filter input control on its own, see `Filter`.
 */
export declare const DashboardFilter: FC<DashboardFilterProps>;
