import type { SetStateAction, Dispatch } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
interface EmbedEditorProps {
    width?: string;
    setWidth: Dispatch<SetStateAction<string | undefined>>;
    height?: string;
    setHeight: Dispatch<SetStateAction<string | undefined>>;
    config: Partial<CAll>;
    onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
    query?: string | number;
    dashboard?: number;
}
/** EmbedEditor is used to modify settings unrelated to vis config  */
export declare const EmbedEditor: ({ width, height, setWidth, setHeight, config: configOverrides, onConfigChange, query, dashboard, }: EmbedEditorProps) => JSX.Element;
export {};
