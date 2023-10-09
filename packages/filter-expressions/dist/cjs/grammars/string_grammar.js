"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringGrammar = void 0;
var _whitespace = require("./common/whitespace");
var _user_attribute_grammar = require("./user_attribute_grammar");
var grammar = "ROOT\n= EXPRESSION / EMPTY_STRING\n\nEMPTY_STRING = '' {\n    return {\n      type: 'match',\n      value: [],\n      is: true\n    }\n  }\n\nEXPRESSION\n= LIST / TERM\n\nLIST\n= left:TERM COMMA right:EXPRESSION {\n return {\n     type: ',',\n       left: left,\n       right: right\n   }\n}\n\nTERM\n= USER_ATTRIBUTE / not:(NOT)? term:(PCT / KEYWORDS / MATCH) {\n    term.is = not ? false : true\n    return term\n   }\n\nKEYWORDS = (\"EMPTY\" / \"empty\") {\n       return {\n           type: 'blank',\n       }\n   }\n   / (\"NULL\" / \"null\") {\n       return {\n           type: 'null',\n       }\n   }\n\nMATCH\n   = quotation_mark sequence:(char / PCT_SYMBOL / COMMA / UNDERSCORE / CARET)+ quotation_mark {\n          return {\n              type:'match',\n              value: [sequence.join('')]\n          }\n      }\n      / sequence:raw_string {\n       return {\n           type:'match',\n           value: [sequence]\n       }\n   }\n\nPCT\n=  CONTAINS / STARTS_WITH / ENDS_WITH / OTHER\n\nCONTAINS\n = PCT_SYMBOL value:string PCT_SYMBOL !(string / PCT_SYMBOL / UNDERSCORE)  {\n     return {\n         type: 'contains',\n         value: [value]\n       }\n   }\n\nSTARTS_WITH\n  = value:string PCT_SYMBOL !(string / PCT_SYMBOL / UNDERSCORE) {\n \t\treturn {\n         type: 'startsWith',\n         value: [value]\n     }\n }\n\nENDS_WITH\n  =  PCT_SYMBOL value:string !(PCT_SYMBOL / UNDERSCORE) {\n return {\n        type: 'endsWith',\n        value: [value]\n    }\n}\n\nOTHER = value: $(string* (PCT_SYMBOL / UNDERSCORE) string*)+ {\n\treturn {\n    \ttype: 'other',\n        value: [value]\n    }\n}\n\nNOT = '-'\n\nCOMMA = COMMA_SYMBOL\n\nraw_string \"string\"\n = str:char_sequence { return str }\n\nstring \"string\"\n = str:char_sequence { return str ? str.trim():str}\n/* ----- 7. Strings ----- */\n\nchar_sequence \"string\"\n = quotation_mark chars:(valid_char / escaped_quotation_mark)* quotation_mark {\n     return '\"' + chars.join(\"\") + '\"'\n   }\n   /\n   chars:char+ {return chars.join('') }\n\nchar \"character\"\n =  ESCAPE_CARET\n / escape symbol:SYMBOLS { return symbol}\n / escape\n   sequence:(\n         '\"'\n     / \"\\\\\"\n     / \"/\"\n     / \"b\" { return \"\\b\"; }\n     / \"f\" { return \"\\f\"; }\n     / \"n\" { return \"\\n\"; }\n     / \"r\" { return \"\\r\"; }\n     / \"t\" { return \"\\t\"; }\n     / \"u\" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {\n         return String.fromCharCode(parseInt(digits, 16));\n       }\n   )\n   { return sequence }\n\n   / unescaped\n   / NOT_SYMBOL\n\n/* Returns a single space for double escaped space at the end, or before a comma\nto reverse escapeWithDoubleLastEscape */\nESCAPE_CARET\n = CARET (SPACE_SYMBOL ! FOLLOWING_SPACE_END / ESCAPED_DOUBLE_SPACE) {\n     return \" \"\n   }\n   /\n   CARET symbol:(PCT_SYMBOL / UNDERSCORE / COMMA_SYMBOL / CARET / NOT_SYMBOL) {\n     return symbol\n   }\n\nSYMBOLS = PCT_SYMBOL / COMMA_SYMBOL / NOT_SYMBOL / UNDERSCORE / CARET\nPCT_SYMBOL \t\t        = '%'\nUNDERSCORE \t\t        = '_'\nCOMMA_SYMBOL   \t        = \",\"\nNOT_SYMBOL\t  \t        = \"-\"\nSPACE_SYMBOL            = \" \"\nFOLLOWING_SPACE_END     = \"^ \" (&COMMA_SYMBOL / !.)\nESCAPED_DOUBLE_SPACE    = \" ^ \"\nCARET \t   \t\t        = \"^\"\nescape         \t        = \"\\\\\"\nescaped_quotation_mark  = '\\\\\"'\nquotation_mark \t        = '\"'\nunescaped      \t        = !SYMBOLS char:char_range { return char;}\nvalid_char              = char:char_range { return char;}\nchar_range              = [^\\0-\\x1F\\x22\\x5C]\nHEXDIG                  = [0-9a-f]i\n";
var stringGrammar = grammar.concat(_user_attribute_grammar.userAttribute, _whitespace.whitespace);
exports.stringGrammar = stringGrammar;
//# sourceMappingURL=string_grammar.js.map