import type { Trap } from '../TrapStack/types';
import type { FocusTrapOptions } from './types';
export declare const activateFocusTrap: ({ element, options, }: Trap<FocusTrapOptions>) => () => void;
