export interface TextTheme {
    fontSize: number | string;
    fontFamily: string;
}
export declare const useMeasuredText: (text: string, theme: TextTheme) => DOMRect;
