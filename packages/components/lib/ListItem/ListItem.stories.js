import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { PersonOutline, SubdirectoryArrowLeft } from '@styled-icons/material';
import { DateRange } from '@styled-icons/material-outlined';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { IconButton } from '../Button';
import { Heading, Text } from '../Text';
import { Grid } from '../Layout/Grid';
import { SpaceVertical } from '../Layout/Space/SpaceVertical';
import { Status } from '../Status';
import { List } from '../List';
import { ListItem } from './ListItem';

const Template = args => React.createElement(ListItem, args);

export const Basic = Template.bind({});
const basicArgs = {
  children: 'List Item'
};
Basic.args = _objectSpread({}, basicArgs);
export const Icon = Template.bind({});

const iconArgs = _objectSpread(_objectSpread({}, basicArgs), {}, {
  icon: React.createElement(PersonOutline, null)
});

Icon.args = _objectSpread({}, iconArgs);
export const IconColor = () => React.createElement(ListItem, _extends({}, iconArgs, {
  color: "calculation"
}));
export const IconStatus = () => React.createElement(ListItem, _extends({}, iconArgs, {
  icon: React.createElement(Status, {
    intent: "warn"
  })
}));
export const IconCustomColor = () => React.createElement(ListItem, _extends({}, iconArgs, {
  color: "#cc00cc"
}));
export const IconColorDisabled = () => React.createElement(ListItem, _extends({}, iconArgs, {
  color: "warn",
  disabled: true
}));

const Example = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const args = _objectSpread({
    icon: React.createElement(PersonOutline, null)
  }, props);

  return React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h3"
  }, children), React.createElement(List, {
    width: "100%"
  }, React.createElement(ListItem, args, "Default"), React.createElement(ListItem, _extends({}, args, {
    color: "key"
  }), "Key"), React.createElement(ListItem, _extends({}, args, {
    color: "calculation"
  }), "Calculation"), React.createElement(ListItem, _extends({}, args, {
    color: "dimension"
  }), "Dimension"), React.createElement(ListItem, _extends({}, args, {
    color: "measure"
  }), "Measure")));
};

export const ColorComparison = () => React.createElement(Grid, {
  columns: 3
}, React.createElement(Example, null, "Default"), React.createElement(Example, {
  selected: true
}, "Selected"), React.createElement(Example, {
  selected: true,
  disabled: true
}, "Selected + Disabled"));
export const Detail = Template.bind({});
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: 'A Detail'
});
export const Accessory = Template.bind({});
Accessory.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: {
    content: React.createElement(IconButton, {
      icon: React.createElement(SubdirectoryArrowLeft, null),
      label: "Pivot"
    }),
    options: {
      accessory: true
    }
  }
});
export const HoverDisclosure = Template.bind({});
HoverDisclosure.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: {
    content: React.createElement(IconButton, {
      icon: React.createElement(SubdirectoryArrowLeft, null),
      label: "Pivot"
    }),
    options: {
      hoverDisclosure: true
    }
  }
});
HoverDisclosure.parameters = {
  storyshots: {
    disable: true
  }
};
export const IconAndDetail = Template.bind({});
IconAndDetail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: 'A Detail',
  icon: React.createElement(PersonOutline, null)
});
export const Description = Template.bind({});
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description'
});
export const IconAndDescription = Template.bind({});
IconAndDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description',
  icon: React.createElement(PersonOutline, null)
});
export const DetailAndDescription = Template.bind({});
DetailAndDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description',
  detail: 'A detail'
});
export const IconAndDetailAndDescription = Template.bind({});
IconAndDetailAndDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'A description',
  detail: 'A detail',
  icon: React.createElement(PersonOutline, null)
});
export const Selected = Template.bind({});
Selected.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  selected: true
});
export const Disabled = Template.bind({});
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
export const KeyColor = () => React.createElement(ListItem, _extends({
  selected: true,
  color: "key"
}, basicArgs));
export const Link = () => {
  return React.createElement(ListItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "ListItem that links to Google");
};
export const NoRole = () => {
  return React.createElement(ListItem, {
    itemRole: "none",
    detail: React.createElement(IconButton, {
      onClick: () => alert('Show me calendar'),
      icon: React.createElement(PersonOutline, null),
      label: "Person",
      ml: "large"
    })
  }, "ListItem");
};
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
export const Truncate = Template.bind({});
Truncate.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  children: lorem,
  description: lorem,
  truncate: true
});
export const TruncateAndIconAndDetail = Template.bind({});
TruncateAndIconAndDetail.args = _objectSpread(_objectSpread({}, Truncate.args), {}, {
  detail: {
    content: 'Detail',
    options: {}
  },
  icon: React.createElement(DateRange, null)
});
export const TruncateAndIconAndDetailAndAccessory = Template.bind({});
TruncateAndIconAndDetailAndAccessory.args = _objectSpread(_objectSpread({}, Truncate.args), {}, {
  detail: {
    content: React.createElement(Text, {
      fontSize: "xsmall"
    }, "Detail Accessory"),
    options: {
      accessory: true
    }
  },
  icon: React.createElement(DateRange, null)
});

const RoleVariant = ({
  itemRole,
  description
}) => React.createElement(ListItem, {
  itemRole: itemRole,
  description: description
}, "Hello World");

export const RoleVariants = () => React.createElement(Grid, {
  columns: 3
}, React.createElement("div", null, React.createElement(RoleVariant, {
  itemRole: "button"
}), React.createElement(RoleVariant, {
  itemRole: "button",
  description: "Definitely a button"
})), React.createElement("div", null, React.createElement(RoleVariant, {
  itemRole: "link"
}), React.createElement(RoleVariant, {
  itemRole: "link",
  description: "Definitely a link"
})), React.createElement("div", null, React.createElement(RoleVariant, {
  itemRole: "none"
}), React.createElement(RoleVariant, {
  itemRole: "none",
  description: "Definitely a none"
})));
export default {
  argTypes,
  component: ListItem,
  title: 'ListItem'
};
//# sourceMappingURL=ListItem.stories.js.map