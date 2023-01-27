/// <reference types="react" />
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface DateInputProps extends PlacementProps {
    className?: string;
    date: Date;
    onChange: (date: Date) => void;
}
export declare const DateInputInternal: ({ className, date, onChange, }: DateInputProps) => JSX.Element;
export declare const DateInput: import("styled-components").StyledComponent<({ className, date, onChange, }: DateInputProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
