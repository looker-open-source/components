import type { Colors } from '../';
export declare type ColorKey = {
    [key: string]: string;
};
export declare type StatefulColorGroups = ColorKey[];
declare type DividedColors = {
    core: ColorKey;
    derivative: ColorKey;
    intent: ColorKey;
    specializedText: ColorKey;
    stateful: ColorKey;
    text: ColorKey;
    ui: ColorKey;
};
declare type ColorBreakdown = {
    divided: DividedColors;
    statefulColorGroups: StatefulColorGroups;
};
export declare const colorBreakdown: (colors: Colors) => ColorBreakdown;
export {};
