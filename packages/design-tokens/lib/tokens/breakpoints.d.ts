/**
 * 320px — 480px: Mobile devices. (20rem - 30rem)
 * 481px — 768px: iPads, Tablets. (30rem - 48rem)
 * 769px — 1024px: Small screens, laptops. (48rem - 64rem)
 * 1025px — 1200px: Desktops, large screens. (64rem - 75rem)
 * 1201px and more — Extra large screens, TV. (90rem +)
 **/
declare type MOBILE = 'mobile';
declare type TABLET = 'tablet';
declare type LAPTOP = 'laptop';
declare type DESKTOP = 'desktop';
declare type XL = 'xl';
export declare type NamedBreakpoints = MOBILE | TABLET | LAPTOP | DESKTOP | XL;
export declare const breakpoints: string[];
export declare const BreakpointRamp: Record<NamedBreakpoints, string>;
export {};
