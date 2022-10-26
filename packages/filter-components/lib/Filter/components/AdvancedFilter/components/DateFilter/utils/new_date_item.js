import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value", "unit"];
import { sanitizeDate } from '@looker/filter-expressions';
export const newDateItem = _ref => {
  let {
    value,
    unit
  } = _ref,
      restItem = _objectWithoutProperties(_ref, _excluded);

  return sanitizeDate(restItem);
};
//# sourceMappingURL=new_date_item.js.map