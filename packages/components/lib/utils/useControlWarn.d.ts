export interface UseControlWarnProps {
    isControlledCheck: () => boolean;
    name: string;
    controllingProps: string[];
}
export declare function useControlWarn({ isControlledCheck, name, controllingProps, }: UseControlWarnProps): boolean;
