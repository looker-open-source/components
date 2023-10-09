"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = void 0;
var numbers = "\n/* Common numbers parsing expressions */\n\nnumber \"number\"\n = (minus? int frac? exp?) { return getNumberFromString(text()); } / (minus? int? frac exp?) { return getNumberFromString(text()); } \n\npositive \"positive\"\n = int frac? exp? { return getNumberFromString(text()); }\n\npositiveInteger \"positive integer\"\n= int { return getNumberFromString(text()); }\n\ninteger \"integer\"\n = minus? int { return getNumberFromString(text()); }\n\nnot = \"not\"i\ndecimal_point = \".\"\ndigit1_9      = [1-9]\ne             = [eE]\nexp           = e (minus / plus)? DIGIT+\nfrac          = decimal_point DIGIT+\nint           = zero / (digit1_9 DIGIT*)\nminus         = \"-\"\nplus          = \"+\"\nzero          = \"0\"\nDIGIT  = [0-9]\n";
exports.numbers = numbers;
//# sourceMappingURL=numbers.js.map