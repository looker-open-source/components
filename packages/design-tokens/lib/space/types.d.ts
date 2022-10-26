import type { SizeNone, SizeXXXSmall, SizeXXSmall, SizeXSmall, SizeSmall, SizeMedium, SizeLarge, SizeXLarge, SizeXXLarge, SizeXXXLarge, SizeXXXXLarge } from '../system/size';
import type { Unit0, Unit05, Unit1, Unit10, Unit11, Unit12, Unit13, Unit14, Unit15, Unit16, Unit2, Unit3, Unit4, Unit5, Unit6, Unit7, Unit8, Unit9 } from './units';
/**
 * @deprecated - Use `UnitSizes` instead
 */
export declare type LegacySpacingSizes = SizeNone | SizeXXXSmall | SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge | SizeXLarge | SizeXXLarge | SizeXXXLarge | SizeXXXXLarge;
export declare type UnitSizes = Unit0 | Unit05 | Unit1 | Unit2 | Unit3 | Unit4 | Unit5 | Unit6 | Unit7 | Unit8 | Unit9 | Unit10 | Unit11 | Unit12 | Unit13 | Unit14 | Unit15 | Unit16;
export declare type SpacingSizes = LegacySpacingSizes | UnitSizes;
/**
 * @deprecated Use `spacing` instead
 */
export declare type LegacySpaceRamp = Record<LegacySpacingSizes, string>;
export declare type UnitRamp = Record<UnitSizes, string>;
export declare type SpaceRamp = Record<SpacingSizes, string>;
