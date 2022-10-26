export declare const coreColors: Array<keyof CoreColors>;
export interface TextColor {
    /**
     * Used for: Text
     * @default charcoal800
     */
    text: string;
}
export interface CoreColors extends TextColor {
    /**
     * Default page background
     * Used for: application background
     * @default white
     */
    background: string;
    /**
     * Used as page background
     * In some themes pageBackground and background have a subtle difference
     * wherein the pageBackground is closer to `ui1` but blends are calculated
     * from a more "absolute" background color (white or black)
     */
    pageBackground: string;
    /**
     * Key color is applied strategically across the UI
     * Used for: default action buttons, toggle switches, interactive component accents
     * @default purple400
     */
    key: string;
}
export declare const intentColors: Array<keyof IntentColors>;
export interface IntentColors {
    /**
     * Link text color
     * Used for: Breadcrumb, external link
     * @default blue600
     */
    link: string;
    /**
     * Critical intent color
     * Used for: Delete button, error and validation messages
     * @default red500
     */
    critical: string;
    /**
     * Warn intent color
     * Used for: Warning banner
     * @default yellow500
     */
    warn: string;
    /**
     * Positive intent color
     * Used for: Positive banner
     * @default green500
     */
    positive: string;
    /**
     * Inform intent color
     * Used for: Info banner
     * @default blue500
     */
    inform: string;
    /**
     * Indicates a calculated value
     * @default #319220
     */
    calculation: string;
    /**
     * Indicates dimensionality
     * @default #31689E
     */
    dimension: string;
    /**
     * Indicates measure
     * @default #C2772E
     */
    measure: string;
}
export interface SpecifiableTextColors {
    /**
     * Used by Heading
     * @note This is generally identical to colors.text5
     * @default charcoal800
     */
    title: string;
    /**
     * Used by Paragraph, Ul/Ol
     * @note This is generally identical to colors.text5
     * @default charcoal800
     */
    body: string;
}
export declare type IllustrationColors = {
    /**
     * Used in Illustration background circles
     * If not specified, the background will have a neutral color and simplified style
     */
    illustration1?: string;
    /**
     * Used in Illustration background circles
     * If not specified, the background will have a neutral color and simplified style
     */
    illustration2?: string;
    /**
     * Used in Illustration background circles
     * If not specified, the background will have a neutral color and simplified style
     */
    illustration3?: string;
    /**
     * Used in Illustration background circles
     * If not specified, the background will have a neutral color and simplified style
     */
    illustration4?: string;
    /**
     * Used in Illustration background circles
     * If not specified, the background will have a neutral color and simplified style
     */
    illustration5?: string;
};
export declare const specifiableTextColors: string[];
export declare type SpecifiableColors = CoreColors & IntentColors & IllustrationColors & Partial<SpecifiableTextColors>;
export declare const specifiableColors: Array<keyof SpecifiableColors>;
