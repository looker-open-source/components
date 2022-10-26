/// <reference types="react" />
import type { Tab2Props } from '../Tabs2/types';
export interface TabProps extends Omit<Tab2Props, 'label'> {
    disabled?: boolean;
    index?: number;
}
export declare const Tab: import("styled-components").StyledComponent<(props: TabProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
