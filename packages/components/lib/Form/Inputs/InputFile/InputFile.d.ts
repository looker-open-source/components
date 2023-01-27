/// <reference types="react" />
import type { CompatibleHTMLProps } from '@looker/design-tokens';
export declare type InputFileProps = Omit<CompatibleHTMLProps<HTMLButtonElement>, 'onChange'> & Pick<CompatibleHTMLProps<HTMLInputElement>, 'onChange'> & {
    /**
     * A string containing one or more unique file type specifiers i.e. '.pdf', each file type separated by a comma
     */
    accept?: string;
    /**
     * Text for the button which uploads the file
     */
    buttonText?: string;
    /**
     * A function that takes the uploaded file
     */
    handleFile: (value: File) => void;
};
export declare const InputFile: import("styled-components").StyledComponent<({ accept, buttonText, className, handleFile, onChange, onClick, placeholder, type, ...restProps }: InputFileProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
