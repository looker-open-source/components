import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useCallback, useRef, useState } from 'react';
import { Done } from '@styled-icons/material';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../Button';
import { FieldText } from '../Form';
import { Drawer } from '../Drawer';
import { List } from '../List';
import { ListItem } from '../ListItem';
import { Aside, Box2, Layout, Page, Section, SpaceVertical } from '../Layout';
import { Paragraph } from '../Text';
import { TreeCollection, Tree, TreeItem } from '../Tree';
import { Panel, Panels, usePanel } from './';
export default {
  argTypes,
  component: Panel,
  title: 'Panel'
};

const Template = args => React.createElement(Page, {
  hasAside: true
}, React.createElement(Aside, {
  width: "12rem"
}, React.createElement(Panels, null, React.createElement(List, null, React.createElement(Panel, args, React.createElement(ListItem, null, "option A")), React.createElement(ListItem, null, "option B"), React.createElement(ListItem, null, "option C"), React.createElement(ListItem, null, "option D")))), React.createElement(Section, null, "Main stuff here..."));

export const Basic = Template.bind({});
Basic.args = {
  content: 'Panel Content',
  title: 'Panel Title'
};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Open = Template.bind({});
Open.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultOpen: true
});
export const IconToggle = Template.bind({});
IconToggle.args = _objectSpread(_objectSpread({}, Open.args), {}, {
  iconToggle: true
});
export const DirectionRight = Template.bind({});
DirectionRight.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultOpen: true,
  direction: 'right'
});
export const CloseLabel = Template.bind({});
CloseLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  closeLabel: 'Back to the last thing'
});
CloseLabel.parameters = {
  storyshots: {
    disable: true
  }
};
export const Nested = () => React.createElement(Page, {
  hasAside: true
}, React.createElement(Aside, {
  width: "12rem"
}, React.createElement(Button, null, "Before"), React.createElement(Panels, null, React.createElement(List, null, React.createElement(Panel, {
  title: "Panel Title",
  content: React.createElement(Panel, {
    content: "Nested Panel content",
    title: "Nested"
  }, React.createElement(Button, null, "Open nested panel"))
}, React.createElement(ListItem, null, "option A")), React.createElement(ListItem, null, "option B"), React.createElement(ListItem, null, "option C"), React.createElement(ListItem, null, "option D")))), React.createElement(Section, null, React.createElement(Paragraph, null, "Main stuff here..."), React.createElement(Button, null, "After")));
Nested.parameters = {
  storyshots: {
    disable: true
  }
};

const HookInner = () => {
  const {
    panel,
    setOpen
  } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook'
  });
  return React.createElement(React.Fragment, null, React.createElement(ListItem, {
    onClick: () => setOpen(true),
    icon: React.createElement(Done, null)
  }, "Option A"), panel);
};

export const Hook = () => {
  return React.createElement(Panels, null, React.createElement(List, null, React.createElement(HookInner, null), React.createElement(ListItem, {
    icon: React.createElement(Done, null)
  }, "Option B")));
};
Hook.parameters = {
  storyshots: {
    disable: true
  }
};
export const CenterPlacement = () => React.createElement(Page, {
  hasAside: true,
  height: "100vh"
}, React.createElement(Aside, {
  width: "navigation"
}, "Left sidebar"), React.createElement(Layout, {
  hasAside: true
}, React.createElement(Section, null, React.createElement(Panels, null, React.createElement(Panel, {
  title: "Some title",
  content: React.createElement(SpaceVertical, null, React.createElement(Panel, {
    title: "Another title",
    direction: "right",
    content: React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"), React.createElement(Paragraph, null, "Some other text"))
  }, React.createElement(Button, null, "Open Another Panel")), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"))
}, React.createElement(Button, null, "Open Panel")), React.createElement(Paragraph, null, "Content to be covered by the panel"))), React.createElement(Aside, {
  width: "sidebar"
}, "Right sidebar")));
CenterPlacement.parameters = {
  storyshots: {
    disable: true
  }
};
export const WithTree = () => React.createElement(Page, {
  hasAside: true
}, React.createElement(Aside, {
  width: "navigation"
}, React.createElement(Panels, null, React.createElement(Panel, {
  title: "Some title",
  content: "Tree should be hidden"
}, React.createElement(Button, null, "Open Panel")), React.createElement(TreeCollection, null, React.createElement(Tree, {
  label: React.createElement("strong", null, "Orders"),
  defaultOpen: true
}, React.createElement(TreeItem, null, "ID"), React.createElement(TreeItem, null, "Status"), React.createElement(Tree, {
  label: React.createElement("strong", null, "Created"),
  defaultOpen: true
}, React.createElement(TreeItem, null, "Created Date"), React.createElement(TreeItem, null, "Created Month"), React.createElement(TreeItem, null, "Created Year"), React.createElement(TreeItem, null, "Created Quarter")))))), React.createElement(Section, null, "Main content"));
export const WithDrawer = () => React.createElement(Drawer, {
  placement: "left",
  content: React.createElement(Panels, null, React.createElement(SpaceVertical, null, React.createElement(Panel, {
    defaultOpen: true,
    direction: "right",
    title: "Some title",
    content: "Tree should be hidden"
  }, React.createElement(Button, null, "Open Panel")), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text"), React.createElement(Paragraph, null, "Some text")))
}, React.createElement(Button, null, "Open Drawer"));
WithDrawer.parameters = {
  storyshots: {
    disable: true
  }
};
export const AnimationCallbacks = () => {
  const inputRef = useRef(null);
  const focusInput = useCallback(() => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, []);
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('Panel closed');
  };

  return React.createElement(Page, {
    hasAside: true
  }, React.createElement(Aside, {
    width: "20rem"
  }, React.createElement(Panels, null, React.createElement(Box2, {
    p: "medium",
    height: 300
  }, React.createElement(Panel, {
    title: "Animation Callbacks",
    onAfterOpen: focusInput,
    onAfterClose: showMessage,
    content: React.createElement(Box2, {
      px: "medium"
    }, React.createElement(FieldText, {
      label: "Focus onAfterOpen",
      ref: inputRef
    }))
  }, React.createElement(Button, null, "Open Panel"))))), React.createElement(Section, null, React.createElement(Paragraph, null, "Main stuff here..."), React.createElement(Paragraph, null, message)));
};
AnimationCallbacks.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Panel.stories.js.map