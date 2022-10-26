import { ERROR_TYPE } from '../../constants';
import { useValidationMessage } from '.';
jest.mock('@looker/i18n', () => ({
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
describe('useValidationMessage', () => {
  describe('Required filter', () => {
    it('should error if required filter is on and there is no value', () => {
      expect(useValidationMessage('', true)).toEqual({
        type: ERROR_TYPE,
        message: 'Value required'
      });
    });
    it('should not error if required filter is off and there is no value', () => {
      expect(useValidationMessage('', false)).toEqual({});
    });
    it('should not error if required filter is on and there is a value', () => {
      expect(useValidationMessage('value', true)).toEqual({});
    });
  });
});
//# sourceMappingURL=use_validation_message.spec.js.map