import type { CAll } from '@looker/visualizations-adapters';
/**
 * A shared hook for querying vis config data from the SDK, merging with user overrides,
 * and running config transformations to set defaults and normalize response.
 *
 * @param id query id
 * @param configOverrides user config overrides to merge with the sdk response
 * @returns final visConfig object and api state
 */
export declare const useVisConfig: (id: string, configOverrides?: Partial<CAll>) => {
    error?: import("packages/sdk/src").IError | undefined;
    isOK: boolean;
    isPending: boolean;
    visConfig: any;
};
