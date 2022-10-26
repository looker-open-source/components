/**
 * Converts malformed font-family specifications to well-formed structure per
 * CSSWG specifications. Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
 */
export declare const sanitizeFontFamily: (faces: string) => string;
export declare const sanitizeFontFamilyArray: (faces: string) => string[];
export declare const sanitizeFontFace: (face: string) => string;
