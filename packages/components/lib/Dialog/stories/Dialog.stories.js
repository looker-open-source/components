import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { defaultArgTypes } from '@looker/storybook';
import { DialogLongContent } from '../../fixtures/DialogLongContent';
import { DialogMediumContent } from '../../fixtures/DialogMediumContent';
import { SpaceVertical } from '../../Layout/Space/SpaceVertical';
import { CopyToClipboard } from '../../CopyToClipboard';
import { Button, ButtonOutline } from '../../Button';
import { Dialog } from '../Dialog';
import { dialogSizes } from '../dialogWidth';
import { dialogPlacements } from '../DialogSurface';
import { DialogLayout } from '../Layout';
import { Checkbox } from '../../Form/Inputs/Checkbox';
import ActiveElement from './ActiveElement';
export * from './Controlled';
export * from './SaveChanges';
export { ActiveElement };
Object.assign(ActiveElement, {
  parameters: {
    storyshots: {
      disable: true
    }
  }
});

const Template = args => React.createElement(Dialog, args, React.createElement(ButtonOutline, null, "Open Dialog"));

export const Basic = Template.bind({});
Basic.args = {
  content: 'Simple Content'
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
Open.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const AnimationCallbacks = Template.bind({});
AnimationCallbacks.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  onAfterClose: () => {
    console.log('Close');
  },
  onAfterOpen: () => {
    console.log('Open');
  }
});
AnimationCallbacks.parameters = {
  storyshots: {
    disable: true
  }
};
export const MediumContent = Template.bind({});
MediumContent.args = {
  content: React.createElement(DialogMediumContent, null),
  defaultOpen: true,
  id: 'CustomDialogId'
};
MediumContent.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const Height = Template.bind({});
Height.args = _objectSpread(_objectSpread({}, MediumContent.args), {}, {
  height: '1000rem'
});
Height.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const PlacementTop = Template.bind({});
PlacementTop.args = _objectSpread(_objectSpread({}, MediumContent.args), {}, {
  defaultOpen: true,
  placement: 'top'
});
PlacementTop.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const PlacementCover = Template.bind({});
PlacementCover.args = _objectSpread(_objectSpread({}, MediumContent.args), {}, {
  defaultOpen: true,
  placement: 'cover'
});
PlacementCover.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const LongContent = Template.bind({});
LongContent.args = {
  content: React.createElement(DialogLongContent, null),
  defaultOpen: true
};
LongContent.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const withCheckbox = Template.bind({});
withCheckbox.args = {
  content: React.createElement(DialogLayout, {
    footer: "Footer",
    header: "Header"
  }, "The top line & bottom shadow should not be there.", React.createElement(Checkbox, {
    checked: true
  }))
};
withCheckbox.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const ClickOutside = () => {
  return React.createElement(React.Fragment, null, React.createElement("input", {
    type: "text",
    style: {
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: 100
    }
  }), React.createElement(Dialog, {
    content: React.createElement(React.Fragment, null, React.createElement("button", null, "button 1"), React.createElement("button", null, "button 2"))
  }, React.createElement("button", null, "Open Dialog")));
};
ClickOutside.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const MultiFunctionButton = () => {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: "A Dialog Example"
    }, React.createElement(SpaceVertical, null, React.createElement(CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, React.createElement(Button, null, "Copy"))))
  }, React.createElement(Button, null, "Open Dialog"));
};
MultiFunctionButton.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const CloseIconButton = () => {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, {
      header: "Has a close icon button"
    }, "Some content")
  }, React.createElement(Button, null, "Open Dialog"));
};
CloseIconButton.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  argTypes: _objectSpread(_objectSpread({}, defaultArgTypes), {}, {
    placement: {
      control: {
        options: dialogPlacements,
        type: 'select'
      }
    },
    width: {
      control: {
        options: Object.keys(dialogSizes),
        type: 'select'
      }
    }
  }),
  component: Dialog,
  title: 'Dialog'
};
//# sourceMappingURL=Dialog.stories.js.map