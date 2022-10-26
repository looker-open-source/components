import React, { useState } from 'react';
import { Slider, Label, FieldSelect, SelectMulti } from '../../..';
import { Card } from '../../../../Card';
import { SpaceVertical } from '../../../../Layout';
import { Heading } from '../../../../Text';
import { Combobox, ComboboxMulti, ComboboxMultiInput, ComboboxMultiList, ComboboxMultiOption, ComboboxOption, ComboboxList, ComboboxInput } from '..';
const options = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}, {
  label: 'Pineapples',
  value: '4'
}, {
  label: 'Kiwis',
  value: '5'
}];
export const ListLayoutDemo = () => {
  const [containerWidth, setContainerWidth] = useState(400);

  const handleWidthChange = e => {
    setContainerWidth(parseInt(e.currentTarget.value, 10));
  };

  return React.createElement(SpaceVertical, {
    p: "u5"
  }, React.createElement(Heading, null, "ComboboxList width override"), React.createElement(Label, null, "Move slider to adjust container width:"), React.createElement(Slider, {
    min: 100,
    max: 1000,
    step: 10,
    value: containerWidth,
    onChange: handleWidthChange,
    width: 400
  }), React.createElement(Card, {
    p: 20,
    width: containerWidth + 40
  }, React.createElement(SpaceVertical, null, React.createElement(Heading, null, "Combobox"), React.createElement(Combobox, null, React.createElement(ComboboxInput, {
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
  }))), React.createElement(Heading, null, "ComboboxMulti"), React.createElement(Label, null, "Try shrinking down the window width with the list open:"), React.createElement(ComboboxMulti, null, React.createElement(ComboboxMultiInput, {
    placeholder: "maxWidth=800 width=calc(100vw - 50px)"
  }), React.createElement(ComboboxMultiList, {
    maxWidth: 800,
    width: "calc(100vw - 50px)"
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
    placeholder: "maxHeight={100}"
  }), React.createElement(ComboboxMultiList, {
    maxHeight: 100
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
  }))), React.createElement(Heading, null, "Select"), React.createElement(FieldSelect, {
    label: "width=500",
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1",
    listLayout: {
      width: 500
    }
  }), React.createElement(FieldSelect, {
    label: "minWidth=420",
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1",
    listLayout: {
      minWidth: 420
    }
  }), React.createElement(Heading, null, "SelectMulti"), React.createElement(Label, null, "maxWidth=800 width=calc(100vw - 50px)"), React.createElement(SelectMulti, {
    options: options,
    "aria-label": "Fruits",
    defaultValues: ['1'],
    listLayout: {
      maxWidth: 800,
      width: 'calc(100vw - 50px)'
    }
  }), React.createElement(Label, null, "maxHeight=100"), React.createElement(SelectMulti, {
    options: options,
    "aria-label": "Fruits",
    defaultValues: ['1'],
    listLayout: {
      maxHeight: 100
    }
  }))));
};
ListLayoutDemo.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=ListLayout.js.map