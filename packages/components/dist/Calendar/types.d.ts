export declare type NavCB = (date: Date) => void;
export declare type RangeModifier = {
    from?: Date;
    to?: Date;
};
export declare type RangeType = 'draft' | 'selected' | 'none';
export declare type RangeProps = {
    rangeType: RangeType;
    rangePosition?: 'start' | 'middle' | 'end';
};
export declare type DateSelectionProps = {
    onSelect: (date: Date) => void;
    onDraftSelect: (date: Date) => void;
};
export declare type DateStateProps = {
    datesSelected: Date[];
    draftTo?: Date;
};
export declare type CalendarLocaleProps = {
    /**
     * The day to use as first day of the week, starting from 0 (Sunday) to 6 (Saturday).
     * Uses the locale default (0 for en-US)
     */
    firstDayOfWeek: number;
    /**
     * Locale object from date-fns
     * @default date-fns/locale/en-US
     * @example
     * import ko from 'date-fns/locale/ko'
     */
    locale: Locale;
};
export declare type MonthBaseProps = DateSelectionProps & CalendarLocaleProps & DateStateProps & {
    className?: string;
    datesSelected: Date[];
    draftTo?: Date;
};
export declare type YearBaseProps = {
    selectedMonth?: Date;
    onMonthClick: (month: number) => void;
    locale: Locale;
};
/**
 * Used for the scrollable list of months/years
 */
export declare type ScrollableDateListBaseProps = {
    currentDate: Date;
    onMonthChange: NavCB;
    baseMonth: Date;
    setBaseMonth: (month: Date) => void;
};
/**
 * Used for the items in the scrollable list of months/years
 */
export declare type ScrollableDateListItemProps = {
    date: Date;
    index: number;
    setItemPosition: (index: number, element: HTMLElement) => void;
    fullRender: boolean;
};
export declare type MonthListProps = MonthBaseProps & ScrollableDateListBaseProps;
export declare type MonthListItemProps = Omit<MonthListProps, 'currentDate' | 'baseMonth' | 'setBaseMonth' | 'onMonthChange'>;
export declare type YearListProps = ScrollableDateListBaseProps & YearBaseProps;
export declare type YearListItemProps = Omit<YearListProps, 'currentDate' | 'baseMonth' | 'setBaseMonth' | 'onMonthChange'>;
