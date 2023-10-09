import type { CompatibleHTMLProps, TypographyProps } from '@looker/design-tokens';
import React from 'react';
export interface LinkProps extends CompatibleHTMLProps<HTMLAnchorElement>, TypographyProps {
    /**
     * Use the theme `key` color rather than `link`
     * @default false
     */
    keyColor?: boolean;
    /**
     * Display underline.
     * NOTE:
     * When false no underline will be displayed for any pseudo classes
     * When true underline will always be displayed
     * When undefined underline is only displayed when Link has :hover, :focus, :active and :visited
     * @default undefined
     */
    underline?: boolean;
    /**
     * Display an icon indicating that the link is to an external resource
     * Also sets `rel="external noreferrer" on generated link.
     * @default false
     */
    isExternal?: boolean;
    /**
     * Disable `Link`'s automatic additional of `rel` for `target="_blank" &
     * `isExternal` prop. Use of this is discouraged but may warranted in
     * narrow cases.
     *
     * Use with caution.
     *
     * @default false
     */
    dangerouslyDisableRel?: boolean;
}
/**
 * The `<Link />` component renders an `<a>` tag that accepts an `href` property.
 *
 * You can also supply an optional `id` property if you want to give your anchor an id.
 *
 * Link provides built-in protection against "reverse tab-nab"
 * (https://owasp.org/www-community/attacks/Reverse_Tabnabbing)
 * by detecting `target="_blank" and adding the appropriate `rel` attributes to protect
 * against bad behavior.
 */
export declare const Link: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>, import("styled-components").DefaultTheme, {}, never>;
