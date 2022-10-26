/// <reference types="react" />
import type { Fields, SDKRecord, CommonCartesianProperties } from '@looker/visualizations-adapters';
export declare type RadarProps = {
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
    config: {
        type: 'radar';
    } & CommonCartesianProperties;
};
export declare const Radar: ({ height, width, levels, margin, fields, data, config, }: RadarProps) => JSX.Element | null;
