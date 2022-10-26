import type { UIColorLevels } from '../blendPoints';
import type { IntentColors } from '../types';
/**
 * Blends an intent color with the background
 **/
export declare const intentUIBlend: (intent: keyof IntentColors | 'key' | 'neutral', level: UIColorLevels) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
