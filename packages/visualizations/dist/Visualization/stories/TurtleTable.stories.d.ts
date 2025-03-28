import React from 'react';
import type { Fields, TableProps, CTable, CommonCartesianProperties, SDKRecord, Pivots } from '@looker/visualizations-adapters';
declare const _default: {
    component: (props: import("../Visualization").VisualizationProps) => React.JSX.Element;
    title: string;
};
export default _default;
type StoryTemplateProps = Omit<TableProps, 'config' | 'fields' | 'data'> & {
    config: Omit<CTable, 'type'>;
};
export type TurtleProps = {
    width: number;
    height: number;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    levels?: number;
    fields: Fields;
    data: SDKRecord[];
    config: CommonCartesianProperties;
    pivots: Pivots;
};
export declare const TurtleTable: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0fc72a6d").R, StoryTemplateProps>;
