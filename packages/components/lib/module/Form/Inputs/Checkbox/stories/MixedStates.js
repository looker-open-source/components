

import React, { useState } from 'react';
import { UnorderedList } from '../../../../UnorderedList';
import { FieldCheckbox } from '../../../Fields';
import { useMixedStateCheckbox } from '../useMixedStateCheckbox';
export default function MixedStates() {
  const [parentState, setParentState] = useState(false);
  const [appleState, setAppleState] = useState(false);
  const [bananaState, setBananaState] = useState(true);
  const handleAppleChange = () => setAppleState(!appleState);
  const handleBananaChange = () => setBananaState(!bananaState);

  const fruitTree = {
    children: [{
      setState: setAppleState,
      state: appleState
    }, {
      setState: setBananaState,
      state: bananaState
    }],
    parent: {
      setState: setParentState,
      state: parentState
    }
  };

  const handleParentChange = useMixedStateCheckbox(fruitTree);
  return React.createElement(UnorderedList, null, React.createElement("li", null, React.createElement(FieldCheckbox, {
    label: "All Fruit",
    value: "all-fruit",
    onChange: handleParentChange,
    checked: parentState
  })), React.createElement("li", null, React.createElement(UnorderedList, {
    pl: "u5"
  }, React.createElement("li", null, React.createElement(FieldCheckbox, {
    label: "\uD83C\uDF4F",
    value: "apple",
    onChange: handleAppleChange,
    checked: appleState
  })), React.createElement("li", null, React.createElement(FieldCheckbox, {
    value: "apple",
    onChange: handleBananaChange,
    checked: bananaState,
    label: "\uD83C\uDF4C"
  })))));
}
//# sourceMappingURL=MixedStates.js.map