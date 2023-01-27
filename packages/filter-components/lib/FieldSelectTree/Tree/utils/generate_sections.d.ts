/// <reference types="react" />
import type { TreeModel } from '../types';
/**
 * This function takes the raw tree data and returns a React Tree component
 * with it, composed of Section and Field subcomponents.
 * @param trees
 * @param depth
 * @param onSectionClick
 * @param onFieldClick
 */
export declare const generateSections: (trees: TreeModel[], depth: number, onSectionClick: (updateNode: {
    id: string;
    isOpen: boolean;
}) => void, onFieldClick: (label: string, payload?: any) => void) => (JSX.Element | null)[];
