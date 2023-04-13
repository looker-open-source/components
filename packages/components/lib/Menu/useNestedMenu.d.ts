import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';
export interface UseNestedMenuProps extends Pick<CompatibleHTMLProps<HTMLLIElement>, 'onClick' | 'onKeyDown' | 'onMouseEnter' | 'onMouseLeave'> {
    id: string;
    /**
     * A list of menu items that will open to the right when the user hovers
     * or hits the right arrow key. Only supports one level of nesting.
     */
    nestedMenu?: ReactNode;
}
export declare const useNestedMenu: ({ id, onClick, onKeyDown, onMouseEnter, onMouseLeave, nestedMenu, }: UseNestedMenuProps) => {
    domProps: {
        'aria-expanded'?: boolean | undefined;
        'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "listbox" | "tree" | "true" | "false" | undefined;
        ref?: ((node: HTMLElement | null) => void) | undefined;
        onClick: (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void;
        onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => void;
        onMouseEnter: (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void;
        onMouseLeave: (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void;
        onMouseMove: (e: MouseEvent<HTMLElement>) => void;
    };
    popover: false | "" | 0 | JSX.Element | null | undefined;
};
