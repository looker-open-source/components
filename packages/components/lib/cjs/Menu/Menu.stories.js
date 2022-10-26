"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithTooltip = exports.WithDialog = exports.RealisticMenus = exports.NestedMenuAndFocusableDetails = exports.NestedMenu = exports.LongMenus = exports.IconSpace = exports.Hover = exports.Controlled = exports.Basic = exports.ArrowKeyNavigation = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _material = require("@styled-icons/material");

var _materialOutlined = require("@styled-icons/material-outlined");

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../Button");

var _Card = require("../Card");

var _Dialog = require("../Dialog");

var _Divider = require("../Divider");

var _Form = require("../Form");

var _Icon = require("../Icon");

var _Layout = require("../Layout");

var _Tabs = require("../Tabs");

var _Text = require("../Text");

var _Tooltip = require("../Tooltip");

var _utils = require("../utils");

var _Menu = require("./Menu");

var _MenuDivider = require("./MenuDivider");

var _MenuItem = require("./MenuItem");

var _MenuList = require("./MenuList");

var _MenuHeading = require("./MenuHeading");

var _excluded = ["open"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Menu.Menu,
  title: 'Menu'
};
exports["default"] = _default;

var menuItems = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
  detail: "detail",
  description: "this is the description",
  icon: _react["default"].createElement(_materialOutlined.Home, null)
}, "Looker"), _react["default"].createElement(_MenuItem.MenuItem, {
  description: "this is the description",
  icon: _react["default"].createElement(_material.VerifiedUser, null)
}, "Validate"), _react["default"].createElement(_MenuItem.MenuItem, {
  detail: "detail",
  icon: _react["default"].createElement(_material.PieChart, null)
}, "Pizza"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, null, "Gouda"), _react["default"].createElement(_MenuItem.MenuItem, {
  "aria-current": true,
  selected: true
}, "Swiss"), _react["default"].createElement(_MenuItem.MenuItem, null, "Cheddar"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, "Create"), _react["default"].createElement(_MenuItem.MenuItem, null, "Gouda"), _react["default"].createElement(_MenuItem.MenuItem, null, " Swiss"), _react["default"].createElement(_MenuItem.MenuItem, null, "Cheddar"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, null, "Gouda"), _react["default"].createElement(_MenuItem.MenuItem, null, " Swiss"), _react["default"].createElement(_MenuItem.MenuItem, null, "Cheddar"));

var Basic = function Basic() {
  return _react["default"].createElement(_Menu.Menu, {
    content: menuItems,
    iconGutter: true
  }, _react["default"].createElement(_Button.Button, null, "Basic Menu"));
};

exports.Basic = Basic;
Basic.parameters = {
  storyshots: {
    disable: true
  }
};

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return _react["default"].createElement(_Menu.Menu, {
    content: menuItems,
    isOpen: isOpen,
    setOpen: setOpen,
    iconGutter: true
  }, _react["default"].createElement(_Button.Button, null, "Controlled Menu"));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};

var IconSpace = function IconSpace() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_Menu.Menu, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.PersonOutline, null)
    }, "Hello"), _react["default"].createElement(_MenuItem.MenuItem, null, "World")),
    iconGutter: true
  }, _react["default"].createElement(_Button.Button, null, "Icon Space Preserved")), _react["default"].createElement(_Divider.Divider, null), _react["default"].createElement(_MenuList.MenuList, {
    iconGutter: true
  }, _react["default"].createElement(_MenuHeading.MenuHeading, null, "MenuList with 3 Items"), _react["default"].createElement(_MenuItem.MenuItem, {
    description: "this is a description",
    icon: _react["default"].createElement(_materialOutlined.Home, null)
  }, "Looker"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_material.VerifiedUser, null)
  }, "Validate"), _react["default"].createElement(_MenuItem.MenuItem, null, "Pizza!")), _react["default"].createElement(_Divider.Divider, null), _react["default"].createElement(_MenuList.MenuList, {
    iconGutter: true
  }, _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_materialOutlined.Home, null)
  }, "Looker"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_material.VerifiedUser, null)
  }, "Validate"), _react["default"].createElement(_MenuHeading.MenuHeading, null, "MenuList with 1 Item"), _react["default"].createElement(_MenuItem.MenuItem, null, "Pizza!")), _react["default"].createElement(_Divider.Divider, null), _react["default"].createElement(_MenuList.MenuList, {
    iconGutter: true
  }, _react["default"].createElement(_MenuHeading.MenuHeading, null, "Icon, Artwork, and Detail"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_material.PieChart, null)
  }, "Icon"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react["default"].createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
      fill: "#7FFFD4"
    }))
  }, "Artwork"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_materialOutlined.AccountCircle, null),
    detail: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Text.Text, {
      fontSize: "small",
      mr: "xsmall",
      color: "text2"
    }, "Online"), _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Chat, null),
      verticalAlign: "middle",
      color: "positive",
      size: 16
    }))
  }, "Chat"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_materialOutlined.AccountCircle, null),
    detail: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Text.Text, {
      fontSize: "small",
      mr: "xsmall",
      color: "text2"
    }, "Offline"), _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Chat, null),
      verticalAlign: "middle",
      size: 16
    }))
  }, "Chat")));
};

exports.IconSpace = IconSpace;
IconSpace.parameters = {
  storyshots: {
    disable: true
  }
};
var MenuIcons = (0, _react.forwardRef)(function (_ref, ref) {
  var open = _ref.open,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_material.AddAlert, null),
    label: "Add Alert",
    onClick: open
  }), _react["default"].createElement(_Button.IconButton, (0, _extends2["default"])({
    icon: _react["default"].createElement(_material.MoreVert, null),
    label: "More Options",
    ref: ref
  }, props)));
});
MenuIcons.displayName = 'MenuIcons';

var Hover = function Hover() {
  var hoverRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      dialogIsOpen = _useState4[0],
      setOpen = _useState4[1];

  var open = function open() {
    return setOpen(true);
  };

  var close = function close() {
    return setOpen(false);
  };

  return _react["default"].createElement(_Card.Card, {
    ref: hoverRef,
    p: "u5",
    raised: true,
    height: "auto",
    tabIndex: 0
  }, _react["default"].createElement(_Layout.Space, {
    between: true
  }, _react["default"].createElement(_Text.Paragraph, null, "Hovering in this card will show the button that triggers the menu."), _react["default"].createElement("div", null, _react["default"].createElement(_Menu.Menu, {
    content: menuItems,
    hoverDisclosureRef: hoverRef,
    iconGutter: true
  }, _react["default"].createElement(MenuIcons, {
    open: open
  })))), _react["default"].createElement(_Dialog.Dialog, {
    isOpen: dialogIsOpen,
    onClose: close
  }, _react["default"].createElement(_Dialog.DialogLayout, null, "Alert icon should be hidden now.")));
};

exports.Hover = Hover;
Hover.parameters = {
  storyshots: {
    disable: true
  }
};

var RealisticMenus = function RealisticMenus() {
  return _react["default"].createElement(_Layout.Space, {
    gap: "u10"
  }, _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
      description: "some description",
      icon: _react["default"].createElement(_material.Refresh, null),
      detail: "\u2318\u21E7\u21B5"
    }, "Clear cache & refresh"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, "Options"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.Create, null),
      detail: "\u2318\u21E7E"
    }, "Edit dashboard"), _react["default"].createElement(_MenuItem.MenuItem, {
      description: "some description"
    }, "Get LookMl"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.Undo, null),
      detail: "A longer detail"
    }, "Revert to original dashboard"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.Download, null),
      detail: "\u2325\u21E7D"
    }, "Edit dashboard"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.DeleteOutline, null)
    }, "Move to Trash"))
  }, _react["default"].createElement(_Button.IconButton, {
    label: "Dashboard actions",
    size: "medium",
    icon: _react["default"].createElement(_material.MoreVert, null)
  })), _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.Undo, null),
      detail: "\u2318\u21E7\u21B5"
    }, "Clear cache & refresh"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, "Options"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_materialOutlined.Create, null),
      detail: "\u2318\u21E7E"
    }, "Edit dashboard"), _react["default"].createElement(_MenuItem.MenuItem, null, "Get LookMl"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.Undo, null)
    }, "Revert to original dashboard"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
      description: "some description",
      icon: _react["default"].createElement(_material.Download, null),
      detail: "\u2325\u21E7D"
    }, "Edit dashboard"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.DeleteOutline, null)
    }, "Move to Trash"))
  }, _react["default"].createElement(_Button.IconButton, {
    label: "Dashboard actions",
    size: "medium",
    icon: _react["default"].createElement(_material.MoreVert, null)
  })), _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_materialOutlined.Create, null)
    }, "Rename"), _react["default"].createElement(_MenuItem.MenuItem, {
      description: "some description",
      icon: _react["default"].createElement(_material.DeleteOutline, null)
    }, "Delete"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_materialOutlined.CreateNewFolder, null)
    }, "Folder"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_materialOutlined.Explore, null)
    }, "Model"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.TableChart, null)
    }, "New Item"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.TableChart, null)
    }, "View"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.Dashboard, null)
    }, "Dashboard"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.TextSnippet, null)
    }, "Document"), _react["default"].createElement(_MenuItem.MenuItem, {
      icon: _react["default"].createElement(_material.AttachFile, null)
    }, "Generic LookML file"))
  }, _react["default"].createElement(_Button.IconButton, {
    label: "IDE actions",
    size: "medium",
    icon: _react["default"].createElement(_material.MoreVert, null)
  })), _react["default"].createElement(_Menu.Menu, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, null, "Rename"), _react["default"].createElement(_MenuItem.MenuItem, null, "Delete"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, "Create"), _react["default"].createElement(_MenuItem.MenuItem, null, "Folder"), _react["default"].createElement(_MenuItem.MenuItem, null, "Model"), _react["default"].createElement(_MenuItem.MenuItem, null, "New Item"), _react["default"].createElement(_MenuItem.MenuItem, null, "View"), _react["default"].createElement(_MenuItem.MenuItem, null, "Dashboard"), _react["default"].createElement(_MenuItem.MenuItem, null, "Document"), _react["default"].createElement(_MenuItem.MenuItem, null, "Generic LookML file"))
  }, _react["default"].createElement(_Button.IconButton, {
    label: "Menu No Icons",
    size: "medium",
    icon: _react["default"].createElement(_material.MoreVert, null)
  })));
};

exports.RealisticMenus = RealisticMenus;
RealisticMenus.parameters = {
  storyshots: {
    disable: true
  }
};

var getRandomInteger = function getRandomInteger(limit) {
  return Math.floor(Math.random() * limit);
};

var array95 = Array.from(Array(95), function (_, i) {
  return String(i + 1);
});
var array3000 = Array.from(Array(3000), function (_, i) {
  var rand = getRandomInteger(15);
  var description = rand % 3 === 0 ? 'Description' : undefined;
  return {
    description: description,
    label: String(i + 1)
  };
});
var preamble = "We the People of the United States, in Order to form a more perfect Union,\nestablish Justice, insure domestic Tranquility, provide for the common\ndefense, promote the general Welfare, and secure the Blessings of Liberty\nto ourselves and our Posterity, do ordain and establish this Constitution\nfor the United States of America.";

var getString = function getString() {
  var lengthLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  var startLimit = preamble.length - 50;
  var length = getRandomInteger(lengthLimit);
  var startIndex = getRandomInteger(startLimit);
  return preamble.substr(startIndex, length);
};

var getItems = function getItems(labelLength) {
  var num = getRandomInteger(8);
  var itemsLength = Math.pow(num, 2);
  return Array.from(Array(itemsLength), function (_, i) {
    return {
      label: "".concat(i, ": ").concat(getString(labelLength))
    };
  });
};

var getGroups = function getGroups(labelLength) {
  return Array.from(Array(100), function (_, i) {
    return {
      items: getItems(labelLength),
      label: "".concat(i, ": ").concat(getString())
    };
  });
};

var LongMenus = function LongMenus() {
  var _useToggle = (0, _utils.useToggle)(true),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  var _useToggle2 = (0, _utils.useToggle)(),
      longLabels = _useToggle2.value,
      toggleLongLabels = _useToggle2.toggle;

  var groups = (0, _react.useMemo)(function () {
    return getGroups(longLabels ? 120 : 30);
  }, [longLabels]);
  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start",
    p: "u8"
  }, _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Menu.Menu, {
    content: array95.map(function (item, i) {
      return _react["default"].createElement(_MenuItem.MenuItem, {
        key: i
      }, item);
    })
  }, _react["default"].createElement(_Button.Button, null, "No windowing (95)")), _react["default"].createElement(_Menu.Menu, {
    content: groups.slice(0, 5).map(function (_ref2, index) {
      var label = _ref2.label,
          items = _ref2.items;
      return _react["default"].createElement(_react.Fragment, {
        key: "".concat(label, "-").concat(index)
      }, _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, label), items.map(function (item, index2) {
        return _react["default"].createElement(_MenuItem.MenuItem, {
          key: "".concat(item.label, "-").concat(index2)
        }, item.label);
      }));
    })
  }, _react["default"].createElement(_Button.Button, null, "No windowing (groups)"))), _react["default"].createElement(_Layout.Space, {
    align: "start"
  }, _react["default"].createElement(_Menu.Menu, {
    width: 300,
    windowing: !value ? false : undefined,
    content: array3000.map(function (item, i) {
      return _react["default"].createElement(_MenuItem.MenuItem, {
        key: i
      }, item.label);
    })
  }, _react["default"].createElement(_Button.Button, null, "Windowing (3k)")), _react["default"].createElement(_Menu.Menu, {
    width: 300,
    windowing: !value ? false : undefined,
    content: array3000.map(function (item, i) {
      return _react["default"].createElement(_MenuItem.MenuItem, {
        key: i,
        description: item.description
      }, item.label);
    })
  }, _react["default"].createElement(_Button.Button, null, "Windowing (description)")), _react["default"].createElement(_Menu.Menu, {
    width: 300,
    windowing: !value ? false : undefined,
    content: groups.map(function (_ref3, index) {
      var label = _ref3.label,
          items = _ref3.items;
      return [_react["default"].createElement(_MenuDivider.MenuDivider, {
        key: "".concat(label, "-").concat(index, "-divider")
      }), _react["default"].createElement(_MenuHeading.MenuHeading, {
        key: "".concat(label, "-").concat(index, "-heading")
      }, label)].concat((0, _toConsumableArray2["default"])(items.map(function (item, index2) {
        return _react["default"].createElement(_MenuItem.MenuItem, {
          key: "".concat(item.label, "-").concat(index2)
        }, item.label);
      })));
    })
  }, _react["default"].createElement(_Button.Button, null, "Windowing (groups)")), _react["default"].createElement(_Form.FieldToggleSwitch, {
    on: value,
    label: "Enable windowing",
    onChange: toggle
  }), _react["default"].createElement(_Form.FieldToggleSwitch, {
    on: longLabels,
    onChange: toggleLongLabels,
    label: "Use longer labels",
    description: "The scrolling will become jittery"
  })));
};

exports.LongMenus = LongMenus;
LongMenus.parameters = {
  storyshots: {
    disable: true
  }
};

var WithDialog = function WithDialog() {
  var _useToggle3 = (0, _utils.useToggle)(),
      value = _useToggle3.value,
      setOn = _useToggle3.setOn,
      setOff = _useToggle3.setOff;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setOn();
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Menu.Menu, {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
      onClick: setOn
    }, "Open Dialog"), _react["default"].createElement(_MenuItem.MenuItem, {
      onClick: handleClick
    }, "Open Dialog, keep Menu open"))
  }, _react["default"].createElement(_Button.Button, null, "Menu with Dialog")), _react["default"].createElement(_Dialog.Dialog, {
    isOpen: value,
    onClose: setOff
  }, _react["default"].createElement(_Dialog.DialogLayout, {
    footer: _react["default"].createElement(_Button.Button, {
      onClick: setOff
    }, "Close"),
    header: "A Dialog"
  }, "Dialog must be placed outside of Menu")));
};

exports.WithDialog = WithDialog;
WithDialog.parameters = {
  storyshots: {
    disable: true
  }
};

var WithTooltip = function WithTooltip() {
  var _useToggle4 = (0, _utils.useToggle)(),
      value = _useToggle4.value,
      toggle = _useToggle4.toggle;

  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: menuItems,
    disabled: value
  }, _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Open the menu",
    placement: "right"
  }, _react["default"].createElement(_Button.Button, {
    disabled: value
  }, "Menu with Tooltip"))), _react["default"].createElement(_Form.FieldToggleSwitch, {
    on: value,
    onChange: toggle,
    label: "Disabled"
  }));
};

exports.WithTooltip = WithTooltip;
WithTooltip.parameters = {
  storyshots: {
    disable: true
  }
};

var ArrowKeyNavigation = function ArrowKeyNavigation() {
  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start"
  }, _react["default"].createElement(_Button.Button, null, "Above"), _react["default"].createElement(_Text.Heading, null, "Menu"), _react["default"].createElement(_MenuList.MenuList, null, _react["default"].createElement(_MenuItem.MenuItem, null, "1"), _react["default"].createElement(_MenuItem.MenuItem, null, "2"), _react["default"].createElement(_MenuItem.MenuItem, null, "3")), _react["default"].createElement(_Text.Heading, null, "Tabs"), _react["default"].createElement(_Tabs.Tabs, null, _react["default"].createElement(_Tabs.TabList, null, _react["default"].createElement(_Tabs.Tab, null, "1"), _react["default"].createElement(_Tabs.Tab, null, "2"), _react["default"].createElement(_Tabs.Tab, null, "3")), _react["default"].createElement(_Tabs.TabPanels, null, _react["default"].createElement(_Tabs.TabPanel, null, "One"), _react["default"].createElement(_Tabs.TabPanel, null, "Two"), _react["default"].createElement(_Tabs.TabPanel, null, "Three"))), _react["default"].createElement(_Button.Button, null, "Below"));
};

exports.ArrowKeyNavigation = ArrowKeyNavigation;
ArrowKeyNavigation.parameters = {
  storyshots: {
    disable: true
  }
};

var NestedMenu = function NestedMenu() {
  var getOnClick = function getOnClick(text) {
    return function (e) {
      alert("You clicked ".concat(text));

      if (text === 'preventDefault') {
        e.preventDefault();
      }
    };
  };

  var nestedMenu = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
    nestedMenu: _react["default"].createElement(_MenuItem.MenuItem, {
      onClick: getOnClick('Another Level')
    }, "Another Level"),
    onClick: getOnClick('Sub Item')
  }, "Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Another Sub Item')
  }, "Another Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Third Sub Item')
  }, "Third Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('4th Sub Item')
  }, "4th Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Fifth Sub Item')
  }, "Fifth Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('preventDefault')
  }, "preventDefault"));

  var content = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_material.Create, null),
    onClick: getOnClick('Edit')
  }, "Edit"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_material.Download, null),
    onClick: getOnClick('Download')
  }, "Download"), _react["default"].createElement(_MenuDivider.MenuDivider, null), _react["default"].createElement(_MenuHeading.MenuHeading, null, "Sub Menus"), _react["default"].createElement(_MenuItem.MenuItem, {
    nestedMenu: nestedMenu
  }, "Sub Menu"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Sub Menu'),
    nestedMenu: nestedMenu
  }, "Sub Menu - with onClick"), _react["default"].createElement(_MenuItem.MenuItem, {
    icon: _react["default"].createElement(_material.Favorite, null),
    onClick: getOnClick('Favorite')
  }, "Favorite"), _react["default"].createElement(_MenuItem.MenuItem, {
    nestedMenu: nestedMenu
  }, "Sub Menu 3"));

  return _react["default"].createElement(_Layout.Flex, {
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-between"
  }, _react["default"].createElement(_Layout.Space, {
    between: true
  }, _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: content
  }, _react["default"].createElement(_Button.Button, null, "Nested Menu")), _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: content
  }, _react["default"].createElement(_Button.Button, null, "Right-aligned"))), _react["default"].createElement(_Layout.Space, {
    between: true
  }, _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: content
  }, _react["default"].createElement(_Button.Button, null, "Bottom-left-aligned")), _react["default"].createElement(_Menu.Menu, {
    iconGutter: true,
    content: content
  }, _react["default"].createElement(_Button.Button, null, "Bottom-right-aligned"))));
};

exports.NestedMenu = NestedMenu;
NestedMenu.parameters = {
  storyshots: {
    disable: true
  }
};

var NestedMenuAndFocusableDetails = function NestedMenuAndFocusableDetails() {
  var getOnClick = function getOnClick(text) {
    return function (e) {
      alert("You clicked ".concat(text));

      if (text === 'preventDefault') {
        e.preventDefault();
      }
    };
  };

  var nestedMenu = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Sub Item')
  }, "Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Another Sub Item')
  }, "Another Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Third Sub Item')
  }, "Third Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('4th Sub Item')
  }, "4th Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Fifth Sub Item')
  }, "Fifth Sub Item"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('preventDefault')
  }, "preventDefault"));

  var content = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuItem.MenuItem, {
    itemRole: "none",
    icon: _react["default"].createElement(_material.Download, null),
    detail: _react["default"].createElement(_Button.IconButton, {
      label: "Favorite",
      icon: _react["default"].createElement(_material.MoreVert, null)
    })
  }, "Download"), _react["default"].createElement(_MenuItem.MenuItem, {
    nestedMenu: nestedMenu
  }, "Sub Menu"), _react["default"].createElement(_MenuItem.MenuItem, {
    onClick: getOnClick('Sub Menu'),
    nestedMenu: nestedMenu
  }, "Sub Menu - with onClick"));

  return _react["default"].createElement(_Menu.Menu, {
    content: content
  }, _react["default"].createElement(_Button.Button, null, "Nested Menu"));
};

exports.NestedMenuAndFocusableDetails = NestedMenuAndFocusableDetails;
NestedMenuAndFocusableDetails.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Menu.stories.js.map