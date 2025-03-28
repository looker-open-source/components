import type { ColumnProps, CColumn } from '@looker/visualizations-adapters';
import React from 'react';
declare const _default: {
    component: (props: import("../Visualization").VisualizationProps) => React.JSX.Element;
    title: string;
};
export default _default;
type StoryTemplateProps = Omit<ColumnProps, 'config' | 'fields' | 'data'> & {
    config: Omit<CColumn, 'type'>;
};
export declare const Column: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const Stacked: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const StackedPercentage: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const Pivot: () => React.JSX.Element;
