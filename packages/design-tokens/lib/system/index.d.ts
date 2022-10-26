import type { HTMLProps } from 'react';
import type { SemanticBorderProps } from '../utils';
export { borderRadius, boxShadow, backgroundPosition, color, display, flexbox, fontSize, fontFamily, fontWeight, lineHeight, letterSpacing, fontStyle, height, layout, maxWidth, minWidth, overflow, padding, position, space, size, system, textAlign, typography, variant, verticalAlign, width, } from 'styled-system';
export { borderHelper as border } from '../utils';
export declare type BorderProps = SemanticBorderProps & {
    /**
     * @deprecated - not used by borderHelper which is exported as `border` and can be deleted. Once all usage has been deleted then this prop can be removed from here.
     */
    borderColor?: string;
};
export type { BackgroundColorProps, BackgroundPositionProps, BorderRadiusProps, BoxShadowProps, DisplayProps, FlexboxProps, HeightProps, LayoutProps, MaxHeightProps, MaxWidthProps, MinWidthProps, OpacityProps, OverflowProps, PaddingProps, PositionProps, ResponsiveValue, SizeProps, VerticalAlignProps, WidthProps, } from 'styled-system';
export declare type CompatibleHTMLProps<T> = Omit<HTMLProps<T>, 'as' | 'color' | 'height' | 'label' | 'ref' | 'size' | 'width'>;
export { userSelect } from './userSelect';
export type { UserSelectProps } from './userSelect';
export type { DensityProp, DensityRamp } from './density';
export { cursor } from './cursor';
export type { CursorProps } from './cursor';
export { Easings } from './easings';
export { RadiusSizes, Radii } from './radii';
export { Shadows } from './shadows';
export * from './transitions';
export * from './size';
export * from './typography';
export * from './reset';
