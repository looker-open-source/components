

import React, { useState } from 'react';
import { Slider, Label } from '../../../..';
import { Card } from '../../../../../Card';
import { SpaceVertical } from '../../../../../Layout';
import { Combobox, ComboboxOption, ComboboxList, ComboboxInput } from '../..';
export default function ListLayout() {
  const [containerWidth, setContainerWidth] = useState(400);
  const handleWidthChange = e => {
    setContainerWidth(parseInt(e.currentTarget.value, 10));
  };
  return React.createElement(SpaceVertical, {
    p: "u5"
  }, React.createElement(Label, null, "Move slider to adjust container width:"), React.createElement(Slider, {
    min: 100,
    max: 1000,
    step: 10,
    value: containerWidth,
    onChange: handleWidthChange,
    width: 400
  }), React.createElement(Card, {
    p: 20,
    width: containerWidth + 40
  }, React.createElement(SpaceVertical, null, React.createElement(Combobox, null, React.createElement(ComboboxInput, {
    placeholder: "width=500"
  }), React.createElement(ComboboxList, {
    width: 500
  }, React.createElement(ComboboxOption, {
    value: "Apples"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  }))), React.createElement(Combobox, null, React.createElement(ComboboxInput, {
    placeholder: "minWidth=420"
  }), React.createElement(ComboboxList, {
    minWidth: 420
  }, React.createElement(ComboboxOption, {
    value: "Apples"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  }))))));
}
//# sourceMappingURL=ListLayout.js.map