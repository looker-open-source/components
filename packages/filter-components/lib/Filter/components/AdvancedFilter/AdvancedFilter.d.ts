/// <reference types="react" />
import type { InternalFilterProps } from '../../types/filter_props';
import type { FilterASTNode } from '@looker/filter-expressions';
/**
 * Advanced filters allow for more flexibility and specific customization by the user
 */
export interface AdvancedFilterProps extends InternalFilterProps {
    updateAST: (ast?: FilterASTNode) => void;
}
export declare const AdvancedFilter: ({ ast, updateAST, name, onInputChange, changeFilter, suggestions, enumerations, isLinked, expressionType, userAttributes, field, inline, validationMessage, isLoading, allowMultipleValues, hideAdd, }: AdvancedFilterProps) => JSX.Element | null;
