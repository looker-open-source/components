

import { treeToString } from '../tree/tree_to_string';
import { userAttributeToString } from '../user_attribute/user_attribute_to_string';
const locationExactToString = ({
  lat,
  lon
}) => lat && lon ? `${lat}, ${lon}` : '';
const circleToString = ({
  distance,
  unit,
  lat,
  lon
}) => distance && unit && lat && lon ? `${distance} ${unit} from ${lat}, ${lon}` : '';
const boxToString = ({
  lon,
  lat,
  lon1,
  lat1
}) => lon && lat && lon1 && lat1 ? `inside box from ${lat}, ${lon} to ${lat1}, ${lon1}` : '';
const anyvalue = () => '';
const nullToString = () => 'null';
const notNullToString = () => '-null';
const filterToStringMap = {
  location: locationExactToString,
  circle: circleToString,
  box: boxToString,
  anyvalue,
  null: nullToString,
  notnull: notNullToString,
  user_attribute: userAttributeToString
};
const locationToExpression = item => {
  const toStringFunction = filterToStringMap[item.type];
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item)) || '';
};
export const locationToString = root => treeToString(root, locationToExpression);
//# sourceMappingURL=location_to_string.js.map