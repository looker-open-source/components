/// <reference types="react" />
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ListColor } from '../List';
export interface ListItemWrapperProps extends CompatibleHTMLProps<HTMLElement> {
    color: ListColor;
}
export declare const ListItemWrapper: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, {
    color: string;
    role: import("react").AriaRole;
}, "color" | "role">;
