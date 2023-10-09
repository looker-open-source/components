import { dateGrammar, locationGrammar, numberGrammar, stringGrammar, tierGrammar } from '../grammars';
import { anyNumberItem, anyStringItem, anyValue, dateFilterTypes, locationFilterTypes, numberFilterTypes, stringFilterTypes, tierFilterTypes } from '../types';
import { dateFilterToString } from './date/date_filter_to_string';
import { describeDate } from './date/describe_date';
import { describeLocation } from './location/describe_location';
import { locationToString } from './location/location_to_string';
import { describeNumber } from './number/describe_number';
import { numberToString } from './number/number_to_string';
import { describeString } from './string/describe_string';
import { stringFilterToString } from './string/string_filter_to_string';
import { describeTier } from './tier/describe_tier';
import { tierFilterToString } from './tier/tier_filter_to_string';
import { numberTransform } from './transform/numberTransform';
import { stringTransform } from './transform/stringTransform';
const dateGrammarOptions = {
  grammar: dateGrammar,
  toString: dateFilterToString,
  describe: describeDate,
  anyvalue: anyValue,
  subTypes: dateFilterTypes
};
export const grammarsMap = {
  date: dateGrammarOptions,
  date_time: dateGrammarOptions,
  number: {
    grammar: numberGrammar,
    toString: numberToString,
    transform: numberTransform,
    describe: describeNumber,
    anyvalue: anyNumberItem,
    subTypes: numberFilterTypes
  },
  string: {
    grammar: stringGrammar,
    toString: stringFilterToString,
    transform: stringTransform,
    describe: describeString,
    anyvalue: anyStringItem,
    subTypes: stringFilterTypes
  },
  tier: {
    grammar: tierGrammar,
    toString: tierFilterToString,
    transform: stringTransform,
    describe: describeTier,
    anyvalue: anyStringItem,
    subTypes: tierFilterTypes
  },
  location: {
    grammar: locationGrammar,
    toString: locationToString,
    describe: describeLocation,
    anyvalue: anyValue,
    subTypes: locationFilterTypes
  }
};
export const typeToGrammar = type => grammarsMap[type] || {};
//# sourceMappingURL=type_to_grammar.js.map