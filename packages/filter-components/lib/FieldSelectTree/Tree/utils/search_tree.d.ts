import type { TreeModel } from '../types';
/**
 * Given a search string, highlight every occurrence of that string and
 * if it's a section name, open the section.
 * @param trees
 * @param search
 * @param parentIsOpen
 */
export declare const searchTree: (trees: TreeModel[], search?: string | undefined, parentIsOpen?: boolean | undefined) => TreeModel[];
export declare const containsString: ({ value }: TreeModel, str2?: string | undefined) => boolean;
/**
 * Returns TRUE if there is any first-level entry in the
 * given "tree"  that is not hidden.
 *
 * Since we do hide the children whenever a parent
 * entry is hidden and hide the parent if all children are
 * hidden, we can safely check on the first level of entries
 * in the tree.
 *
 * @param tree the tree to check for visibility
 */
export declare const hasAnyVisibleEntry: (tree?: TreeModel[] | undefined) => boolean;
