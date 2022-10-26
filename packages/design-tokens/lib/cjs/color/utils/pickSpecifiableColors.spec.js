"use strict";

var _theme = require("../../theme");

var _pickSpecifiableColors = require("./pickSpecifiableColors");

describe('pickSpecifiableColors', function () {
  test('theme', function () {
    expect((0, _pickSpecifiableColors.pickSpecifiableColors)(_theme.theme.colors)).toMatchInlineSnapshot({}, "\n      Object {\n        \"background\": \"#FFFFFF\",\n        \"calculation\": \"#319220\",\n        \"critical\": \"#CC1F36\",\n        \"dimension\": \"#31689E\",\n        \"inform\": \"#0087e1\",\n        \"key\": \"#6C43E0\",\n        \"link\": \"#0059b2\",\n        \"measure\": \"#C2772E\",\n        \"pageBackground\": \"#FFFFFF\",\n        \"positive\": \"#24b25f\",\n        \"text\": \"#262D33\",\n        \"warn\": \"#FFA800\",\n      }\n    ");
  });
});
//# sourceMappingURL=pickSpecifiableColors.spec.js.map