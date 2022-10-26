import type { Transitions } from '@looker/design-tokens';
declare type Entering = 'entering';
declare type Entered = 'entered';
declare type Exiting = 'exiting';
declare type Exited = 'exited';
declare type AnimationStates = Entering | Entered | Exiting | Exited;
interface UseAnimationStateReturn {
    /**
     * className will transition from 'entering` => `entered` => `exiting` => `exited`
     */
    className: AnimationStates;
    /**
     * renderDOM indicates whether or not the DOM elements to be associated should
     * be rendered.
     */
    renderDOM: boolean;
    /**
     * Animation is actively running (use to trigger `aria-busy` application)
     */
    busy: boolean;
}
export interface AnimationStateProps {
    enter?: Transitions | undefined;
    exit?: Transitions | undefined;
    isOpen?: boolean;
    onAfterExited?: () => void;
    onAfterEntered?: () => void;
}
/**
 *
 * Hook that encapsulates timing behavior to allow for CSS transitions to complete before DOM elements are
 * removed from the DOM as well as offering classNames to hook transitions to and `busy` response that details
 *
 *
 * @param isOpen - Toggle visibility
 * @param enter - whether to transition the enter @default true
 * @param exit - whether to transition the exit @default true
 * @param timing - How long does the transition take to complete. Elements will be removed from the DOM once this time is elapsed
 */
export declare const useAnimationState: ({ enter, exit, isOpen, onAfterEntered, onAfterExited, }: AnimationStateProps) => UseAnimationStateReturn;
export {};
