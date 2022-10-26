/// <reference types="react" />
import type { ChartData, CCartesian, LineProps } from '@looker/visualizations-adapters';
export declare const tooltipStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare type TooltipProps = Pick<LineProps, 'fields'> & {
    className?: string;
    config: CCartesian;
    data: ChartData;
    showDatumGlyph?: boolean;
    snapToDatum?: boolean;
};
/**
 * XYTooltip component for charts that leverage visx's XYChart component like Line
 * and Area with 2 main purposes:
 * 1. Override default styling on visx Tooltip component
 * 2. Construct a renderTooltip function to be passed to nested visx Tooltip component
 *
 * @prop config: Vis Config Object
 * @prop data: Query response
 * @prop showDatumGlyph: Render the glyph on hover
 * @prop snapToDatum: Toggle tooltip position between data point position or mouse position
 */
export declare const XYTooltip: import("styled-components").StyledComponent<({ className, config, data, fields, snapToDatum, showDatumGlyph, }: TooltipProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
