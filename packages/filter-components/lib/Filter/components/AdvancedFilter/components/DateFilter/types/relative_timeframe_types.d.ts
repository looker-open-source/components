import type { DayRange } from './day_range';
export declare enum PresetTimeframes {
    Today = "Today",
    Yesterday = "Yesterday",
    Last7 = "Last 7 Days",
    Last14 = "Last 14 Days",
    Last30 = "Last 30 Days",
    Last90 = "Last 90 Days",
    YearToDate = "Year To Date"
}
export declare enum PresetTimeframesMostRecent {
    Today = "Today",
    Yesterday = "Yesterday"
}
export declare enum PresetTimeframesRecent {
    Last7 = "Last 7 Days",
    Last14 = "Last 14 Days",
    Last28 = "Last 28 Days"
}
export declare enum PresetTimeframesLeastRecent {
    Last30 = "Last 30 Days",
    Last90 = "Last 90 Days",
    Last180 = "Last 180 Days",
    Last365 = "Last 365 Days",
    YearToDate = "Year To Date"
}
export declare enum PresetTimeframesThis {
    ThisWeek = "This Week",
    ThisMonth = "This Month",
    ThisQuarter = "This Quarter",
    ThisYear = "This Year"
}
export declare enum PresetTimeframesPrevious {
    PreviousWeek = "Previous Week",
    PreviousMonth = "Previous Month",
    PreviousQuarter = "Previous Quarter",
    PreviousYear = "Previous Year"
}
export declare enum AllPresetTimeframes {
    Today = "Today",
    Yesterday = "Yesterday",
    Last7 = "Last 7 Days",
    Last14 = "Last 14 Days",
    Last28 = "Last 28 Days",
    Last30 = "Last 30 Days",
    Last90 = "Last 90 Days",
    Last180 = "Last 180 Days",
    Last365 = "Last 365 Days",
    YearToDate = "Year To Date",
    ThisWeek = "This Week",
    ThisMonth = "This Month",
    ThisQuarter = "This Quarter",
    ThisYear = "This Year",
    PreviousWeek = "Previous Week",
    PreviousMonth = "Previous Month",
    PreviousQuarter = "Previous Quarter",
    PreviousYear = "Previous Year"
}
export declare type RelativeTimeframeModel = AllPresetTimeframes | DayRange;
