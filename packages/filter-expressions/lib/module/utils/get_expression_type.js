
import { Category } from '@looker/sdk';
const getTimeframeExpressionType = fieldType => {
  if (!fieldType) return 'date';
  const isDateTime = ['date_time', 'hour', 'minute', 'second'].some(timeString => {
    return fieldType.indexOf(timeString) > -1;
  });
  if (isDateTime) return 'date_time';
  return 'date';
};

export const getExpressionTypeFromField = field => {
  if ((field === null || field === void 0 ? void 0 : field.category) === Category.parameter && (field === null || field === void 0 ? void 0 : field.type) === 'number') {
    return field.type;
  }
  if (field.enumerations) {
    return 'tier';
  }
  if (field.is_numeric) {
    return 'number';
  }
  if (field.is_timeframe) {
    return getTimeframeExpressionType(field.type);
  }
  if (field.type === 'location' || field.type === 'location_bin_level') {
    return 'location';
  }
  return 'string';
};

export const getExpressionType = filter => {
  var _filter$type;
  if (filter.field) {
    return getExpressionTypeFromField(filter.field);
  }
  const filterExpressionMap = {
    number_filter: 'number',
    string_filter: 'string',
    date_filter: 'date',
    field_filter: 'string'
  };
  return filterExpressionMap[(_filter$type = filter.type) !== null && _filter$type !== void 0 ? _filter$type : 'field_filter'];
};
//# sourceMappingURL=get_expression_type.js.map