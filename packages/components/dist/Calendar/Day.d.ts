/// <reference types="react" />
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { Locale } from 'date-fns';
import type { DateSelectionProps } from './types';
export declare const HitArea: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare type DayProps = Omit<CompatibleHTMLProps<HTMLButtonElement>, 'onSelect' | 'type'> & DateSelectionProps & {
    date: Date;
    locale: Locale;
    selected?: boolean;
};
export declare const Day: import("styled-components").StyledComponent<({ className, date, locale, onDraftSelect, onSelect, selected, style, ...props }: DayProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
