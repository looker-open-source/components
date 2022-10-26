import React from 'react';
import type { FilterProps } from '../Filter/types/filter_props';
import type { TokenProps } from './Token';
export declare type FilterTokenProps = FilterProps & Pick<TokenProps, 'maxWidth' | 'onClick'>;
export declare const FilterToken: React.ForwardRefExoticComponent<FilterTokenProps & React.RefAttributes<HTMLDivElement>>;
