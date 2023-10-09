import { stringGrammar } from './string_grammar';
const grammar = `TierExpression
= USER_ATTRIBUTE / MATCH_LIST / MATCH_TERM

MATCH_LIST
= left:MATCH_TERM COMMA _ right:TierExpression {
 return {
     type: ',',
       left: left,
       right: right
   }
}

MATCH_TERM
= not:(NOT)? term:(MATCH) {
 term.is = not ? false : true
 return term
}

`;
export const tierGrammar = grammar.concat(stringGrammar);
//# sourceMappingURL=tier_grammar.js.map