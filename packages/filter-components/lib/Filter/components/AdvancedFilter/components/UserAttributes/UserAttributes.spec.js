import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { UserAttributes } from './UserAttributes';
describe('User Attribute', () => {
  const testUserAttributes = {
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
  const testItem = {
    id: '4',
    type: 'anywhere',
    is: true,
    attributeName: 'testAttributeName'
  };

  const filterParamProps = () => ({
    item: testItem,
    userAttributes: [testUserAttributes, {
      name: 'testAttributeName2',
      value: 'value2',
      label: 'label2'
    }],
    onChange: jest.fn()
  });

  it('should render a User Attribute', () => {
    renderWithTheme(React.createElement(UserAttributes, filterParamProps()));
    expect(screen.getByRole('textbox')).toHaveValue('label (value)');
  });
  it('should call userAttributeChange on change', () => {
    const props = filterParamProps();
    renderWithTheme(React.createElement(UserAttributes, props));
    const selectInput = screen.getByDisplayValue('label (value)');
    fireEvent.click(selectInput);
    const attribute = screen.getByText('label2 (value2)');
    fireEvent.click(attribute);
    expect(props.onChange).toHaveBeenCalledWith('4', {
      attributeName: 'testAttributeName2',
      attributeValue: 'value2'
    });
  });
});
//# sourceMappingURL=UserAttributes.spec.js.map