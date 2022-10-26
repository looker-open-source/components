import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Create, Favorite } from '@styled-icons/material';
import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ComboboxContext, ComboboxMultiContext, ComboboxUl } from '../../Combobox';
import { Icon } from '../../../../Icon';
import { SelectOptions } from '../SelectOptions';
import { useFlatOptions } from '../utils/useFlatOptions';
import { cheeseOptions, iconOptions, optionsWithGroups } from './options';

const Template = args => {
  const optionProps = useFlatOptions(args.options);
  return React.createElement(ComboboxContext.Provider, {
    value: {
      data: {
        navigationOption: {
          value: 'cheddar'
        },
        option: {
          value: 'swiss'
        }
      },
      listClientRect: {
        height: 1000
      },
      listScrollPosition: 0
    }
  }, React.createElement(ComboboxUl, {
    isMulti: false,
    height: "100%"
  }, React.createElement(SelectOptions, _extends({}, args, optionProps))));
};

export const Basic = Template.bind({});
Basic.args = {
  options: cheeseOptions
};
export const Icons = Template.bind({});
Icons.args = {
  options: iconOptions
};
export const Detail = Template.bind({});
const detailOptions = cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
  detail: React.createElement(React.Fragment, null, React.createElement(Icon, {
    icon: React.createElement(Favorite, null)
  }), React.createElement(Icon, {
    icon: React.createElement(Favorite, null)
  }), React.createElement(Icon, {
    icon: React.createElement(Favorite, null)
  }))
}));
Detail.args = {
  options: detailOptions
};
export const Description = Template.bind({});
const descriptionOptions = cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
  description: "I'm a little teapot"
}));
Description.args = {
  options: descriptionOptions
};
export const DescriptionIcon = Template.bind({});
DescriptionIcon.args = {
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    description: "I'm a little teapot",
    icon: React.createElement(Create, null)
  }))
};
export const Preface = Template.bind({});
Preface.args = {
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    preface: 'Preface Text'
  }))
};
export const PrefaceIcon = Template.bind({});
PrefaceIcon.args = {
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    icon: React.createElement(Create, null),
    preface: 'Preface Text'
  }))
};
export const Groups = Template.bind({});
Groups.args = {
  options: optionsWithGroups
};
export const KitchenSink = Template.bind({});
KitchenSink.args = {
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    description: "I'm a little teapot",
    detail: '0/50',
    icon: React.createElement(Favorite, null),
    preface: 'Preface Text'
  }))
};
export const Loading = Template.bind({});
Loading.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  isLoading: true
});
Loading.parameters = {
  storyshots: {
    disable: true
  }
};
export const NoOptions = Template.bind({});

const TemplateMulti = args => {
  const optionProps = useFlatOptions(args.options);
  return React.createElement(ComboboxMultiContext.Provider, {
    value: {
      data: {
        navigationOption: {
          value: 'cheddar'
        },
        options: [{
          value: 'swiss'
        }]
      },
      listClientRect: {
        height: 1000
      },
      listScrollPosition: 0
    }
  }, React.createElement(ComboboxUl, {
    isMulti: true,
    height: "100%"
  }, React.createElement(SelectOptions, _extends({}, args, optionProps))));
};

export const BasicMulti = TemplateMulti.bind({});
BasicMulti.args = {
  isMulti: true,
  options: cheeseOptions
};
export const DetailMulti = TemplateMulti.bind({});
DetailMulti.args = {
  isMulti: true,
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    detail: '0/50'
  }))
};
export const DescriptionMulti = TemplateMulti.bind({});
DescriptionMulti.args = {
  isMulti: true,
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    description: "I'm a little teapot"
  }))
};
export const GroupsMulti = TemplateMulti.bind({});
GroupsMulti.args = {
  isMulti: true,
  options: optionsWithGroups
};
export const NoIndicatorMulti = TemplateMulti.bind({});
NoIndicatorMulti.args = {
  isMulti: true,
  options: cheeseOptions.map(option => _objectSpread(_objectSpread({}, option), {}, {
    indicator: false
  }))
};
export default {
  argTypes,
  component: SelectOptions,
  title: 'SelectOptions'
};
//# sourceMappingURL=SelectOptions.stories.js.map