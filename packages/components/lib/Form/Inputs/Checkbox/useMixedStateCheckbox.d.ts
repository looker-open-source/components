import type { Dispatch, SetStateAction } from 'react';
import type { MixedBoolean } from './Checkbox';
export interface CheckboxTreeAction {
    state: MixedBoolean;
    setState: Dispatch<SetStateAction<MixedBoolean>>;
}
export interface CheckboxTree {
    parent: CheckboxTreeAction;
    children: CheckboxTreeAction[];
}
export declare function useMixedStateCheckbox({ parent, children }: CheckboxTree): () => void;
