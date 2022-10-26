import type { SyntheticEvent } from 'react';
export declare function useWrapEvent<E extends SyntheticEvent>(ourHandler: (e: E) => void, theirHandler?: (e: E) => void): (event: E) => void;
