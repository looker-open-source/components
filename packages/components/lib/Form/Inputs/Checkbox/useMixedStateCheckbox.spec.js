import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Label } from '../../Label';
import { Checkbox } from './Checkbox';
import { useMixedStateCheckbox } from './useMixedStateCheckbox';

const FormDemo = () => {
  const [parentState, setParentState] = useState(false);
  const [appleState, setAppleState] = useState(false);
  const [bananaState, setBananaState] = useState(false);

  const handleAppleChange = () => setAppleState(!appleState);

  const handleBananaChange = () => setBananaState(!bananaState);

  const fruitTree = {
    parent: {
      setState: setParentState,
      state: parentState
    },
    children: [{
      setState: setAppleState,
      state: appleState
    }, {
      setState: setBananaState,
      state: bananaState
    }]
  };
  const handleParentChange = useMixedStateCheckbox(fruitTree);
  return React.createElement(React.Fragment, null, React.createElement(Checkbox, {
    id: "fruit-parent",
    name: "fruit",
    value: "all-fruit",
    onChange: handleParentChange,
    checked: parentState
  }), React.createElement(Label, {
    htmlFor: "fruit-parent",
    fontSize: "medium"
  }, "All Fruit"), React.createElement(Checkbox, {
    id: "fruit-apple",
    name: "fruit",
    value: "apple",
    onChange: handleAppleChange,
    checked: appleState
  }), React.createElement(Label, {
    htmlFor: "fruit-apple",
    fontSize: "large"
  }, "Apple"), React.createElement(Checkbox, {
    id: "fruit-banana",
    name: "fruit",
    value: "apple",
    onChange: handleBananaChange,
    checked: bananaState
  }), React.createElement(Label, {
    htmlFor: "fruit-banana",
    fontSize: "large"
  }, "Banana"));
};

test('Parent element receives `checked="mixed"` state when some (but not all) children are checked', () => {
  renderWithTheme(React.createElement(FormDemo, null));
  const parent = screen.getByLabelText('All Fruit');
  const child = screen.getByLabelText('Apple');
  const parentAttr = parent.attributes.getNamedItem('aria-checked');
  const childAttr = child.attributes.getNamedItem('aria-checked');
  expect(parentAttr.value).toEqual('false');
  expect(childAttr.value).toEqual('false');
  fireEvent.click(child);
  expect(parentAttr.value).toEqual('mixed');
  expect(childAttr.value).toEqual('true');
});
test('Parent element receives `checked="true"` state all children are checked', () => {
  renderWithTheme(React.createElement(FormDemo, null));
  const parent = screen.getByLabelText('All Fruit');
  const child1 = screen.getByLabelText('Apple');
  const child2 = screen.getByLabelText('Banana');
  const parentAttr = parent.attributes.getNamedItem('aria-checked');
  const child1Attr = child1.attributes.getNamedItem('aria-checked');
  const child2Attr = child2.attributes.getNamedItem('aria-checked');
  expect(parentAttr.value).toEqual('false');
  expect(child1Attr.value).toEqual('false');
  expect(child2Attr.value).toEqual('false');
  fireEvent.click(child1);
  fireEvent.click(child2);
  expect(parentAttr.value).toEqual('true');
  expect(child1Attr.value).toEqual('true');
  expect(child2Attr.value).toEqual('true');
});
test('Clicking Parent element toggles all children', () => {
  renderWithTheme(React.createElement(FormDemo, null));
  const parent = screen.getByLabelText('All Fruit');
  const child1 = screen.getByLabelText('Apple');
  const child2 = screen.getByLabelText('Banana');
  const parentAttr = parent.attributes.getNamedItem('aria-checked');
  const child1Attr = child1.attributes.getNamedItem('aria-checked');
  const child2Attr = child2.attributes.getNamedItem('aria-checked');
  expect(parentAttr.value).toEqual('false');
  expect(child1Attr.value).toEqual('false');
  expect(child2Attr.value).toEqual('false');
  fireEvent.click(parent);
  expect(parentAttr.value).toEqual('true');
  expect(child1Attr.value).toEqual('true');
  expect(child2Attr.value).toEqual('true');
});
//# sourceMappingURL=useMixedStateCheckbox.spec.js.map