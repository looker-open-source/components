import type { FilterASTNode, FilterItemToStringFunction, FilterToStringFunctionType, FilterExpressionType, TransformFunction } from '../types';
interface GrammarMapTypeOptions {
    grammar: string;
    toString: FilterToStringFunctionType;
    transform?: TransformFunction;
    describe: FilterItemToStringFunction;
    anyvalue: FilterASTNode;
    subTypes: readonly string[];
}
declare type GrammarMapType = {
    [K in FilterExpressionType]: GrammarMapTypeOptions;
};
export declare const grammarsMap: GrammarMapType;
export declare const typeToGrammar: (type: FilterExpressionType) => GrammarMapTypeOptions;
export {};
