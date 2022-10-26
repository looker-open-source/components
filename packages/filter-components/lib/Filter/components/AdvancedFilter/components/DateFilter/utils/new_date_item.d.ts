import type { DateFilterType, FilterModel } from '@looker/filter-expressions';
/**
 * Used when adding a new row to an advanced date filter
 * @param item The item in the previous row
 * @returns An item based on the previous item but with a conventional default, e.g. 1 month
 */
export declare const newDateItem: ({ value, unit, ...restItem }: FilterModel<DateFilterType>) => {
    id: string;
    is: boolean;
    type: "past";
    unit: any;
    value: any;
    year?: undefined;
    month?: undefined;
    range?: undefined;
    date?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "this" | "next" | "last";
    unit: any;
    value?: undefined;
    year?: undefined;
    month?: undefined;
    range?: undefined;
    date?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "year";
    year: any;
    unit?: undefined;
    value?: undefined;
    month?: undefined;
    range?: undefined;
    date?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "month";
    year: any;
    month: any;
    unit?: undefined;
    value?: undefined;
    range?: undefined;
    date?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "before" | "after";
    range: any;
    unit: any;
    value: any;
    date: import("@looker/filter-expressions").FilterDateTimeModel;
    year?: undefined;
    month?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "thisRange";
    startInterval: any;
    endInterval: any;
    unit?: undefined;
    value?: undefined;
    year?: undefined;
    month?: undefined;
    range?: undefined;
    date?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "on";
    date: {
        year: number;
        month: number;
        day: number;
    };
    unit?: undefined;
    value?: undefined;
    year?: undefined;
    month?: undefined;
    range?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
} | {
    id: string;
    is: boolean;
    type: "relative";
    startInterval: any;
    endInterval: any;
    intervalType: any;
    unit?: undefined;
    value?: undefined;
    year?: undefined;
    month?: undefined;
    range?: undefined;
    date?: undefined;
} | {
    type: string;
    id: string;
    is: boolean;
    date?: import("@looker/filter-expressions").FilterDateTimeModel | undefined;
    start?: import("@looker/filter-expressions").FilterDateTimeModel | undefined;
    end?: import("@looker/filter-expressions").FilterDateTimeModel | undefined;
    unit?: undefined;
    value?: undefined;
    year?: undefined;
    month?: undefined;
    range?: undefined;
    startInterval?: undefined;
    endInterval?: undefined;
    intervalType?: undefined;
};
