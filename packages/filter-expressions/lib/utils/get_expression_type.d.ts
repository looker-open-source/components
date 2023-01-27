import type { IDashboardFilter, ILookmlModelExploreField } from '@looker/sdk';
import type { FilterExpressionType } from '../types/filter_type';
/**
 * yields a value for the 'expressionType' prop on the Filter component
 */
export declare const getExpressionTypeFromField: (field: ILookmlModelExploreField) => FilterExpressionType;
/**
 * Returns a valid filter expression type from a DashboardFilter object
 * depending if the filter is of type field or not
 */
export declare const getExpressionType: (filter: Pick<IDashboardFilter, 'type' | 'field'>) => FilterExpressionType;
