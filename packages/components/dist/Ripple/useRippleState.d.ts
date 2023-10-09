export interface RippleAction {
    type: 'START' | 'END' | 'DONE';
}
export declare type RippleState = 'IN' | 'OUT' | 'OFF';
export declare const useRippleState: () => {
    className: string;
    end: () => void;
    start: () => void;
};
