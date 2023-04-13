import type { SpecifiableTextColors } from '../color/types';
export declare type TileTitleAlignment = 'left' | 'center' | 'right';
/**
 * DashboardAppearance stores customization settings that control a dashboard's
 * look and feel more specifically than what is provided via the
 * @looker/components theme.
 */
export interface DashboardAppearance {
    /**
     * Toggles the dashboard header
     * @default true
     */
    show_dashboard_header: boolean;
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
     * Toggles the filters icon/toggle
     * @default true
     */
    show_filters_toggle: boolean;
    /**
     * Toggles the dashboard last updated indicator
     * @default true
     */
    show_last_updated_indicator: boolean;
    /**
     * Toggles the reload data icon/button
     * @default true
     */
    show_reload_data_icon: boolean;
    /**
     * Toggles the dashboard actions menu
     * @default true
     */
    show_dashboard_menu: boolean;
    /**
     * Centers the dashboard title
     * @default false
     */
    center_dashboard_title: boolean;
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
    /**
     * The background color for text tile surface
     * @default theme.colors.pageBackground
     */
    text_tile_background_color: string;
}
