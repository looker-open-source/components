import type { LineProps, CLine } from '@looker/visualizations-adapters';
import type { Story } from '@storybook/react';
import React from 'react';
declare const _default: {
    component: (props: import("../Visualization").VisualizationProps) => React.JSX.Element;
    title: string;
};
export default _default;
type StoryTemplateProps = Omit<LineProps, 'config' | 'fields' | 'data'> & {
    config: Omit<CLine, 'type'>;
};
export declare const Line: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const PointStyleFilled: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const PointStyleNone: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
export declare const Pivot: () => React.JSX.Element;
export declare const DefaultYAxisSingleMeasure: Story<LineProps>;
