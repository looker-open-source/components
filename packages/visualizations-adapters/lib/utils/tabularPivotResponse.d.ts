import type { Fields, Pivots, SDKRecord } from '../types';
/**
 * Flattens a pivot query data response from the Looker API into an array of
 * 1-layer, tabularized data objects.
 *
 * Context: Measures look different in pivot queries where their values aren't
 * 1-level deep objects with "value" properties. Instead, they're objects
 * with keys reflective of a the pivot fields' values. We need to use the
 * pivots metadata from the query response to determine what those keys are
 * and then transform the values.
 */
export declare const tabularPivotResponse: ({ data, fields, pivots, }: {
    data: SDKRecord[];
    fields: Fields;
    pivots: Pivots;
}) => SDKRecord[];
