"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeToGrammar = exports.grammarsMap = void 0;
var _grammars = require("../grammars");
var _types = require("../types");
var _date_filter_to_string = require("./date/date_filter_to_string");
var _describe_date = require("./date/describe_date");
var _describe_location = require("./location/describe_location");
var _location_to_string = require("./location/location_to_string");
var _describe_number = require("./number/describe_number");
var _number_to_string = require("./number/number_to_string");
var _describe_string = require("./string/describe_string");
var _string_filter_to_string = require("./string/string_filter_to_string");
var _describe_tier = require("./tier/describe_tier");
var _tier_filter_to_string = require("./tier/tier_filter_to_string");
var _numberTransform = require("./transform/numberTransform");
var _stringTransform = require("./transform/stringTransform");

var dateGrammarOptions = {
  grammar: _grammars.dateGrammar,
  toString: _date_filter_to_string.dateFilterToString,
  describe: _describe_date.describeDate,
  anyvalue: _types.anyValue,
  subTypes: _types.dateFilterTypes
};
var grammarsMap = {
  date: dateGrammarOptions,
  date_time: dateGrammarOptions,
  number: {
    grammar: _grammars.numberGrammar,
    toString: _number_to_string.numberToString,
    transform: _numberTransform.numberTransform,
    describe: _describe_number.describeNumber,
    anyvalue: _types.anyNumberItem,
    subTypes: _types.numberFilterTypes
  },
  string: {
    grammar: _grammars.stringGrammar,
    toString: _string_filter_to_string.stringFilterToString,
    transform: _stringTransform.stringTransform,
    describe: _describe_string.describeString,
    anyvalue: _types.anyStringItem,
    subTypes: _types.stringFilterTypes
  },
  tier: {
    grammar: _grammars.tierGrammar,
    toString: _tier_filter_to_string.tierFilterToString,
    transform: _stringTransform.stringTransform,
    describe: _describe_tier.describeTier,
    anyvalue: _types.anyStringItem,
    subTypes: _types.tierFilterTypes
  },
  location: {
    grammar: _grammars.locationGrammar,
    toString: _location_to_string.locationToString,
    describe: _describe_location.describeLocation,
    anyvalue: _types.anyValue,
    subTypes: _types.locationFilterTypes
  }
};
exports.grammarsMap = grammarsMap;
var typeToGrammar = function typeToGrammar(type) {
  return grammarsMap[type] || {};
};
exports.typeToGrammar = typeToGrammar;
//# sourceMappingURL=type_to_grammar.js.map