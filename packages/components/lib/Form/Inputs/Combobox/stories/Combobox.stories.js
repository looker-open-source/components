import React, { useEffect, useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Combobox, ComboboxMulti, ComboboxMultiInput, ComboboxMultiList, ComboboxMultiOption, ComboboxOption, ComboboxList, ComboboxInput } from '..';
import { Button, Heading, Paragraph, Space, SpaceVertical } from '../../../..';
export { ListLayoutDemo } from './ListLayout';

const CustomIndicator = ({
  isActive,
  isSelected
}) => {
  let indicator;

  if (isSelected) {
    indicator = '>>';
  } else if (isActive) {
    indicator = '>';
  } else {
    indicator = '';
  }

  return React.createElement(React.Fragment, null, indicator);
};

export const ComboboxDemo = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      window.clearTimeout(t);
    };
  }, []);
  const [option, setOption] = useState({
    value: 'Bananas'
  });

  const handleChange = newOption => {
    setOption(newOption);
  };

  const [options, setOptions] = useState([{
    value: 'Bananas'
  }]);

  const handleMultiChange = newOptions => {
    setOptions(newOptions);
  };

  return React.createElement(Space, {
    p: "u5",
    align: "start"
  }, React.createElement(SpaceVertical, null, React.createElement(Heading, null, "Controlled"), React.createElement(Combobox, {
    width: 300,
    value: option,
    onChange: handleChange
  }, React.createElement(ComboboxInput, null), React.createElement(ComboboxList, null, loading ? React.createElement(ComboboxOption, {
    value: "Loading..."
  }) : React.createElement(React.Fragment, null, React.createElement(ComboboxOption, {
    value: "Apples"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  }), React.createElement(ComboboxOption, {
    value: "Apples2"
  }), React.createElement(ComboboxOption, {
    value: "Oranges2"
  }), React.createElement(ComboboxOption, {
    value: "Grapes2"
  }), React.createElement(ComboboxOption, {
    value: "Bananas2"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples2"
  }), React.createElement(ComboboxOption, {
    value: "Apples3"
  }), React.createElement(ComboboxOption, {
    value: "Oranges3"
  }), React.createElement(ComboboxOption, {
    value: "Grapes3"
  }), React.createElement(ComboboxOption, {
    value: "Bananas3"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples3"
  }), React.createElement(ComboboxOption, {
    value: "Apples4"
  }), React.createElement(ComboboxOption, {
    value: "Oranges4"
  }), React.createElement(ComboboxOption, {
    value: "Grapes4"
  }), React.createElement(ComboboxOption, {
    value: "Bananas4"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples4"
  })))), React.createElement(ComboboxMulti, {
    width: 300,
    values: options,
    onChange: handleMultiChange
  }, React.createElement(ComboboxMultiInput, {
    onClear: () => alert('CLEAR'),
    freeInput: true
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    value: "Apples"
  }), React.createElement(ComboboxMultiOption, {
    value: "Oranges"
  }), React.createElement(ComboboxMultiOption, {
    value: "Grapes"
  }), React.createElement(ComboboxMultiOption, {
    value: "Bananas"
  }), React.createElement(ComboboxMultiOption, {
    value: "Pineapples"
  }))), React.createElement(Heading, null, "Uncontrolled"), React.createElement(Combobox, {
    width: 300
  }, React.createElement(ComboboxInput, null), React.createElement(ComboboxList, null, React.createElement(ComboboxOption, {
    value: "Apples super long text to see what wrapping looks like"
  }), React.createElement(ComboboxOption, {
    value: "Oranges"
  }), React.createElement(ComboboxOption, {
    value: "Grapes"
  }), React.createElement(ComboboxOption, {
    value: "Bananas"
  }), React.createElement(ComboboxOption, {
    value: "Pineapples"
  }), React.createElement(ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  }))), React.createElement(ComboboxMulti, {
    width: 300
  }, React.createElement(ComboboxMultiInput, {
    onClear: () => alert('CLEAR'),
    freeInput: true
  }), React.createElement(ComboboxMultiList, null, React.createElement(ComboboxMultiOption, {
    value: "Apples"
  }), React.createElement(ComboboxMultiOption, {
    value: "Oranges"
  }), React.createElement(ComboboxMultiOption, {
    value: "Grapes"
  }), React.createElement(ComboboxMultiOption, {
    value: "Bananas"
  }), React.createElement(ComboboxMultiOption, {
    value: "Pineapples"
  })))), React.createElement(SpaceVertical, null, React.createElement(Heading, null, "Indicator"), React.createElement(Combobox, {
    width: 300
  }, React.createElement(ComboboxInput, {
    placeholder: "indicator={false}"
  }), React.createElement(ComboboxList, {
    indicator: false,
    persistSelection: true
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
  }), React.createElement(ComboboxOption, {
    value: "",
    label: "Create New Option",
    highlightText: false
  }))), React.createElement(ComboboxMulti, {
    width: 300
  }, React.createElement(ComboboxMultiInput, {
    onClear: () => alert('CLEAR'),
    placeholder: "Custom indicator"
  }), React.createElement(ComboboxMultiList, {
    indicator: CustomIndicator,
    persistSelection: true
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
  })))));
};
ComboboxDemo.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledInputValue = () => {
  const [inputValue, setInputValue] = useState('starting value');
  const [values, setValues] = useState([{
    value: 'Apples'
  }]);

  const handleClick = () => setInputValue('bananas');

  return React.createElement(SpaceVertical, {
    width: 300,
    align: "start"
  }, React.createElement(Paragraph, null, "Current inputValue: ", inputValue), React.createElement(Button, {
    onClick: handleClick
  }, "Change Input Value"), React.createElement(ComboboxMulti, {
    values: values,
    onChange: setValues
  }, React.createElement(ComboboxMultiInput, {
    autoComplete: false,
    inputValue: inputValue,
    onInputChange: setInputValue,
    freeInput: true
  }), React.createElement(ComboboxMultiList, {
    persistSelection: true
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
  }))));
};
ControlledInputValue.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes,
  component: Combobox,
  title: 'Combobox'
};
//# sourceMappingURL=Combobox.stories.js.map