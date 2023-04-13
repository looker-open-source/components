

import { theme } from '../../theme';
import { pickSpecifiableColors } from './pickSpecifiableColors';
describe('pickSpecifiableColors', () => {
  test('theme', () => {
    expect(pickSpecifiableColors(theme.colors)).toMatchInlineSnapshot({}, `
      Object {
        "background": "#FFFFFF",
        "calculation": "#319220",
        "critical": "#CC1F36",
        "dimension": "#31689E",
        "inform": "#0087e1",
        "key": "#6C43E0",
        "link": "#0059b2",
        "measure": "#C2772E",
        "pageBackground": "#FFFFFF",
        "positive": "#24b25f",
        "text": "#262D33",
        "warn": "#FFA800",
      }
    `);
  });
});
//# sourceMappingURL=pickSpecifiableColors.spec.js.map