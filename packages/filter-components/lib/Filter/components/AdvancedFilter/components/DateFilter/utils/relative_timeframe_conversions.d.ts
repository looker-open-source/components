import type { FilterModel } from '@looker/filter-expressions';
import type { RelativeTimeframeModel } from '../types/relative_timeframe_types';
export declare const filterModelToRelativeTimeframeModel: (filterModel: FilterModel) => RelativeTimeframeModel | undefined;
export declare const relativeTimeframeModelToFilterModel: (relativeTimeframe: RelativeTimeframeModel) => Partial<FilterModel>;
