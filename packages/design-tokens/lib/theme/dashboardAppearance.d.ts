import type { SpecifiableTextColors } from '../color/types';
export declare type TileTitleAlignment = 'left' | 'center' | 'right';
/**
 * DashboardAppearance stores customization settings that control a dashboard's
 * look and feel more specifically than what is provided via the
 * @looker/components theme.
 */
export interface DashboardAppearance {
    /**
     * Toggles the dashboard title
     * @default true
     */
    title: boolean;
    /**
     * Toggles the filters section
     * @default true
     */
    filters: boolean;
    /**
     * Toggles the last collective runtime
     * @default true
     */
    show_last_collective_runtime: boolean;
    /**
     * Default appearance for non-text tiles displayed within this DashboardAppearance
     */
    tiles: TileAppearance;
}
export interface TileAppearance extends TileAppearanceColors {
    /**
     * The text alignment of tile titles
     * @default 'center'
     */
    titleAlignment: TileTitleAlignment;
}
export interface TileAppearanceColors extends SpecifiableTextColors {
    /**
     * The text color
     * @default theme.colors.background
     */
    text?: string;
    /**
     * The background color for tile surface
     * @default theme.colors.background
     */
    background: string;
}
