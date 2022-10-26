import type { FilterUIConfig } from '../types/filter_ui_config';
import type { RenderFilterProps } from '.';
interface useFallbackReturnValue {
    skipFilterConfigCheck: boolean;
    uiConfig: FilterUIConfig;
}
/**
 * This hook checks the filter control can render
 * the filter expression, otherwise it updates the config
 * to render an advanced filter
 * @param RenderFilterProps
 * @returns useFallbackReturnValue
 */
export declare const useFilterConfig: (props: RenderFilterProps) => useFallbackReturnValue;
export {};
