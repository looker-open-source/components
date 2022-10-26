let _ = t => t,
    _t;

import { isScrollable } from './useOptionScroll';
describe('isScrollable', () => {
  test.each(_t || (_t = _`
    rootScrollHeight | rootClientHeight | expected
    ${0}           | ${0}           | ${0}
    ${0}           | ${0}           | ${0}
    ${0}             | ${0}             | ${0}
  `), 300, 200, true, 200, 200, false, 0, 0, false)(`scrollable=$expected`, ({
    rootScrollHeight,
    rootClientHeight,
    expected
  }) => {
    const grandParent = {
      clientHeight: rootClientHeight,
      parentElement: null,
      scrollHeight: rootScrollHeight
    };
    const parent = {
      clientHeight: 200,
      parentElement: grandParent,
      scrollHeight: 200
    };
    const child = {
      clientHeight: 100,
      parentElement: parent,
      scrollHeight: 100
    };
    expect(isScrollable(child)).toEqual(expected);
  });
});
//# sourceMappingURL=useOptionScroll.spec.js.map