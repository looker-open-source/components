/// <reference types="react" />
import type { Accordion2Props } from './types';
/**
 * `Accordion2` manages the relationship between a `label` and the `children` within.
 * Links the the label and children using ARIA features and supports either controlled
 * or uncontrolled usage patterns.
 *
 * See `useAccordion2` hook to meet more complex compositional requirements
 *
 * Accordion2 is a modernized version of the `Accordion` component with an improved
 * interface that removes confusing props and offers a more opinionated approach to
 * styling.
 */
export declare const Accordion2: import("styled-components").StyledComponent<(props: Accordion2Props) => JSX.Element, import("styled-components").DefaultTheme, {} & Accordion2Props, never>;
