
import { escapeParameterValue } from './escape_parameter_value';
describe('Tier filter values are escaped', () => {
  it('escapes starting dash', () => {
    const result = escapeParameterValue('-no label');
    expect(result).toBe('^-no label');
  });
  it('escapes sub_region', () => {
    const result = escapeParameterValue('sub_region');
    expect(result).toBe('sub^_region');
  });
});
//# sourceMappingURL=escape_parameter_values.spec.js.map