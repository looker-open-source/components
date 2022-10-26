import type { IError } from '@looker/sdk';
import type { ColorApplication } from '@looker/visualizations-adapters';
/**
 * useColorPalette fetches color collection based on vis config metadata
 * @param colorApplication is represented by the color_application field in vis config
 * @returns an array of hex codes
 */
export declare const useColorPalette: (colorApplication?: ColorApplication | undefined) => {
    error: IError;
    colorPalette: string[] | undefined;
    isOK: boolean;
    isPending: boolean;
} | {
    error?: undefined;
    colorPalette: string[] | undefined;
    isOK: boolean;
    isPending: boolean;
};
