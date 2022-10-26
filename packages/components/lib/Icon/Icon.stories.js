import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Create, Delete, DeleteOutline, FilterList, Refresh, Settings } from '@styled-icons/material';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button, IconButton } from '../Button';
import { Space, SpaceVertical } from '../Layout';
import { Heading } from '../Text';
import { Icon } from './Icon';
export default {
  argTypes,
  component: Icon,
  title: 'Icon'
};

const Template = args => React.createElement(Icon, args);

export const Basic = Template.bind({});
Basic.args = {
  icon: React.createElement(Settings, null)
};
export const Small = Template.bind({});
Small.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  size: 'small'
});
export const Large = Template.bind({});
Large.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  size: 'large'
});
export const Accessibility = () => React.createElement(Space, {
  around: true
}, React.createElement(Icon, {
  icon: React.createElement(Delete, null),
  title: "It's a trash can"
}), React.createElement(Icon, {
  icon: React.createElement(DeleteOutline, null)
}));
Accessibility.parameters = {
  storyshots: {
    disable: true
  }
};
export const Sizes = () => React.createElement(SpaceVertical, null, React.createElement(Space, null, React.createElement(Icon, {
  icon: React.createElement(Delete, null),
  size: "xxsmall"
}), React.createElement(Icon, {
  icon: React.createElement(Delete, null),
  size: "xsmall"
}), React.createElement(Icon, {
  icon: React.createElement(Delete, null),
  size: "small"
}), React.createElement(Icon, {
  icon: React.createElement(Delete, null),
  size: "medium"
}), React.createElement(Icon, {
  icon: React.createElement(Delete, null),
  size: "large"
}), React.createElement(Icon, {
  icon: React.createElement(Delete, null)
})));
Sizes.parameters = {
  storyshots: {
    disable: true
  }
};
export const Artwork = () => React.createElement(Space, {
  around: true
}, React.createElement(Icon, {
  icon: React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
    fill: "hotpink"
  })),
  size: "xxsmall"
}), React.createElement(Icon, {
  icon: React.createElement("svg", null, React.createElement("rect", {
    width: "100",
    height: "100",
    fill: "rgb(0,0,255)",
    strokeWidth: "3",
    stroke: "rgb(0,0,0)"
  }))
}));
Artwork.parameters = {
  storyshots: {
    disable: true
  }
};
export const IconsInsideComponents = () => React.createElement(SpaceVertical, null, React.createElement(Space, {
  gap: "u2"
}, React.createElement(Button, {
  size: "large",
  iconAfter: React.createElement(Refresh, null)
}, "Add"), React.createElement(IconButton, {
  size: "large",
  icon: React.createElement(FilterList, null),
  label: "Filter"
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Button, {
  iconAfter: React.createElement(Refresh, null)
}, "Add"), React.createElement(IconButton, {
  size: "medium",
  icon: React.createElement(FilterList, null),
  label: "Filter"
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Button, {
  size: "small",
  iconAfter: React.createElement(Refresh, null)
}, "Add"), React.createElement(IconButton, {
  size: "small",
  icon: React.createElement(FilterList, null),
  label: "Filter"
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Button, {
  size: "xsmall",
  iconAfter: React.createElement(Refresh, null)
}, "Add"), React.createElement(IconButton, {
  size: "xsmall",
  icon: React.createElement(FilterList, null),
  label: "Filter"
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Button, {
  size: "xxsmall",
  iconAfter: React.createElement(Refresh, null)
}, "Add"), React.createElement(IconButton, {
  size: "xxsmall",
  icon: React.createElement(FilterList, null),
  label: "Filter"
})));
IconsInsideComponents.parameters = {
  storyshots: {
    disable: true
  }
};
export const IconsPairedWithText = () => React.createElement(SpaceVertical, null, React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xxsmall"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "xxxsmall",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xsmall"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "xxxsmall",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "small"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "xxsmall",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "medium"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "xxsmall",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "large"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "xsmall",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xlarge"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "small",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xxlarge"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "small",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xxxlarge"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "medium",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xxxxlarge"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "medium",
  icon: React.createElement(Create, null)
})), React.createElement(Space, {
  gap: "u2"
}, React.createElement(Heading, {
  fontSize: "xxxxxlarge"
}, "This is to compare icons size with a Heading"), React.createElement(Icon, {
  size: "large",
  icon: React.createElement(Create, null)
})));
IconsPairedWithText.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Icon.stories.js.map