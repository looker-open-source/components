import type { MouseEvent } from 'react';
interface AddRemoveButtonsProps {
    onAdd: (e: MouseEvent) => void;
    onRemove: (e: MouseEvent) => void;
    showAdd: boolean;
    showRemove: boolean;
}
export declare const AddRemoveButtons: ({ onAdd, onRemove, showAdd, showRemove, }: AddRemoveButtonsProps) => JSX.Element;
export {};
