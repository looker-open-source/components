import type { FC } from 'react';
import React, { useLayoutEffect as reactUseLayoutEffect } from 'react';
export declare const SafeSSRContext: React.Context<boolean>;
/**
 * Avoid the React useLayoutEffect when using renderToString
 * on the client side
 */
export declare const SafeSSRProvider: FC;
/**
 * Avoids the React useLayoutEffect error by falling back to useEffect.
 * Note: A component that calls useLayoutEffect will most likely
 * not behave correctly in SSR. Instead, consider delaying rendering
 * until client-side JS loads, via useEffect.
 */
export declare const useSafeLayoutEffect: typeof reactUseLayoutEffect;
