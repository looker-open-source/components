/// <reference types="react" />
import type { AvatarProps } from './Avatar';
export interface AvatarUserProps extends AvatarProps {
    user?: {
        first_name: string | null;
        last_name: string | null;
        avatar_url: string | null;
    };
}
export declare const AvatarUser: import("styled-components").StyledComponent<({ color, user, role, size, ...props }: AvatarUserProps) => JSX.Element, import("styled-components").DefaultTheme, {
    color: string;
    size: string;
}, "size" | "color">;
