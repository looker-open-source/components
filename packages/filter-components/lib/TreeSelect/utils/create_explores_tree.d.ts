import type { TreeModel } from '../types';
import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models';
/**
 * Returns a Tree of explores that can be used by <TreeSelect />.
 */
export declare const createExploresTree: (explores: ILookmlModelExplore[]) => TreeModel[];
