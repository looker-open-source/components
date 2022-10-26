/**
 * Generates a tuple with appropriate DOM props to create an ARIA label
 * relationship based on the ID (ID will be dynamically generated if not supplied)
 *
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
 *
 * First portion of tuple should be spread on the label
 * Second should be spread on the controlled element
 *
 * @returns [ label, labeled ]
 */
export declare const useAriaLabelObjectRelationship: (id?: string | undefined) => ({
    'aria-controls': string;
    id: string;
    'aria-labelledby'?: undefined;
} | {
    'aria-labelledby': string;
    id: string;
    'aria-controls'?: undefined;
})[];
