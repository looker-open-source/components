import { useTranslation } from '../../utils';
export const usePlaceholder = (value, validationMessage) => {
  const {
    t
  } = useTranslation('use_placeholder');
  const anyValue = t('any value');
  const placeholder = !value || value.length === 0 ? (validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.message) || anyValue : '';
  return {
    'aria-label': anyValue,
    placeholder
  };
};
//# sourceMappingURL=use_placeholder.js.map