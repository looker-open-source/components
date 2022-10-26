import type { ElementType } from 'react';
import type { StringFilterType } from '@looker/filter-expressions';
export declare const stringFilterTypeToFilter: (type: StringFilterType, isParameterField?: boolean | undefined, allowMultipleValues?: boolean | undefined) => ElementType;
