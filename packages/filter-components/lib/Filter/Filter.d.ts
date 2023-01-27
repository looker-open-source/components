/// <reference types="react" />
import type { FilterProps } from './types/filter_props';
/**
 * The top-level filter component that generates an AST from the expression
 * and renders either an advanced filter or control filter depending on the config.
 * `Filter` renders only the filter input control(s) – for label and validation display
 * and suggestion fetching, see `DashboardFilter`.
 */
export declare const Filter: ({ expression, type, expressionType: propsExpressionType, loadUserAttributes, skipFilterConfigCheck, ...props }: FilterProps) => JSX.Element | null;
