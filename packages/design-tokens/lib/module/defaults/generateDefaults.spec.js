

import { generateDefaults } from './generateDefaults';
import { componentSettingsDefaults } from './index';
describe('generateDefaults', () => {
  test('none', () => {
    const defaults = generateDefaults(componentSettingsDefaults);
    expect(defaults.brandAnimation).toEqual(true);
    expect(defaults.density).toEqual(0);
  });
  test('empty', () => {
    const defaults = generateDefaults(componentSettingsDefaults, {});
    expect(defaults.brandAnimation).toEqual(componentSettingsDefaults.brandAnimation);
    expect(defaults.density).toEqual(componentSettingsDefaults.density);
  });
  test('overwrite', () => {
    const defaults = generateDefaults(componentSettingsDefaults, {
      brandAnimation: false,
      density: -1
    });
    expect(defaults.brandAnimation).toEqual(false);
    expect(defaults.density).toEqual(-1);
  });
  test('overwrite externalLabel', () => {
    const defaults = generateDefaults(componentSettingsDefaults, {
      externalLabel: false
    });
    expect(defaults.brandAnimation).toEqual(true);
    expect(defaults.density).toEqual(0);
    expect(defaults.externalLabel).toEqual(false);
  });
});
//# sourceMappingURL=generateDefaults.spec.js.map