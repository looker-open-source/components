/// <reference types="react" />
import type { Fields, SDKRecord, CommonCartesianProperties, Pivots } from '@looker/visualizations-adapters';
export declare type TurtleProps = {
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
export declare const TurtleTable: ({ height, width, fields, data, config, pivots, }: TurtleProps) => JSX.Element;
