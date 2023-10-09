import React from 'react';
import type { SpaceProps, TypographyProps, WidthProps } from '@looker/design-tokens';
import type { ValidationType } from '../../ValidationMessage';
export interface RangeSliderProps extends SpaceProps, WidthProps, TypographyProps {
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    name?: string;
    max?: number;
    min?: number;
    step?: number;
    onChange?: (value: number[]) => void;
    value?: number[];
    defaultValue?: number[];
    disabled?: boolean;
    id?: string;
    readOnly?: boolean;
    validationType?: ValidationType;
    className?: string;
}
export declare const InternalRangeSlider: React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>;
export declare const RangeSlider: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, RangeSliderProps, never>;
