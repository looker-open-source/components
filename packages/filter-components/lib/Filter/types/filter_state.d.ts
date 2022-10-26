import type { FilterASTNode } from '@looker/filter-expressions';
/**
 * Interface for the <Filter/> component's state property
 */
export interface FilterState {
    ast: FilterASTNode | undefined;
    expression: string;
}
