export interface HueSaturation {
    h: number;
    s: number;
}
export interface SimpleHSV extends HueSaturation {
    v: number;
}
export interface ColorPickerProps {
    className?: string;
    hsv: SimpleHSV;
    setHsv: (hsv: SimpleHSV) => void;
    width: number;
}
