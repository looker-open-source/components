"use strict";

var _utils = require("../utils");

var grammars = ['date', 'number', 'string', 'location'];
var userAttributeExpression = "{{ _user_attributes['id'] }}";
var ast = {
  type: 'user_attribute',
  attributeName: 'id',
  is: true
};
describe('User Attribute grammar can parse expressions', function () {
  it.each(grammars)('%s', function (grammar) {
    return expect((0, _utils.parseFilterExpression)(grammar, userAttributeExpression)).toMatchObject(ast);
  });
});
//# sourceMappingURL=user_attribute_grammar.spec.js.map