import type { Dispatch, SetStateAction } from 'react';
/**
 * A version of useState that is synced with a prop
 * @param prop The prop to sync state to
 * @returns the current state value
 */
export declare const useSyncedState: <S>(prop: S) => [S, Dispatch<SetStateAction<S>>];
