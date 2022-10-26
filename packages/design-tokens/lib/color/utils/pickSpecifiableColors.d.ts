import type { Colors } from '../types';
export declare const pickSpecifiableColors: (colors: Colors) => Pick<Colors, keyof import("../types").CoreColors | keyof import("../types").IntentColors | keyof import("../types").SpecifiableTextColors | keyof import("../types").IllustrationColors>;
