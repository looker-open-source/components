import type { DefaultTheme } from 'styled-components';
import type { Colors } from '../color';
import type { Elevations } from '../elevation';
import type { SpaceRamp } from '../space';
import type { Easings, FontFamilyChoices, FontSizeRamp, FontWeightRamp, LineHeightRamp, Radii, SizeRamp, Shadows, TransitionRamp, FontSources } from '../system';
import type { ComponentSettingsDefaults } from '../defaults';
import type { DashboardAppearance } from './dashboardAppearance';
export interface Theme {
    breakpoints: string[];
    colors: Colors;
    /**
     * Temporary addition, do not use as this is likely to be removed very soon.
     *
     * @deprecated
     * @private
     */
    dashboardAppearance: DashboardAppearance;
    defaults: ComponentSettingsDefaults;
    easings: Easings;
    elevations: Elevations;
    fontSizes: FontSizeRamp;
    fonts: FontFamilyChoices;
    fontSources?: FontSources;
    fontWeights: FontWeightRamp;
    lineHeights: LineHeightRamp;
    radii: Radii;
    sizes: SizeRamp;
    shadows: Shadows;
    space: SpaceRamp;
    transitions: TransitionRamp;
    zIndexFloor: number;
}
export declare const theme: DefaultTheme;
declare module 'styled-components' {
    interface DefaultTheme extends Theme {
    }
}
