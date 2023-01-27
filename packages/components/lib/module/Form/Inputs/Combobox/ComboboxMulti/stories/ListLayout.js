

import React, { useState } from 'react';
import { Slider, Label } from '../../../..';
import { Card } from '../../../../../Card';
import { SpaceVertical } from '../../../../../Layout';
import { ComboboxMulti, ComboboxMultiOption, ComboboxMultiList, ComboboxMultiInput } from '../..';
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
  }, React.createElement(SpaceVertical, null, React.createElement(ComboboxMulti, null, React.createElement(ComboboxMultiInput, {
    placeholder: "width=500"
  }), React.createElement(ComboboxMultiList, {
    width: 500
  }, React.createElement(ComboboxMultiOption, {
    value: "Apples"
  }), React.createElement(ComboboxMultiOption, {
    value: "Oranges"
  }), React.createElement(ComboboxMultiOption, {
    value: "Grapes"
  }), React.createElement(ComboboxMultiOption, {
    value: "Bananas"
  }), React.createElement(ComboboxMultiOption, {
    value: "Pineapples"
  }))), React.createElement(ComboboxMulti, null, React.createElement(ComboboxMultiInput, {
    placeholder: "minWidth=420"
  }), React.createElement(ComboboxMultiList, {
    minWidth: 420
  }, React.createElement(ComboboxMultiOption, {
    value: "Apples"
  }), React.createElement(ComboboxMultiOption, {
    value: "Oranges"
  }), React.createElement(ComboboxMultiOption, {
    value: "Grapes"
  }), React.createElement(ComboboxMultiOption, {
    value: "Bananas"
  }), React.createElement(ComboboxMultiOption, {
    value: "Pineapples"
  }))))));
}
//# sourceMappingURL=ListLayout.js.map