import type { FC } from 'react';
import type { NamedBreakpoints } from '@looker/design-tokens';
export interface BreakpointProps {
    show: NamedBreakpoints | [NamedBreakpoints?, NamedBreakpoints?];
}
export declare const Breakpoint: FC<BreakpointProps>;
