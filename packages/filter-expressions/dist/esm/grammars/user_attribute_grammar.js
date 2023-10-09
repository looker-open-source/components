export const userAttribute = `
//LOOKER USER_ATTRIBUTE GRAMMAR
//MATCHES {{ _user_attributes['id'] }}

USER_ATTRIBUTE = UA_START _ attributeName:ATTRIBUTE _ UA_END {
  return {type:'user_attribute', attributeName: attributeName, is: true}
}

UA_START = "{{" _ "_user_attributes["

UA_END = "]" _ "}}"

UA_SINGLE_QUOTE = "'"

UA_DOUBLE_QUOTE = "\\""

ATTRIBUTE = UA_SINGLE_QUOTE word:UA_WORD UA_SINGLE_QUOTE {
  return word
} / UA_DOUBLE_QUOTE word:UA_WORD  UA_DOUBLE_QUOTE {
  return word
}

UA_WORD = chars:UA_CHARS+ {
	return chars.join("")
    }

UA_CHARS = [A-Za-z0-9_]

`;
//# sourceMappingURL=user_attribute_grammar.js.map