import type { ListItemProps } from '../ListItem';
import type { GenericClickProps } from '../utils/useClickable';
import type { TreeProps } from '../Tree';
import type { ControlledLoosely } from '../Accordion2/controlTypes';
export declare type NavTreeItemProps = {
    /**
     * Aligns item label based on parent Tree's icon prop
     */
    parentIcon?: boolean;
} & Omit<ListItemProps, 'density'>;
declare type IndicatorToggleModeProps = {
    href: string;
    /**
     * Passed down to the indicator icon's label prop
     */
    indicatorLabel: string;
};
declare type DisclosureToggleModeProps = {
    href?: never;
    indicatorLabel?: never;
};
export declare type NavTreeProps = Omit<NavTreeItemProps, 'itemRole' | 'parentIcon'> & ControlledLoosely & GenericClickProps<HTMLElement> & Pick<TreeProps, 'label'> & (IndicatorToggleModeProps | DisclosureToggleModeProps);
export {};
