/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterExpressionType } from '@looker/filter-expressions';
import type { FilterParamProps } from '../types/filter_param_props';
import type { ReactElement } from 'react';
declare type ComponentMapType = {
    [type in FilterExpressionType]: (props: FilterParamProps<any>) => ReactElement;
};
/**
 * A map of available filter types and the grammar properties needed to parse and display
 */
export declare const componentsMap: ComponentMapType;
export declare const typeToComponent: (type: FilterExpressionType) => (props: FilterParamProps<any>) => ReactElement;
export {};
