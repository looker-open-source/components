import { colors } from '../color';
import { elevations } from '../elevation';
import { space } from '../space';
import { componentSettingsDefaults } from '../defaults';
import { breakpoints, easings, fontFamilies, fontSizes, fontWeights, lineHeights, radii, sizes, shadows, transitions } from '../tokens';
import { generateDashboardAppearance } from './utils/generateDashboardAppearance';
export const theme = {
  breakpoints,
  colors,
  dashboardAppearance: generateDashboardAppearance(colors),
  defaults: componentSettingsDefaults,
  easings,
  elevations,
  fontSizes,
  fontWeights,
  fonts: fontFamilies,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndexFloor: 1
};
//# sourceMappingURL=theme.js.map