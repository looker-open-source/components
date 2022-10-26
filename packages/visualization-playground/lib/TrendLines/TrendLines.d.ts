import type { FC, SetStateAction, Dispatch } from 'react';
import type { TrendLine, CAll } from '@looker/visualizations-adapters';
interface TrendLinesEditorProps {
    name: string;
    value?: TrendLine[];
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
}
export declare const TrendLines: FC<TrendLinesEditorProps>;
export {};
