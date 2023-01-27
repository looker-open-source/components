"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationGrammar = void 0;
var _initializer = require("./common/initializer");
var _numbers = require("./common/numbers");
var _whitespace = require("./common/whitespace");
var _user_attribute_grammar = require("./user_attribute_grammar");

var grammar = "EXPRESSION\n= CIRCLE / LOCATION / BOX / USER_ATTRIBUTE / NULLS / ANYWHERE\n\nANYWHERE = '' {\n\treturn {type:'anywhere'}\n}\n\nNULLS = NULL_RULE / NOTNULL\n\nNULL_RULE = NULL {\n\treturn {type: 'null'}\n}\n\nNOTNULL = (NOT _ NULL / \"-\"NULL) {\n\treturn {type: 'notnull'}\n}\n\nBOX\n= \"INSIDE\"i _ \"BOX\"i_ \"FROM\"i _ from:LOCATION _ \"to\"i _ to:LOCATION _ {\n\treturn {type:'box', lat: from.lat, lon: from.lon, lat1: to.lat, lon1: to.lon}\n}\n\nCIRCLE\n= !MINUS distance:DISTANCE _ unit:UNIT _ \"from\"i _ location:LOCATION {\n\treturn {type: 'circle', distance:distance, unit:unit, lat: location.lat, lon: location.lon }\n}\n\nLOCATION = lat:LAT _ COMMA _ lon:LON {\n\treturn { type: 'location', lat:lat, lon:lon }\n}\n\nDISTANCE = number {\n\tvar value = parseFloat(text())\n\tif(value < 0) {\n\t\texpected('a positive value')\n\t}\n\treturn value\n}\n\nUNIT = (METERS / FEET / KILOMETERS / MILES)\nMETERS = \"meters\"i\nFEET = \"feet\"i\nKILOMETERS = \"kilometers\"i\nMILES = \"miles\"i\nNULL = \"null\"i\nNOT = \"not\"i\nMINUS = \"-\"\n\nLAT = lat:number {\n\tvar value = parseFloat(text())\n\tif(value < -90 || value > 90) {\n\t\texpected('a number between -90 and 90')\n\t}\n\treturn value\n}\nLON = number {\n\tvar value = parseFloat(text())\n\tif(value < -180 || value > 180) {\n\t\texpected('a number between -180 and 180')\n\t}\n\treturn value\n}\nCOMMA = \",\"\n";
var locationGrammar = [_initializer.initializer, grammar, _user_attribute_grammar.userAttribute, _numbers.numbers, _whitespace.whitespace].join('');
exports.locationGrammar = locationGrammar;
//# sourceMappingURL=location_grammar.js.map