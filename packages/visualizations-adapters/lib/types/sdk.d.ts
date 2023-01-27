export declare type SDKRecord = Record<string, any>;
export declare type ChartData = (SDKRecord & {
    /**
     * If multiple dimensions are present in the raw data objects,
     * they should be condensed down to a single dimension string
     * (usually by concatenation).
     */
    dimension: string;
})[];
export declare type FieldMetadata = {
    label?: string;
    is_numeric?: boolean;
    name: string;
    sortable?: boolean;
    sorted?: {
        desc: boolean;
        sort_index: number;
        pivot_index?: number;
    };
    view?: string;
    view_label?: string;
    label_short?: string;
    value_format?: string | null;
};
export declare type MeasureMetadata = FieldMetadata & {
    pivot_key?: string;
    /**
     * An alternate label used when rendering a pivot query.
     * This pivoted_label should include the measure's associated
     * unique pivot value (i.e. "Orders Count: Complete").
     */
    pivoted_label?: string;
    type?: string;
};
export declare type DimensionMetadata = FieldMetadata & {
    is_filter?: boolean;
    is_fiscal?: boolean;
    is_timeframe?: boolean;
    type?: 'date_month' | 'date_date' | 'date_year' | 'date_week' | 'date_time' | 'date_quarter' | 'date_month_num' | 'date_hour_of_day' | 'count_distinct' | 'string' | 'zipcode' | 'number';
};
export declare type Fields = {
    dimensions: DimensionMetadata[];
    measures: MeasureMetadata[];
    pivots?: DimensionMetadata[];
};
export declare type PivotMetadata = {
    data: Record<string, string | null>;
    key: string;
    is_total: boolean;
    labels: Record<string, string>;
    metadata?: Record<string, {
        value: string;
    }>;
    sort_values?: Record<string, string>;
    /**
     * `label` value is derived by our own helper functions, and not expected
     *  to be returned by sdk.
     */
    label?: string;
};
export declare type Pivots = PivotMetadata[];
export declare type TotalsValue = {
    value: number | null;
};
export declare type Totals = Record<string, TotalsValue | Record<string, TotalsValue>>;
