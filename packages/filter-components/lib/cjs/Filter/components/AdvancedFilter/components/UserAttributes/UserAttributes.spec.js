"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _UserAttributes = require("./UserAttributes");

describe('User Attribute', function () {
  var testUserAttributes = {
    name: 'testAttributeName',
    label: 'label',
    rank: 1,
    value: 'value',
    user_id: '2',
    user_can_edit: true,
    value_is_hidden: false,
    user_attribute_id: '3',
    source: 'source',
    hidden_value_domain_whitelist: 'hidden value domain whitelist',
    can: {
      edit: true
    }
  };
  var testItem = {
    id: '4',
    type: 'anywhere',
    is: true,
    attributeName: 'testAttributeName'
  };

  var filterParamProps = function filterParamProps() {
    return {
      item: testItem,
      userAttributes: [testUserAttributes, {
        name: 'testAttributeName2',
        value: 'value2',
        label: 'label2'
      }],
      onChange: jest.fn()
    };
  };

  it('should render a User Attribute', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_UserAttributes.UserAttributes, filterParamProps()));
    expect(_react.screen.getByRole('textbox')).toHaveValue('label (value)');
  });
  it('should call userAttributeChange on change', function () {
    var props = filterParamProps();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_UserAttributes.UserAttributes, props));

    var selectInput = _react.screen.getByDisplayValue('label (value)');

    _react.fireEvent.click(selectInput);

    var attribute = _react.screen.getByText('label2 (value2)');

    _react.fireEvent.click(attribute);

    expect(props.onChange).toHaveBeenCalledWith('4', {
      attributeName: 'testAttributeName2',
      attributeValue: 'value2'
    });
  });
});
//# sourceMappingURL=UserAttributes.spec.js.map