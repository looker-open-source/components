import type { FC } from 'react';
import type { AvatarProps } from './Avatar';
export interface AvatarUserProps extends AvatarProps {
    user?: {
        first_name: string | null;
        last_name: string | null;
        avatar_url: string | null;
    };
}
export declare const AvatarUser: import("styled-components").StyledComponent<FC<AvatarUserProps>, import("styled-components").DefaultTheme, {
    color: string;
    size: string;
}, "color" | "size">;
