import type { ReactNode } from 'react';
import React from 'react';
import type { CompatibleHTMLProps, SpacingSizes } from '@looker/design-tokens';
import type { SimpleLayoutProps } from '../../Layout/utils/simple';
import type { ControlledLoosely } from '../../Accordion2/controlTypes';
export declare type FieldsetProps = Omit<CompatibleHTMLProps<HTMLDivElement>, 'wrap'> & SimpleLayoutProps & ControlledLoosely & {
    /**
     * If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)
     * @default false
     */
    accordion?: boolean;
    /**
     * Determines where to place the label in relation to the input.
     * @default false
     */
    inline?: boolean;
    /**
     * Allowed fields to wrap if they exceed the container width
     * @default false
     */
    wrap?: boolean;
    /**
     * Displayed above the children of Fieldset
     * I18n recommended: content that is user visible should be treated for i18n
     */
    legend?: ReactNode;
    fieldsHideLabel?: boolean;
    /**
     * Amount of space between fields
     * @default medium
     */
    gap?: SpacingSizes;
};
export interface FieldsetContextProps {
    fieldsHideLabel?: boolean;
}
export declare const FieldsetContext: React.Context<FieldsetContextProps>;
export declare const Fieldset: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Omit<CompatibleHTMLProps<HTMLDivElement>, "wrap"> & SimpleLayoutProps & Partial<{
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}> & {
    defaultOpen?: boolean | undefined;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
} & {
    /**
     * If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)
     * @default false
     */
    accordion?: boolean | undefined;
    /**
     * Determines where to place the label in relation to the input.
     * @default false
     */
    inline?: boolean | undefined;
    /**
     * Allowed fields to wrap if they exceed the container width
     * @default false
     */
    wrap?: boolean | undefined;
    /**
     * Displayed above the children of Fieldset
     * I18n recommended: content that is user visible should be treated for i18n
     */
    legend?: ReactNode;
    fieldsHideLabel?: boolean | undefined;
    /**
     * Amount of space between fields
     * @default medium
     */
    gap?: SpacingSizes | undefined;
} & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {
    width: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
} & Omit<CompatibleHTMLProps<HTMLDivElement>, "wrap"> & SimpleLayoutProps & Partial<{
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}> & {
    defaultOpen?: boolean | undefined;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
} & {
    /**
     * If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)
     * @default false
     */
    accordion?: boolean | undefined;
    /**
     * Determines where to place the label in relation to the input.
     * @default false
     */
    inline?: boolean | undefined;
    /**
     * Allowed fields to wrap if they exceed the container width
     * @default false
     */
    wrap?: boolean | undefined;
    /**
     * Displayed above the children of Fieldset
     * I18n recommended: content that is user visible should be treated for i18n
     */
    legend?: ReactNode;
    fieldsHideLabel?: boolean | undefined;
    /**
     * Amount of space between fields
     * @default medium
     */
    gap?: SpacingSizes | undefined;
}, "width">;
