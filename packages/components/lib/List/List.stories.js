import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { DateRange } from '@styled-icons/material-outlined';
import { SubdirectoryArrowLeft } from '@styled-icons/material';
import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Flex, Grid, Space } from '../Layout';
import { ListItem } from '../ListItem';
import { IconButton } from '../Button';
import { List } from './List';
export default {
  argTypes,
  component: List,
  title: 'List'
};
const listItems = React.createElement(React.Fragment, null, React.createElement(ListItem, {
  icon: React.createElement(DateRange, null),
  description: "Orange-y"
}, "Cheddar"), React.createElement(ListItem, {
  icon: React.createElement(SubdirectoryArrowLeft, null),
  detail: "Netherlands"
}, "Gouda"), React.createElement(ListItem, {
  selected: true
}, "Mozzarella"), React.createElement(ListItem, null, "Swiss"));

const Template = args => React.createElement(List, args);

export const Basic = Template.bind({});
Basic.args = {
  children: listItems
};
export const Focused = Template.bind({});
Focused.args = _objectSpread({}, Basic.args);
Focused.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const FontFamily = Template.bind({});
FontFamily.args = {
  children: listItems,
  fontFamily: 'code'
};
export const Color = () => React.createElement(List, {
  color: "key"
}, listItems);
export const IconGutter = Template.bind({});
IconGutter.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  iconGutter: true
});
const array3000 = Array.from(Array(3000), (_, i) => String(i));
export const LongList = () => {
  return React.createElement(Flex, {
    height: 500
  }, React.createElement(List, {
    width: 200
  }, array3000.map((item, i) => React.createElement(ListItem, {
    key: i
  }, i > 0 && i % 30 === 0 ? 'Longlonglonglonglonglonglonglonglonglonglong' : item))), React.createElement("div", null, "Without width on List, windowing plus variable item widths causes the layout to be unstable."));
};
LongList.parameters = {
  storyshots: false
};
export const ExpandingList = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  return React.createElement(Space, {
    align: "start"
  }, React.createElement(List, null, React.createElement(ListItem, null, "Cheddar"), React.createElement(ListItem, null, "Gouda"), showMore ? React.createElement(React.Fragment, null, React.createElement(ListItem, null, "Swiss"), React.createElement(ListItem, null, "American"), React.createElement(ListItem, {
    onClick: () => setShowMore(false),
    description: "Keyboard nav should still work"
  }, "Show Less")) : React.createElement(ListItem, {
    onClick: () => setShowMore(true),
    description: "To test keyboard nav"
  }, "Show More")), React.createElement(List, null, showMore2 ? React.createElement(React.Fragment, null, React.createElement(ListItem, {
    key: "0"
  }, "Cheddar"), React.createElement(ListItem, {
    key: "1"
  }, "Swiss"), React.createElement(ListItem, {
    key: "2"
  }, "Gouda"), React.createElement(ListItem, {
    key: "3"
  }, "American"), React.createElement(ListItem, {
    key: "4",
    onClick: () => setShowMore2(false),
    description: "Replaces all items"
  }, "Show less")) : React.createElement(React.Fragment, null, React.createElement(ListItem, {
    key: "5"
  }, "Cheddar"), React.createElement(ListItem, {
    key: "6"
  }, "Gouda"), React.createElement(ListItem, {
    key: "7",
    onClick: () => setShowMore2(true),
    description: "Replaces all items"
  }, "Show more"))));
};
ExpandingList.parameters = {
  storyshots: false
};

const DensityExample = ({
  children,
  density
}) => React.createElement(List, {
  iconGutter: true,
  density: density
}, children);

export const Density = () => React.createElement(Grid, {
  columns: 5
}, React.createElement(DensityExample, {
  density: 1
}, listItems), React.createElement(DensityExample, null, listItems), React.createElement(DensityExample, {
  density: -1
}, listItems), React.createElement(DensityExample, {
  density: -2
}, listItems), React.createElement(DensityExample, {
  density: -3
}, listItems));

const CheeseWrapper = ({
  children
}) => React.createElement("div", null, React.createElement("strong", null, children), " cheese");

const listItemsNonstringChildren = React.createElement(React.Fragment, null, React.createElement(ListItem, {
  icon: React.createElement(DateRange, null),
  description: "Orange-y"
}, React.createElement(CheeseWrapper, null, "Cheddar")), React.createElement(ListItem, {
  icon: React.createElement(SubdirectoryArrowLeft, null),
  detail: "Netherlands"
}, React.createElement(CheeseWrapper, null, "Gouda")), React.createElement(ListItem, {
  selected: true
}, React.createElement(CheeseWrapper, null, "Mozzarella")), React.createElement(ListItem, null, React.createElement(CheeseWrapper, null, "Swiss")));
export const DensityWithNonstringChildren = () => React.createElement(Grid, {
  columns: 5
}, React.createElement(DensityExample, {
  density: 1
}, listItemsNonstringChildren), React.createElement(DensityExample, null, listItemsNonstringChildren), React.createElement(DensityExample, {
  density: -1
}, listItemsNonstringChildren), React.createElement(DensityExample, {
  density: -2
}, listItemsNonstringChildren), React.createElement(DensityExample, {
  density: -3
}, listItemsNonstringChildren));
export const KeyboardNavigation = () => React.createElement(List, null, React.createElement(ListItem, {
  itemRole: "none",
  detail: {
    content: React.createElement(IconButton, {
      label: "cheddar-button",
      icon: React.createElement(DateRange, null),
      tooltipDisabled: true
    }),
    options: {
      hoverDisclosure: true
    }
  }
}, "Cheddar"), React.createElement(ListItem, {
  itemRole: "none",
  detail: React.createElement(IconButton, {
    label: "gouda-button",
    icon: React.createElement(DateRange, null),
    tooltipDisabled: true
  })
}, "Gouda"));
KeyboardNavigation.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=List.stories.js.map