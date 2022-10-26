import type { CCartesian, CSeriesBasic, CSeriesPoints, CSeriesLine, CSeriesSize, Fields } from '../types';
declare type AllSeriesAttributes = Partial<CSeriesBasic & CSeriesPoints & CSeriesLine & CSeriesSize>;
/**
 * A utility function made necessary by the reality that series can be
 * an array list or a key/value object.
 *
 * Returns a series that matches with the name provided in `key`
 *
 * @param fields standard fields object returned by SDK
 * @param config vis config object
 * @param key the string name we are searching for
 * @returns
 */
export declare const pickSeriesByName: (fields: Fields, config: CCartesian, key: string) => AllSeriesAttributes;
export {};
