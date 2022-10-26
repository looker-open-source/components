import type { FC } from 'react';
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface DateInputProps extends PlacementProps {
    className?: string;
    date: Date;
    onChange: (date: Date) => void;
}
export declare const DateInputInternal: FC<DateInputProps>;
export declare const DateInput: import("styled-components").StyledComponent<FC<DateInputProps>, import("styled-components").DefaultTheme, {}, never>;
export {};
