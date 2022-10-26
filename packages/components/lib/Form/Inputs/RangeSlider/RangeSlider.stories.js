import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../../Button';
import { Space, SpaceVertical } from '../../../Layout';
import { OrderedList } from '../../../OrderedList';
import { Paragraph } from '../../../Text';
import { useToggle } from '../../../utils';
import { RangeSlider } from './RangeSlider';
export default {
  argTypes,
  component: RangeSlider,
  title: 'RangeSlider'
};

const getRange = value => [value && value[0] ? value[0] : 0, value && value[1] ? value[1] : 0];

const NumberFilter = ({
  AST,
  onChange
}) => {
  const {
    value,
    toggle
  } = useToggle();
  const rangeValue = getRange(AST.value);
  return React.createElement(React.Fragment, null, React.createElement(RangeSlider, {
    min: 0,
    max: value ? 5 : 100,
    value: rangeValue,
    onChange: onChange
  }), React.createElement(Space, null, React.createElement(Button, {
    onClick: toggle
  }, "Change min/max to 0 - ", value ? '100' : '5'), React.createElement(Paragraph, null, "Current Value: ", rangeValue.join(','))));
};

const getValue = expression => expression.split(',').map(text => parseInt(text, 10));

const Filter = ({
  expression,
  onChange
}) => {
  const [AST, setAST] = React.useState({
    value: getValue(expression)
  });
  const expressionRef = React.useRef(expression);
  React.useEffect(() => {
    if (expressionRef.current !== expression) {
      setAST({
        value: getValue(expression)
      });
      expressionRef.current = expression;
    }
  }, [expression]);

  const handleChange = newValue => {
    onChange(newValue.join(', '));
  };

  return React.createElement(NumberFilter, {
    AST: AST,
    onChange: handleChange
  });
};

export const RerenderRepro = () => {
  const [expression, setExpression] = React.useState('0,10');

  const handleChange = newValue => {
    setExpression(newValue);
  };

  return React.createElement(SpaceVertical, {
    p: "u4",
    align: "stretch"
  }, React.createElement(OrderedList, {
    type: "number"
  }, React.createElement("li", null, "When updating the min/max, the value should move to stay within bounds."), React.createElement("li", null, "When changing the value, it should not immediately reset.")), React.createElement(Filter, {
    expression: expression,
    onChange: handleChange
  }));
};
RerenderRepro.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=RangeSlider.stories.js.map