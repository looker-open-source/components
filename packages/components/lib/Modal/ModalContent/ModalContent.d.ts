import type { CompatibleHTMLProps, PaddingProps, SpacingSizes } from '@looker/design-tokens';
import React from 'react';
export declare type ModalContentProps = CompatibleHTMLProps<HTMLDivElement> & PaddingProps & {
    /**
     * If the Modal does not have a footer use this property to manually render padding
     * at the bottom of the ModalContent. (`hasFooter={false}`)
     * @default true
     */
    hasFooter?: boolean;
    /**
     * If the Modal does not have a header use this property to manually render padding
     * at the top of the ModalContent. (`hasHeader={false}`)
     * @default true
     */
    hasHeader?: boolean;
};
export declare const ModalContent: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<CompatibleHTMLProps<HTMLDivElement> & PaddingProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    /**
     * If the Modal does not have a footer use this property to manually render padding
     * at the bottom of the ModalContent. (`hasFooter={false}`)
     * @default true
     */
    hasFooter?: boolean | undefined;
    /**
     * If the Modal does not have a header use this property to manually render padding
     * at the top of the ModalContent. (`hasHeader={false}`)
     * @default true
     */
    hasHeader?: boolean | undefined;
} & {
    /**
     * Used for vertical `y` padding when content does not have overflow and does have
     * an adjacent footer or header.
     * @private
     * @default 'xxxsmall'
     */
    overflowVerticalPadding?: SpacingSizes | undefined;
} & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, CompatibleHTMLProps<HTMLDivElement> & PaddingProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    /**
     * If the Modal does not have a footer use this property to manually render padding
     * at the bottom of the ModalContent. (`hasFooter={false}`)
     * @default true
     */
    hasFooter?: boolean | undefined;
    /**
     * If the Modal does not have a header use this property to manually render padding
     * at the top of the ModalContent. (`hasHeader={false}`)
     * @default true
     */
    hasHeader?: boolean | undefined;
} & {
    /**
     * Used for vertical `y` padding when content does not have overflow and does have
     * an adjacent footer or header.
     * @private
     * @default 'xxxsmall'
     */
    overflowVerticalPadding?: SpacingSizes | undefined;
}, never>;
