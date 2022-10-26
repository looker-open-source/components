export interface Viewport {
    name: string;
    styles: {
        height: string;
        width: string;
    };
    type: 'desktop' | 'mobile' | 'tablet' | 'other';
}
export interface ViewportMap {
    [key: string]: Viewport;
}
export declare const VIEWPORT_MAP: ViewportMap;
