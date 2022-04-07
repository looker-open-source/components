/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { whitespace } from './common/whitespace'
import { userAttribute } from './user_attribute_grammar'

// String Grammar
// ==========================
//
// Accepts expressions like "FOO", "FOO,BAR" "%FOO%" and computes their value.

const grammar = `ROOT
= EXPRESSION / EMPTY_STRING

EMPTY_STRING = '' {
    return {
      type: 'match',
      value: [],
      is: true
    }
  }

EXPRESSION
= LIST / TERM

LIST
= left:TERM COMMA right:EXPRESSION {
 return {
     type: ',',
       left: left,
       right: right
   }
}

TERM
= USER_ATTRIBUTE / not:(NOT)? term:(PCT / KEYWORDS / MATCH) {
    term.is = not ? false : true
    return term
   }

KEYWORDS = ("EMPTY" / "empty") {
       return {
           type: 'blank',
       }
   }
   / ("NULL" / "null") {
       return {
           type: 'null',
       }
   }

MATCH
   = quotation_mark sequence:(char / PCT_SYMBOL / COMMA / UNDERSCORE / CARET)+ quotation_mark {
          return {
              type:'match',
              value: [sequence.join('')]
          }
      }
      / sequence:raw_string {
       return {
           type:'match',
           value: [sequence]
       }
   }

PCT
=  CONTAINS / STARTS_WITH / ENDS_WITH / OTHER

CONTAINS
 = PCT_SYMBOL value:string PCT_SYMBOL !(string / PCT_SYMBOL / UNDERSCORE)  {
     return {
         type: 'contains',
         value: [value]
       }
   }

STARTS_WITH
  = value:string PCT_SYMBOL !(string / PCT_SYMBOL / UNDERSCORE) {
 		return {
         type: 'startsWith',
         value: [value]
     }
 }

ENDS_WITH
  =  PCT_SYMBOL value:string !(PCT_SYMBOL / UNDERSCORE) {
 return {
        type: 'endsWith',
        value: [value]
    }
}

OTHER = value: $(string* (PCT_SYMBOL / UNDERSCORE) string*)+ {
	return {
    	type: 'other',
        value: [value]
    }
}

NOT = '-'

COMMA = COMMA_SYMBOL

raw_string "string"
 = str:char_sequence { return str }

string "string"
 = str:char_sequence { return str ? str.trim():str}
/* ----- 7. Strings ----- */

char_sequence "string"
 = quotation_mark chars:(valid_char / escaped_quotation_mark)* quotation_mark {
     return '"' + chars.join("") + '"'
   }
   /
   chars:char+ {return chars.join('') }

char "character"
 =  ESCAPE_CARET
 / escape symbol:SYMBOLS { return symbol}
 / escape
   sequence:(
         '"'
     / "\\\\"
     / "/"
     / "b" { return "\\b"; }
     / "f" { return "\\f"; }
     / "n" { return "\\n"; }
     / "r" { return "\\r"; }
     / "t" { return "\\t"; }
     / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
         return String.fromCharCode(parseInt(digits, 16));
       }
   )
   { return sequence }

   / unescaped
   / NOT_SYMBOL

/* Returns a single space for double escaped space at the end, or before a comma
to reverse escapeWithDoubleLastEscape */
ESCAPE_CARET
 = CARET (SPACE_SYMBOL ! FOLLOWING_SPACE_END / ESCAPED_DOUBLE_SPACE) {
     return " "
   }
   /
   CARET symbol:(PCT_SYMBOL / UNDERSCORE / COMMA_SYMBOL / CARET / NOT_SYMBOL) {
     return symbol
   }

SYMBOLS = PCT_SYMBOL / COMMA_SYMBOL / NOT_SYMBOL / UNDERSCORE / CARET
PCT_SYMBOL 		        = '%'
UNDERSCORE 		        = '_'
COMMA_SYMBOL   	        = ","
NOT_SYMBOL	  	        = "-"
SPACE_SYMBOL            = " "
FOLLOWING_SPACE_END     = "^ " (&COMMA_SYMBOL / !.)
ESCAPED_DOUBLE_SPACE    = " ^ "
CARET 	   		        = "^"
escape         	        = "\\\\"
escaped_quotation_mark  = '\\\\"'
quotation_mark 	        = '"'
unescaped      	        = !SYMBOLS char:char_range { return char;}
valid_char              = char:char_range { return char;}
char_range              = [^\\0-\\x1F\\x22\\x5C]
HEXDIG                  = [0-9a-f]i
`

export const stringGrammar = grammar.concat(userAttribute, whitespace)
