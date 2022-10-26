import type { CArea, CBar, CColumn, CLine, CPie, CScatter, CSparkline, CTable, CSingleValue } from '../adapters';
export declare const SUPPORTED_CHART_TYPES: {
    readonly area: "area";
    readonly bar: "bar";
    readonly column: "column";
    readonly default: "default";
    readonly line: "line";
    readonly pie: "pie";
    readonly scatter: "scatter";
    readonly single_value: "single_value";
    readonly sparkline: "sparkline";
    readonly table: "table";
};
export declare type SupportedChartTypes = typeof SUPPORTED_CHART_TYPES;
export declare type CCartesian = CArea | CBar | CColumn | CLine | CScatter;
export declare type CAll = CArea | CBar | CColumn | CLine | CPie | CSparkline | CScatter | CTable | CSingleValue | {
    type: string;
};
