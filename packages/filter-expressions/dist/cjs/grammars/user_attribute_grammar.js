"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAttribute = void 0;
var userAttribute = "\n//LOOKER USER_ATTRIBUTE GRAMMAR\n//MATCHES {{ _user_attributes['id'] }}\n\nUSER_ATTRIBUTE = UA_START _ attributeName:ATTRIBUTE _ UA_END {\n  return {type:'user_attribute', attributeName: attributeName, is: true}\n}\n\nUA_START = \"{{\" _ \"_user_attributes[\"\n\nUA_END = \"]\" _ \"}}\"\n\nUA_SINGLE_QUOTE = \"'\"\n\nUA_DOUBLE_QUOTE = \"\\\"\"\n\nATTRIBUTE = UA_SINGLE_QUOTE word:UA_WORD UA_SINGLE_QUOTE {\n  return word\n} / UA_DOUBLE_QUOTE word:UA_WORD  UA_DOUBLE_QUOTE {\n  return word\n}\n\nUA_WORD = chars:UA_CHARS+ {\n\treturn chars.join(\"\")\n    }\n\nUA_CHARS = [A-Za-z0-9_]\n\n";
exports.userAttribute = userAttribute;
//# sourceMappingURL=user_attribute_grammar.js.map