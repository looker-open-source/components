/// <reference types="react" />
import type { Fields } from '@looker/visualizations-adapters';
export declare type YAxisProps = {
    fields: Fields;
    showTicks?: boolean;
    label?: string;
    labelDx: number;
    valueFormat?: string | null;
};
export declare const YAxis: ({ showTicks, label, labelDx, valueFormat, fields, }: YAxisProps) => JSX.Element;
