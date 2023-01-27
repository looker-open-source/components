import React from 'react';
interface FieldSearchProps {
    disabled?: boolean;
    fieldSearchInputId?: string;
    width?: string | number;
    height?: string | number;
    placeholder?: string;
    label?: string;
    onClick?: (event: React.MouseEvent) => void;
    value?: string;
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent) => void;
    isOpen?: boolean;
    withDropdown?: boolean;
    showSelectedSection?: boolean;
    disabledText?: React.ReactNode;
}
export declare const FieldSearch: React.ForwardRefExoticComponent<FieldSearchProps & React.RefAttributes<HTMLDivElement>>;
export {};
