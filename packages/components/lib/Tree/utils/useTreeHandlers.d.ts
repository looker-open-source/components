import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { FocusEvent } from 'react';
export declare const useTreeHandlers: (props: Pick<CompatibleHTMLProps<HTMLElement>, 'onFocus' | 'onMouseEnter' | 'onMouseLeave'>) => {
    contentHandlers: {
        onFocus: (event: FocusEvent<HTMLElement, Element>) => void;
    };
    hovered: boolean;
    wrapperHandlers: {
        onBlur: (event: FocusEvent<HTMLElement>) => void;
        onMouseEnter: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        onMouseLeave: (event: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
    };
};
