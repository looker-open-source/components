/// <reference types="react" />
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { CalendarLocaleProps, NavCB, RangeModifier } from './types';
export declare type CalendarProps = Partial<CalendarLocaleProps> & CompatibleHTMLProps<HTMLDivElement> & {
    onMonthChange: NavCB;
    readOnly?: boolean;
    showNextButton?: boolean;
    showPreviousButton?: boolean;
    /**
     * Set the month displayed. Defaults to the current month
     */
    viewMonth: Date;
    /**
     * Set to true for range selection mode
     */
    isRange?: boolean;
    /**
     * Control the selected date for single date selection mode
     */
    selectedDate?: Date;
    /**
     * Callback when the user selects a date (both single date and range selection mode)
     */
    onSelectDate?: NavCB;
    /**
     * Control the date range for range selection mode (use with isRange: true)
     */
    selectedRange?: RangeModifier;
    /**
     * Callback for range selection mode (use with isRange: true)
     */
    onSelectRange?: (range: RangeModifier) => void;
};
export declare const Calendar: import("styled-components").StyledComponent<({ className, firstDayOfWeek, isRange, locale, onSelectDate, onSelectRange, onMonthChange, readOnly, selectedDate, selectedRange, showNextButton, showPreviousButton, viewMonth, ...props }: CalendarProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
