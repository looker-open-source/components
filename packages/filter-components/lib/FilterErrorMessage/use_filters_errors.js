import some from 'lodash/some';
import { getExpressionType, getUserAttributeMatchingTypeAndExpression } from '@looker/filter-expressions';
import { useTranslation } from '../utils';
import { ERROR_TYPE } from '../constants';
export const useFiltersErrors = (filters, options = {
  userAttributes: [],
  useLongMessageForm: false
}) => {
  const {
    t
  } = useTranslation('use_filters_errors');
  let result = {};
  some(filters, filter => {
    if (filter.isRequired && !filter.expression) {
      result = {
        type: ERROR_TYPE,
        message: t('Selection required')
      };
      return true;
    }

    if (hasAtLeastOneMissingUserAttributeValue(filter, options === null || options === void 0 ? void 0 : options.userAttributes)) {
      const message = options !== null && options !== void 0 && options.useLongMessageForm ? t('No value is set for your user attribute') : t('Invalid value');
      result = {
        type: ERROR_TYPE,
        message
      };
      return true;
    }

    return false;
  });
  return result;
};

const hasAtLeastOneMissingUserAttributeValue = (filter, userAttributes) => {
  const expressionType = filter.expressionType || getExpressionType({
    type: filter.type,
    field: filter.field || undefined
  });
  const attribute = getUserAttributeMatchingTypeAndExpression(expressionType, filter.expression, userAttributes);
  return !!attribute && !attribute.value;
};
//# sourceMappingURL=use_filters_errors.js.map