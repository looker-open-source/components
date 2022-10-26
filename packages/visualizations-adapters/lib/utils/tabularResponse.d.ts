import type { SDKRecord } from '../types';
export declare type TabularResponseHelper = (data: SDKRecord[]) => SDKRecord[];
/**
 * Transform query response to to a cleaner key/value collection
 */
export declare const tabularResponse: TabularResponseHelper;
