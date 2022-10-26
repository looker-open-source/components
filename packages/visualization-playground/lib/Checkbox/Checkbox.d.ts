import type { FC } from 'react';
interface CheckboxProps {
    label?: string;
    onChange?: (isChecked: boolean) => void;
    checked?: boolean;
}
/**
 * A simple checkbox designed to be symmetrical with other components used in
 * Config editor. Stores checked state, and accepts a "checked" prop (rather
 * than "checked" per standard checkbox)
 */
export declare const Checkbox: FC<CheckboxProps>;
export {};
