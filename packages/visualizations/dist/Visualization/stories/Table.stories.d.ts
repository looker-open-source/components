/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import WrappedText from './TableWrappedText';
import TruncatedText from './TableTruncatedText';
declare const _default: {
    component: (props: import("../Visualization").VisualizationProps) => import("react").JSX.Element;
    title: string;
};
export default _default;
export { default as Basic } from './TableBasic';
export { default as HorizontalScroll } from './TableHorizontalScroll';
export { default as PivotedTable } from './TablePivot';
export { default as MultiSort } from './TableMultiSort';
export { WrappedText, TruncatedText };
