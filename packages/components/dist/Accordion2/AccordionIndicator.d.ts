/// <reference types="react" />
import type { AccordionIndicatorProps } from './types';
export declare const AccordionIndicator: import("styled-components").StyledComponent<({ children, density, indicatorPosition, ...props }: AccordionIndicatorProps) => JSX.Element, import("styled-components").DefaultTheme, Omit<import("@looker/design-tokens").CompatibleHTMLProps<HTMLDivElement>, "content"> & import("@looker/design-tokens").DensityProp & {
    indicatorIcons?: import("./types").AccordionIndicatorIcons | undefined;
    indicatorPosition?: import("./types").AccordionIndicatorPosition | undefined;
}, never>;
