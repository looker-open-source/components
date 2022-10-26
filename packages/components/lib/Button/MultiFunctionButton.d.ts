import type { ReactElement, RefAttributes, Ref } from 'react';
import React from 'react';
import type { IconButtonProps } from './iconButtonTypes';
import type { ButtonProps } from './types';
export declare type MultiFunctionButtonProps = {
    alternate: ReactElement<(ButtonProps | IconButtonProps) & RefAttributes<HTMLButtonElement>>;
    alternateRef?: Ref<HTMLButtonElement>;
    children: ReactElement<(ButtonProps | IconButtonProps) & RefAttributes<HTMLButtonElement>>;
    swap?: boolean;
};
/**
 * MultiFunctionButton "swaps" the button shown generally with the "alternate"
 * button specified. This component is generally intended for showing a button with
 * a cancelable "loading" state or similar.
 *
 * The smaller of the two buttons will automatically be resized to match the width of
 * the larger to prevent layout "jitter" when the component swaps between states.
 */
export declare const MultiFunctionButton: React.ForwardRefExoticComponent<MultiFunctionButtonProps & RefAttributes<HTMLButtonElement>>;
