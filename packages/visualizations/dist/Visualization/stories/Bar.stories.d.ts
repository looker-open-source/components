import type { BarProps, CBar } from '@looker/visualizations-adapters';
import React from 'react';
declare const _default: {
    component: (props: import("../Visualization").VisualizationProps) => React.JSX.Element;
    title: string;
};
export default _default;
type StoryTemplateProps = Omit<BarProps, 'config' | 'fields' | 'data'> & {
    config: Omit<CBar, 'type'>;
};
export declare const Bar: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const Stacked: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const StackedPercentage: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const Pivot: () => React.JSX.Element;
