import type React from 'react';
/**
 * Partitions an object into 2 objects, the first containing all aria related prop keys and their respective values
 * and the second containing all other prop keys and their respective values
 *
 * @param {T extends React.AriaAttribute} props
 * @returns {Array} A tuple where the first object contains all aria related props and the second object contains the remaining props
 */
export declare const partitionAriaProps: <T extends React.AriaAttributes>(props: T) => {
    [key: string]: string;
}[];
