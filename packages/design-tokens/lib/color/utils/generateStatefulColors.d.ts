import type { StatefulColors, StatefulColorChoices, SpecifiableColors, DerivativeColors } from '../types';
import type { ExtendedStateColors } from '../types/stateful';
export declare const generateInteractive: (color: string) => string;
export declare const generatePressed: (color: string) => string;
export declare const accentBlendScale = 16;
export declare const generateStatefulColor: (background: string, color: string) => StatefulColorChoices;
export declare const generateExtendedStatefulColors: (specifiable: SpecifiableColors) => ExtendedStateColors;
export declare const generateStatefulColors: (specifiable: SpecifiableColors, derivatives: DerivativeColors) => StatefulColors;
