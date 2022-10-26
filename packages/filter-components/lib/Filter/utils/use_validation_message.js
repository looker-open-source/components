import { useTranslation } from '../../utils';
import { ERROR_TYPE } from '../../constants';
export const useValidationMessage = (filterExpression, isRequired) => {
  const {
    t
  } = useTranslation('use_validation_message');
  return isRequired && !filterExpression ? {
    type: ERROR_TYPE,
    message: t('Value required')
  } : {};
};
//# sourceMappingURL=use_validation_message.js.map