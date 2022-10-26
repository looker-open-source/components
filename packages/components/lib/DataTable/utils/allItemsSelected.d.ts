import type { MixedBoolean } from '../../Form/Inputs/Checkbox';
import type { SelectConfig } from '../types';
declare type HelperArgs = Pick<SelectConfig, 'selectedItems' | 'pageItems'>;
export declare const allItemsSelected: (select?: HelperArgs) => MixedBoolean;
export {};
