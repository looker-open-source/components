import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["description", "detail", "preface"],
      _excluded2 = ["option"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { createContext, useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Icon, IconPlaceholder } from '../../../Icon';
import { Spinner } from '../../../Spinner';
import { ListDivider } from '../../../List/ListDivider';
import { ListItemPreface } from '../../../ListItem/ListItemPreface';
import { Heading, Paragraph, Text } from '../../../Text';
import { useID, useTranslation } from '../../../utils';
import { ComboboxContext, ComboboxMultiContext, ComboboxMultiOption, ComboboxOption, ComboboxOptionIndicator, ComboboxOptionText } from '../Combobox';
import { optionsHaveIcons, notInOptions } from './utils/options';
import { useWindowedOptions } from './utils/useWindowedOptions';
import { SelectOptionDetail } from './SelectOptionDetail';
export const SelectOptionsContext = createContext({
  hasIcons: false
});

const OptionLayoutBase = ({
  isMulti,
  option,
  scrollIntoView
}) => {
  const {
    description,
    detail,
    preface
  } = option,
        rest = _objectWithoutProperties(option, _excluded);

  const Component = isMulti ? ComboboxMultiOption : ComboboxOption;

  if (description || detail || preface) {
    return React.createElement(Component, _extends({}, rest, {
      py: preface || description ? 'xsmall' : 'xxsmall',
      scrollIntoView: scrollIntoView
    }), React.createElement(SelectOptionWithDescription, _extends({
      description: description,
      preface: preface
    }, rest)), detail && React.createElement(SelectOptionDetail, null, detail));
  }

  return React.createElement(Component, rest);
};

const OptionIcon = ({
  preface,
  icon
}) => icon ? React.createElement(Icon, {
  size: "small",
  mt: preface ? 'medium' : 'none',
  color: "text1",
  icon: icon,
  "data-testid": "option-icon"
}) : null;

const OptionLayout = _ref => {
  let {
    option
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded2);

  const {
    hasIcons
  } = useContext(SelectOptionsContext);
  const {
    indicatorPropRef
  } = useContext(ComboboxContext);
  const iconPlaceholder = hasIcons ? React.createElement(IconPlaceholder, {
    mr: "xsmall",
    size: "small",
    "data-testid": "option-icon-placeholder"
  }) : undefined;
  const indicator = option.icon ? React.createElement(OptionIcon, option) : option.indicator || (indicatorPropRef === null || indicatorPropRef === void 0 ? void 0 : indicatorPropRef.current) || iconPlaceholder;
  useEffect(() => {
    if (option.icon && option.indicator) {
      console.warn('Use icon or indicator but not both at the same time.');
    }
  }, [option.icon, option.indicator]);
  return React.createElement(OptionLayoutBase, _extends({}, rest, {
    option: _objectSpread(_objectSpread({}, option), {}, {
      indicator
    })
  }));
};

const MultiOptionLayout = props => React.createElement(OptionLayoutBase, _extends({}, props, {
  isMulti: true
}));

export const SelectOptionWithDescription = ({
  description,
  preface
}) => {
  return description || preface ? React.createElement("div", null, preface && React.createElement(ListItemPreface, null, preface), React.createElement(Paragraph, {
    fontSize: "small",
    lineHeight: "small"
  }, React.createElement(ComboboxOptionText, null)), description && React.createElement(Paragraph, {
    color: "text2",
    fontSize: "xsmall",
    lineHeight: "xsmall"
  }, description)) : React.createElement(ComboboxOptionText, null);
};
const SelectOptionGroupTitle = styled(Heading).attrs(() => ({
  color: 'text3',
  fontFamily: 'body',
  fontSize: 'xxsmall',
  fontWeight: 'semiBold',
  px: 'u2',
  py: 'u1'
})).withConfig({
  displayName: "SelectOptions__SelectOptionGroupTitle",
  componentId: "sc-8zhrcr-0"
})(_t || (_t = _`
  display: flex;
  padding-top: ${0};
`), ({
  theme
}) => theme.space.u1);
export const SelectOptions = props => {
  const {
    t
  } = useTranslation('SelectOptions');
  const noOptionsLabelText = t('No options');
  const {
    flatOptions,
    navigationOptions,
    isFilterable,
    showCreate,
    formatCreateLabel,
    isMulti,
    noOptionsLabel = noOptionsLabelText,
    windowing,
    isLoading
  } = props;
  const {
    start,
    end,
    before,
    after,
    scrollToFirst,
    scrollToLast
  } = useWindowedOptions(windowing, flatOptions, navigationOptions, isMulti);
  const keyPrefix = useID(flatOptions === null || flatOptions === void 0 ? void 0 : flatOptions.length.toString());
  const hasIcons = useMemo(() => optionsHaveIcons(navigationOptions), [navigationOptions]);

  if (isLoading) {
    return React.createElement(EmptyListItem, null, React.createElement(Spinner, {
      size: 30,
      "aria-label": t('Loading')
    }));
  }

  const optionsToRender = flatOptions ? flatOptions.slice(start, end + 1) : [];
  const OptionLayoutToUse = isMulti ? MultiOptionLayout : OptionLayout;
  const noOptions = React.createElement(EmptyListItem, null, React.createElement(Text, {
    color: "text3"
  }, noOptionsLabel));
  const createOption = isFilterable && showCreate && React.createElement(SelectCreateOption, {
    options: navigationOptions,
    formatLabel: formatCreateLabel,
    noOptions: noOptions,
    isMulti: isMulti,
    key: "create"
  });
  return React.createElement(SelectOptionsContext.Provider, {
    value: {
      hasIcons
    }
  }, navigationOptions && scrollToFirst ? React.createElement(OptionLayoutToUse, {
    option: navigationOptions[0],
    key: `${keyPrefix}-0`,
    scrollIntoView: true
  }) : null, before, optionsToRender && optionsToRender.length > 0 ? [...optionsToRender.map((option, index) => {
    const key = `${keyPrefix}-${start + index}`;

    if (option.value !== undefined) {
      const OptionLayoutToUse = isMulti ? MultiOptionLayout : OptionLayout;
      return React.createElement(OptionLayoutToUse, {
        option: option,
        key: key
      });
    } else if (option.label !== undefined) {
      return React.createElement(SelectOptionGroupTitle, {
        isMulti: isMulti,
        key: key
      }, React.createElement(ComboboxOptionIndicator, {
        indicator: isMulti && ' '
      }), option.label);
    }

    return React.createElement(ListDivider, {
      key: key
    });
  }), createOption] : createOption || noOptions, after, navigationOptions && scrollToLast ? React.createElement(OptionLayoutToUse, {
    option: navigationOptions[navigationOptions.length - 1],
    key: `${keyPrefix}-${navigationOptions.length - 1}`,
    scrollIntoView: true
  }) : null);
};

const SelectCreateOption = ({
  options,
  noOptions,
  formatLabel,
  isMulti
}) => {
  const {
    data
  } = useContext(ComboboxContext);
  const {
    data: dataMulti
  } = useContext(ComboboxMultiContext);
  const inputValue = isMulti ? dataMulti.inputValue : data.inputValue;
  const shouldShow = useMemo(() => {
    let currentOptions = [];

    if (isMulti) {
      currentOptions = dataMulti.options;
    } else if (data.option) {
      currentOptions = [data.option];
    }

    return notInOptions(currentOptions, options, inputValue);
  }, [isMulti, data.option, dataMulti.options, options, inputValue]);

  if (!shouldShow || !inputValue) {
    if (!options || options.length === 0) return React.createElement(React.Fragment, null, noOptions);
    return null;
  }

  const OptionComponent = isMulti ? ComboboxMultiOption : ComboboxOption;
  return React.createElement(OptionComponent, {
    value: inputValue,
    highlightText: false,
    indicator: false
  }, formatLabel ? formatLabel(inputValue) : `Create "${inputValue}"`);
};

const EmptyListItem = styled.li.withConfig({
  displayName: "SelectOptions__EmptyListItem",
  componentId: "sc-8zhrcr-1"
})(_t2 || (_t2 = _`
  display: flex;
  justify-content: center;
  padding: ${0};
`), ({
  theme
}) => `${theme.space.u8} ${theme.space.u4}`);
//# sourceMappingURL=SelectOptions.js.map