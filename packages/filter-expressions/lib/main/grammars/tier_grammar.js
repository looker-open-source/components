"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tierGrammar = void 0;
var _string_grammar = require("./string_grammar");

var grammar = "TierExpression\n= USER_ATTRIBUTE / MATCH_LIST / MATCH_TERM\n\nMATCH_LIST\n= left:MATCH_TERM COMMA _ right:TierExpression {\n return {\n     type: ',',\n       left: left,\n       right: right\n   }\n}\n\nMATCH_TERM\n= not:(NOT)? term:(MATCH) {\n term.is = not ? false : true\n return term\n}\n\n";
var tierGrammar = grammar.concat(_string_grammar.stringGrammar);
exports.tierGrammar = tierGrammar;
//# sourceMappingURL=tier_grammar.js.map