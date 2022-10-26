/// <reference types="react" />
import type { CompatibleHTMLProps, Transitions } from '@looker/design-tokens';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
export declare type AnimationProps = {
    /**
     * Adds a delay before the start of the animation
     * @default none
     */
    delay?: Transitions;
    /**
     * Controls the duration of the animation
     * @default quick
     */
    duration?: Transitions;
};
export declare type AnimateProps = AnimationProps & SimpleLayoutProps & CompatibleHTMLProps<HTMLDivElement>;
export declare const animateCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<AnimationProps, import("styled-components").DefaultTheme>>;
export declare const Animate: import("styled-components").StyledComponent<(props: AnimateProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export declare const FadeIn: import("styled-components").StyledComponent<(props: AnimateProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
