import type { ReactNode } from 'react';
export declare type PanelDirection = 'left' | 'right';
export declare type PanelRenderProp = (props: UsePanelResponseDom) => ReactNode;
export interface PanelProps extends UsePanelProps {
    children?: PanelRenderProp | ReactNode;
}
export declare type PanelSurfaceProps = {
    /**
     * Edge of the screen from which the panel will enter
     * @default left
     */
    direction?: PanelDirection;
};
export declare type UsePanelResponse = {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    panel: ReactNode;
    domProps: UsePanelResponseDom;
};
export declare type PanelBaseProps = {
    /**
     * Close icon button tooltip text
     * I18n recommended: content that is user visible should be treated for i18n
     */
    closeLabel?: string;
    /**
     * IconButton in PanelHeader will have toggled and background color
     * based on theme's key color
     * @default false
     */
    iconToggle?: boolean;
    /**
     * Specify a callback to be called each time this Dialog is closed
     */
    onClose?: () => void;
    /**
     * Value displayed as Panel header clickable to close Panel
     */
    title: string;
    /**
     * Disable Panel open / close animations
     */
    disableAnimation?: boolean;
};
export declare type UsePanelProps = PanelBaseProps & {
    /**
     * Specify a callback to be called before each time trying to close Panel.
     * This allows for use-cases where the user might lose work
     * (think common "Save before closing warning" type flow)
     */
    canClose?: () => boolean;
    /**
     * Element that will be displayed as Panel
     */
    content: ReactNode;
    /**
     * Panel will be displayed immediately when rendered.
     * NOTE: Once rendered, changes to this value will be ignored. This property cannot
     * be used treat this component as "controlled"
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Edge of the screen from which the panel will enter
     * @default left
     */
    direction?: PanelDirection;
    /**
     * Optional, for a controlled version of the component
     */
    setOpen?: (open: boolean) => void;
    /**
     * Dialog will be displayed immediately when rendered.
     * @default undefined
     */
    isOpen?: boolean;
    /**
     * Called after the panel close animation finishes
     */
    onAfterClose?: () => void;
    /**
     * Called after the panel open animation finishes
     */
    onAfterOpen?: () => void;
};
export interface UsePanelResponseDom {
    onClick: () => void;
    role: string;
    'aria-expanded': boolean;
}
