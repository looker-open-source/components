export interface BlendColors extends TextColors, UIColors {
}
export interface UIColors {
    /**
     * Secondary background / contrast
     * Used for: sidebar background, current menu item background
     * @default charcoal100
     */
    ui1: string;
    /**
     * Tertiary background / contrast
     * Used for: filter chip background, subtle borders
     * @default charcoal200
     */
    ui2: string;
    /**
     * Lower contrast / subtle elements
     * Used for: dividers, input border, subtle icons
     * @default charcoal300
     */
    ui3: string;
    /**
     * Medium Contrast element
     * Used for: high contrast border, icons
     * @default charcoal400
     */
    ui4: string;
    /**
     * High contrast element
     * Used for: Main navigation background, Sidebar navigation current marker
     * @default charcoal800
     */
    ui5: string;
}
export declare const uiColors: Array<keyof UIColors>;
export interface TextColors {
    /**
     * Lowest contrast text in UI, disabled states, placeholder text, for non-essential text only
     * @default charcoal400
     */
    text1: string;
    /**
     * Reduced emphasis text
     * Used for: Help text, meta information
     * @default charcoal500
     */
    text2: string;
    /**
     * Tertiary Text
     * Used for: Sub headers,  Tile text, placeholder text
     * @default charcoal600
     */
    text3: string;
    /**
     * Secondary Text
     * Used for: Headers, Labels, Dashboard tile titles
     * @default charcoal700
     */
    text4: string;
    /**
     * Primary Text
     * Used for: Headers, Labels, Dashboard tile titles
     * @default charcoal800
     */
    text5: string;
}
export declare const textColors: Array<keyof TextColors>;
