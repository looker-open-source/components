import type { FC } from 'react';
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface TimeProps extends PlacementProps {
    className?: string;
    date: Date;
    onChange: (item: Date) => void;
}
export declare const TimeInput: import("styled-components").StyledComponent<FC<TimeProps>, import("styled-components").DefaultTheme, {}, never>;
export {};
