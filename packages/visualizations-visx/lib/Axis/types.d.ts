import type { Fields } from '@looker/visualizations-adapters';
export declare type XAxisProps = {
    fields: Fields;
    label?: string;
    labelDy: number;
    showTicks?: boolean;
    tickAngle: number;
    tickTextAnchor: 'end' | 'start' | 'middle' | 'inherit';
    tickSpace: number;
    valueFormat?: string | null;
};
