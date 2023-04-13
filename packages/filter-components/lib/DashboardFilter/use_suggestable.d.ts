/// <reference types="react" />
import type { IDashboardFilter, ILookmlModelExploreField } from '@looker/sdk';
import type { IAPIMethods } from '@looker/sdk-rtl';
export interface UseSuggestableProps {
    /**
     * A dashboard filter as defined in @looker/sdk
     */
    filter: IDashboardFilter;
    /**
     * An initialized Looker SDK instance
     */
    sdk?: IAPIMethods;
}
/**
 * Accepts a dashboard filter and an SDK 4.0 instance,
 * determines if and what type of options the filter's field supports,
 * calls the API to fetch suggestions if applicable,
 * and returns the necessary props
 */
export declare const useSuggestable: ({ filter, sdk: propsSdk, }: UseSuggestableProps) => {
    errorMessage: string;
    suggestableProps: {
        type: string;
        field?: ILookmlModelExploreField | null | undefined;
        expressionType?: import("packages/filter-expressions/src").FilterExpressionType | undefined;
        config?: any;
        expression: string;
        name: string;
        isLinked?: boolean | undefined;
        isLoading: boolean;
        isRequired?: boolean | undefined;
        inline?: boolean | undefined;
        onChange?: ((value: import("../Filter/types/filter_props").FilterChangeProps) => void) | undefined;
        onInputChange: (value: string) => void;
        loadUserAttributes?: (() => void) | undefined;
        userAttributes?: import("packages/filter-expressions/src").UserAttributeWithValue[] | undefined;
        suggestions?: string[] | undefined;
        enumerations?: import("..").Option[] | null | undefined;
        dispatchConfigTypeChange?: boolean | undefined;
        skipFilterConfigCheck?: boolean | undefined;
        allowMultipleValues?: boolean | undefined;
        hideAdd?: boolean | undefined;
    } | {
        field: ILookmlModelExploreField | null;
        type?: string | undefined;
        expressionType?: import("packages/filter-expressions/src").FilterExpressionType | undefined;
        config?: any;
        expression: string;
        name: string;
        isLinked?: boolean | undefined;
        isLoading: boolean;
        isRequired?: boolean | undefined;
        inline?: boolean | undefined;
        onChange?: ((value: import("../Filter/types/filter_props").FilterChangeProps) => void) | undefined;
        onInputChange: (value: string) => void;
        loadUserAttributes?: (() => void) | undefined;
        userAttributes?: import("packages/filter-expressions/src").UserAttributeWithValue[] | undefined;
        suggestions?: string[] | undefined;
        enumerations?: import("..").Option[] | null | undefined;
        dispatchConfigTypeChange?: boolean | undefined;
        skipFilterConfigCheck?: boolean | undefined;
        allowMultipleValues?: boolean | undefined;
        hideAdd?: boolean | undefined;
    } | {
        expressionType: import("packages/filter-expressions/src").FilterExpressionType;
        type?: string | undefined;
        field?: ILookmlModelExploreField | null | undefined;
        config?: any;
        expression: string;
        name: string;
        isLinked?: boolean | undefined;
        isLoading: boolean;
        isRequired?: boolean | undefined;
        inline?: boolean | undefined;
        onChange?: ((value: import("../Filter/types/filter_props").FilterChangeProps) => void) | undefined;
        onInputChange: (value: string) => void;
        loadUserAttributes?: (() => void) | undefined;
        userAttributes?: import("packages/filter-expressions/src").UserAttributeWithValue[] | undefined;
        suggestions?: string[] | undefined;
        enumerations?: import("..").Option[] | null | undefined;
        dispatchConfigTypeChange?: boolean | undefined;
        skipFilterConfigCheck?: boolean | undefined;
        allowMultipleValues?: boolean | undefined;
        hideAdd?: boolean | undefined;
    } | {
        suggestions: string[];
        isLoading: boolean;
        onInputChange: import("react").Dispatch<import("react").SetStateAction<string>>;
    } | {
        suggestions?: undefined;
        isLoading: boolean;
        onInputChange: import("react").Dispatch<import("react").SetStateAction<string>>;
    };
};
