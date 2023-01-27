import type { ILookmlModelExploreField } from '@looker/sdk';
import type { FilterExpressionType, UserAttributeWithValue } from '../../types';
interface ISummaryOptions {
    /** The type of filter expression - number, string, etc. */
    type: FilterExpressionType;
    /** The current value being filtered */
    expression?: string;
    /** User attributes to be considered */
    userAttributes?: UserAttributeWithValue[];
    /** Field being filtered */
    field?: ILookmlModelExploreField | null;
    /** Filter is required if true; required fields must have a value */
    required?: boolean;
}
declare type ISummary = (o: ISummaryOptions) => string;
/**
 * Builds a summary description for a filter expression
 */
export declare const summary: ISummary;
export {};
