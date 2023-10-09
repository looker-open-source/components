/// <reference types="react" />
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { YearBaseProps } from './types';
declare type MonthPickerProps = YearBaseProps & Omit<CompatibleHTMLProps<HTMLButtonElement>, 'onSelect' | 'type'> & {
    date: Date;
    monthNumber: number;
    isTodaysMonth?: boolean;
};
export declare const MonthPicker: import("styled-components").StyledComponent<({ className, date, isTodaysMonth, locale, monthNumber, onMonthClick, selected, selectedMonth, style, ...restProps }: MonthPickerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
