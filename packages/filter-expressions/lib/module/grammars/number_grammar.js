
import { initializer } from './common/initializer';
import { numbers } from './common/numbers';
import { whitespace } from './common/whitespace';
import { userAttribute } from './user_attribute_grammar';

const grammar = `

EXPRESSION
= LOGICAL_EXPRESSION / TERM

LOGICAL_EXPRESSION
= left:TERM _ type:LOGIC_SYMBOL _ right:EXPRESSION {
  return {
     type: type.toLowerCase(),
       left:left,
       right:right
   }
}

TERM
= USER_ATTRIBUTE / not:(NOT_SYMBOL SPACE)? term:(NULLS / COMP_INTERVALS / COMPARISON / TO / VALUE) {
  const is = not ? false : true
  return Object.assign({is:is}, term)
} / not:(NOT_SYMBOL)?  SPACE? term:(INTERVAL) {
  term.is = not ? false : true
  return term
}

VALUE
= value:number {
  return {
     type: '=',
     value: [value]
   }
}

COMP_INTERVALS = INTERVAL_COMP1 / INTERVAL_COMP2 / INTERVAL_COMP3 / INTERVAL_COMP4

/* Special rules for defining BETWEEN ranges using comparison operators with AND/OR */

/* >= 7 AND <80.44 becomes (7, 80.44) */
INTERVAL_COMP1 = ">" first:"="? _ n1:number _ "AND"i _ "<" second:"="? n2:number {
  const open = first ? "[" : "("
  const close = second ? "]" : ")"
  return {
    type: 'between',
    bounds: open + close,
    first: first,
    second: second,
    low: n1,
    high: n2
  }
}

/* <=80.44  AND    >.1  becomes (0.01, 80.44] */
INTERVAL_COMP2 = "<" first:"="? _ n1:number _ "AND"i _ ">" second:"="? n2:number {
  //const open = ["(", "["][first.length-1]
  //const close = [")", "]"][second.length-1]
  const open = second ? "[" : "("
  const close = first ? "]" : ")"
  return {
    type: 'between',
    bounds: open + close,
    low: n2,
    high: n1
  }
}

/* <= 7 OR >80.44 becomes [7, 80.44) */
INTERVAL_COMP3 = "<" first:"="?_ n1:number _ "OR"i _ ">" second:"="? n2:number {
  const open = first ? "[" : "("
  const close = second ? "]" : ")"
  return {
    type: 'between',
    bounds: open + close,
    low: n1,
    high: n2,
    is: false
  }
}

/* >=80.44 OR <.1 becomes (0.01, 80.44]*/
INTERVAL_COMP4 = ">" first:"="? _ n1:number _ "OR"i _ "<" second:"="? n2:number {
  const open = second ? "[" : "("
  const close = first ? "]" : ")"
  return {
    type: 'between',
    bounds: open + close,
    low: n2,
    high: n1,
    is: false
  }
}

INTERVAL
= open:OPEN _ left:(number) _ COMMA _ right:(number) _ close:CLOSE {
  return {
    type: 'between',
      bounds: open + close,
      low: left,
      high: right
  }
} / open:OPEN _ left:(number) _ COMMA _  close:CLOSE {
      const type = open == '(' ? '>' : '>='
      const value = [left]
      return {type:type, value:value}
} /  open:OPEN _  COMMA _ right:(number) _ close:CLOSE {
      const type = close == ')' ? '<' : '<='
      const value = [right]
      return {type:type, value:value}
 } / "(" _ "-inf" _ COMMA _ right:(number) _ close:CLOSE {
      const type = close == ')' ? '<' : '<='
      const value = [right]
      return {type:type, value:value}
 } / open:OPEN _ left:(number) _ COMMA _ "inf" _ ")" {
      const type = open == '(' ? '>' : '>='
      const value = [left]
      return {type:type, value:value}
 }

TO
  =  begin:$(number)? _ "to"i _ end:$(number)? _ {
    if(begin && end) {
       return {
           type: 'between',
           bounds: '[]',
           low: begin,
           high: end
       }
    }

     if(begin) {
       return {
          type: '>=',
          value: [begin.trim()]
       }
     }

     if(end) {
       return {
          type: '<=',
          value: [end.trim()]
       }
     }
     expected('number before or after to')
  }


COMPARISON
 = symbol:COMP_SYMBOL _ value:number {
   return {
      type: symbol,
      value: [value]
   }
 }

NULLS
 = type:("NULL"i) {
     return  {
       type: type.toLowerCase()
     }
   }

/* SYMBOLS */
LOGIC_SYMBOL = COMMA / OR { return "," }
OR = "OR"i
AND = "AND"i
COMMA = ","
OPEN = "(" / "["
CLOSE = ")" / "]"
NOT_SYMBOL = "NOT"i / "!=" / "<>" { return 'not' }
COMP_SYMBOL = ( COMP_G / COMP_L )
COMP_G = (GTE / GT)
GTE = ">="
GT = ">"
COMP_L = (LTE / LT)
LTE = "<="
LT = "<"
`;
export const numberGrammar = [initializer, grammar, userAttribute, numbers, whitespace].join('');
//# sourceMappingURL=number_grammar.js.map