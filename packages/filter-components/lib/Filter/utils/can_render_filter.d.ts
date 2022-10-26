import type { FilterASTNode, FilterExpressionType, UserAttributeWithValue } from '@looker/filter-expressions';
import type { FilterUIConfig } from '../types/filter_ui_config';
import { FilterUIType } from '../types/filter_ui_config';
import type { ILookmlModelExploreField } from '@looker/sdk';
import type { Option } from '../types/option';
interface RenderFilterCommonProps {
    config?: FilterUIConfig;
    field?: ILookmlModelExploreField | null;
    suggestions?: string[];
    enumerations?: Option[] | null;
    skipFilterConfigCheck?: boolean;
}
interface RenderFilterASTProps extends RenderFilterCommonProps {
    ast: FilterASTNode;
}
interface RenderFilterExpressionProps extends RenderFilterCommonProps {
    expression: string;
    expressionType: FilterExpressionType;
    userAttributes?: UserAttributeWithValue[];
}
export declare type RenderFilterProps = RenderFilterASTProps | RenderFilterExpressionProps;
/**
 * Tests if a filter can be rendered for its uiConfig type
 * @param RenderFilterProps
 * @returns
 */
export declare const canRenderFilter: ({ config, field, suggestions, enumerations, ...filterProps }: RenderFilterProps) => boolean;
/**
 * Returns a fallback Filter config for scenarios when
 * the ControlFilter can't render a filter expression
 * @param config
 * @returns
 */
export declare const getFallbackFilterConfig: (config?: FilterUIConfig | undefined) => {
    type: FilterUIType;
    display?: string | undefined;
    options?: any;
};
export {};
