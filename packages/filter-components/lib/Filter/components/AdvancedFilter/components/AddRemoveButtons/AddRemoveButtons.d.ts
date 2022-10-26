import type { FC, MouseEvent } from 'react';
interface AddRemoveButtonsProps {
    onAdd: (e: MouseEvent) => void;
    onRemove: (e: MouseEvent) => void;
    showAdd: boolean;
    showRemove: boolean;
}
export declare const AddRemoveButtons: FC<AddRemoveButtonsProps>;
export {};
