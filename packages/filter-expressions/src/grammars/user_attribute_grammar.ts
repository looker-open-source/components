/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
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

`
