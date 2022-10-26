import React from 'react';
declare type UseEffectParams = Parameters<typeof React.useEffect>;
declare type EffectCallback = UseEffectParams[0];
declare type DependencyList = UseEffectParams[1];
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
export declare function useDeepCompareMemoize<T>(value: T): T;
/**
 * An alternative rewrite to useEffect for situations where you need
 * to compare complex, deeply nested objects in the dependency array.
 *
 * @param callback function to call when dependencies change
 * @param dependencies an array of objects to compare
 */
export declare const useEffectDeepEquals: (callback: EffectCallback, dependencies: DependencyList) => void;
export {};
