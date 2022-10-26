/// <reference types="react" />
import type { CLineSeries } from '@looker/visualizations-adapters';
export declare type GlyphProps = {
    series: CLineSeries;
    top?: number;
    left?: number;
    size?: number;
    fill?: string;
    stroke?: false | string;
    styleObj?: Record<string, string>;
};
export declare const Glyph: ({ series, top, left, size, fill, styleObj, stroke, }: GlyphProps) => JSX.Element;
