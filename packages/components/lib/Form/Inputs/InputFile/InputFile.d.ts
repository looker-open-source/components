/// <reference types="react" />
import type { CompatibleHTMLProps } from '@looker/design-tokens';
export declare type InputFileProps = Omit<CompatibleHTMLProps<HTMLButtonElement>, 'onChange'> & Pick<CompatibleHTMLProps<HTMLInputElement>, 'onChange'> & {
    /**
     * Text for the button which uploads the file
     */
    buttonText?: string;
    /**
     * A string containing one or more unique file type specifiers i.e. '.pdf', each file type seperated by a comma
     */
    accept?: string;
    /**
     * A function that takes the uploaded file
     */
    handleFile: (value: File) => void;
};
export declare const InputFile: import("styled-components").StyledComponent<({ accept, buttonText, className, handleFile, onChange, onClick, placeholder, type, ...restProps }: InputFileProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
