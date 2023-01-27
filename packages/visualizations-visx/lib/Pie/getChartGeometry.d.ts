/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { LegendTypes } from '@looker/visualizations-adapters';
declare type GetChartGeometryArgs = {
    /**
     *  width passed to the Pie component
     */
    width: number;
    /**
     * height passed to the Pie component
     */
    height: number;
    /**
     * labelWidth white space set aside within svg to render labels
     */
    labelWidth: number;
    /**
     * legendType 'labels' | 'legend'
     */
    legendType?: LegendTypes;
};
/**
 * Helper function calculates the values required to render the pie chart
 * SVG element given the provided data and config
 *
 * @returns
 *   canvasW: canvas width;
 *   canvasH: canvas height;
 *   pieCenterX: coordinate for the center point of the pie;
 *   pieCenterY: coordinate for the center point of the pie;
 *   outerRadius: radius of the pie given the available space within the canvas;
 *
 */
export declare const getChartGeometry: ({ width, height, labelWidth, legendType, }: GetChartGeometryArgs) => {
    canvasW: number;
    canvasH: number;
    pieCenterX: number;
    pieCenterY: number;
    outerRadius: number;
};
export {};
