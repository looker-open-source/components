/// <reference types="react" />
import type { Tabs2Props } from './types';
/**
 * `Tabs2` are a clickable areas (Tab2) that organizes content across different pages or areas.
 * When a Tab2 is clicked, its contents are displayed and others are hidden.
 *
 * Tabs2 is a modernized version of the `Tabs` component with a simplified
 * interface to follow conventions in other components libraries and to more closely match the controlled and uncontrolled models of our other components.
 */
export declare const Tabs2: <IDType extends string = string>({ children, onTabChange, defaultTabId, distributed, tabId: propsTabId, }: Tabs2Props<IDType>) => JSX.Element;
