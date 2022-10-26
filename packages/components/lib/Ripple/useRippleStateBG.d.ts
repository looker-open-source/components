export interface RippleActionBG {
    type: 'START' | 'END';
}
export declare type RippleStateBG = 'ON' | 'DOUBLE_ON' | 'OFF';
export declare const useRippleStateBG: () => {
    className: string;
    end: () => void;
    start: () => void;
};
