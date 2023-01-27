/// <reference types="react" />
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface TimeProps extends PlacementProps {
    className?: string;
    date: Date;
    onChange: (item: Date) => void;
}
export declare const TimeInput: import("styled-components").StyledComponent<({ className, date, onChange }: TimeProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
