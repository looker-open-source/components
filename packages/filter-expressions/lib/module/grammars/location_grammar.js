
import { initializer } from './common/initializer';
import { numbers } from './common/numbers';
import { whitespace } from './common/whitespace';
import { userAttribute } from './user_attribute_grammar';

const grammar = `EXPRESSION
= CIRCLE / LOCATION / BOX / USER_ATTRIBUTE / NULLS / ANYWHERE

ANYWHERE = '' {
	return {type:'anywhere'}
}

NULLS = NULL_RULE / NOTNULL

NULL_RULE = NULL {
	return {type: 'null'}
}

NOTNULL = (NOT _ NULL / "-"NULL) {
	return {type: 'notnull'}
}

BOX
= "INSIDE"i _ "BOX"i_ "FROM"i _ from:LOCATION _ "to"i _ to:LOCATION _ {
	return {type:'box', lat: from.lat, lon: from.lon, lat1: to.lat, lon1: to.lon}
}

CIRCLE
= !MINUS distance:DISTANCE _ unit:UNIT _ "from"i _ location:LOCATION {
	return {type: 'circle', distance:distance, unit:unit, lat: location.lat, lon: location.lon }
}

LOCATION = lat:LAT _ COMMA _ lon:LON {
	return { type: 'location', lat:lat, lon:lon }
}

DISTANCE = number {
	var value = parseFloat(text())
	if(value < 0) {
		expected('a positive value')
	}
	return value
}

UNIT = (METERS / FEET / KILOMETERS / MILES)
METERS = "meters"i
FEET = "feet"i
KILOMETERS = "kilometers"i
MILES = "miles"i
NULL = "null"i
NOT = "not"i
MINUS = "-"

LAT = lat:number {
	var value = parseFloat(text())
	if(value < -90 || value > 90) {
		expected('a number between -90 and 90')
	}
	return value
}
LON = number {
	var value = parseFloat(text())
	if(value < -180 || value > 180) {
		expected('a number between -180 and 180')
	}
	return value
}
COMMA = ","
`;
export const locationGrammar = [initializer, grammar, userAttribute, numbers, whitespace].join('');
//# sourceMappingURL=location_grammar.js.map