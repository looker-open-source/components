import type { FormEventHandler } from 'react';
import React from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { SpaceHelperProps } from '../Layout';
import type { ValidationMessageProps } from './ValidationMessage';
export declare type ValidationMessages = Record<string, ValidationMessageProps>;
export interface FormProps extends SpaceHelperProps, CompatibleHTMLProps<HTMLFormElement> {
    /**
     * A record of all validation messages for the form, where the key is the name
     *  of the validated field and the value holds the information for the corresponding
     *  message and validation type.
     */
    validationMessages?: ValidationMessages;
    onChange?: FormEventHandler<HTMLFormElement>;
    onInput?: FormEventHandler<HTMLFormElement>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}
export interface FormContextProps {
    validationMessages?: ValidationMessages;
}
export declare const FormContext: React.Context<FormContextProps>;
export declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>>;
export interface ChildProp {
    children?: JSX.Element;
}
export interface UseFormContextProps {
    name?: string;
    validationMessage?: ValidationMessageProps;
}
export declare function useFormContext({ name, validationMessage, }: UseFormContextProps): ValidationMessageProps | undefined;
