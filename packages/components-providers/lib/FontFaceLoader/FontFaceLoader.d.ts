/// <reference types="react" />
import type { FontSources } from '@looker/design-tokens';
export declare const fontFacesCSS: (fontSources: FontSources) => string;
export declare const importFont: (url: string) => string;
export declare const fontFace: (face: string, url: string) => string;
/**
 * FontFaceLoader injects font @font-face imports into a style tag on the page's <HEAD>
 * Font sources are determined using the fontSources key on the theme
 */
export declare const FontFaceLoader: () => JSX.Element | null;
