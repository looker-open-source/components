/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ScatterProps, CScatter } from '@looker/visualizations-adapters';
declare const _default: {
    component: (props: import("../Visualization").VisualizationProps) => React.JSX.Element;
    title: string;
};
export default _default;
type StoryTemplateProps = Omit<ScatterProps, 'config' | 'fields' | 'data'> & {
    config: Omit<CScatter, 'type'>;
};
export declare const Scatter: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const SizeBy: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
