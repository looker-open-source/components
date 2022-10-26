/// <reference types="react" />
import type { FieldMetadata, DimensionMetadata, SDKRecord } from '@looker/visualizations-adapters';
declare type PieTooltipProps = {
    className?: string;
    tooltipOpen: boolean;
    tooltipLeft?: number;
    tooltipTop?: number;
    tooltipData?: SDKRecord;
    measure: FieldMetadata;
    dimension: DimensionMetadata;
};
export declare const PieTooltip: import("styled-components").StyledComponent<({ tooltipOpen, tooltipData, tooltipTop, tooltipLeft, measure, dimension, className, }: PieTooltipProps) => JSX.Element | null, import("styled-components").DefaultTheme, {}, never>;
export {};
