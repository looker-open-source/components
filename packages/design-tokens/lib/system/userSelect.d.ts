import type { Property } from 'csstype';
export interface UserSelectProps {
    /**
     * Property to set user-select CSS property
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
     * @example <Box userSelect="none"/>
     */
    userSelect?: Property.UserSelect;
}
export declare const userSelect: (props: UserSelectProps) => import("styled-components").FlattenSimpleInterpolation;
