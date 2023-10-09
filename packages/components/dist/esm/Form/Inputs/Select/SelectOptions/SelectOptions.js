let _ = t => t,
  _t,
  _t2;
const _excluded = ["description", "detail", "preface"],
  _excluded2 = ["option"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Icon, IconPlaceholder } from '../../../../Icon';
import { Spinner } from '../../../../Spinner';
import { ListDivider } from '../../../../List/ListDivider';
import { ListItemPreface } from '../../../../ListItem/ListItemPreface';
import { Heading, Paragraph, Text } from '../../../../Text';
import { useID, useTranslation } from '../../../../utils';
import { ComboboxContext, ComboboxMultiContext, ComboboxMultiOption, ComboboxOption, ComboboxOptionIndicator, ComboboxOptionText } from '../../Combobox';
import { optionsHaveIcons, notInOptions } from '../utils/options';
import { useWindowedOptions } from '../utils/useWindowedOptions';
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
  componentId: "sc-6v9k5p-0"
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
    scrollTo
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
  }, scrollTo, before, optionsToRender && optionsToRender.length > 0 ? [...optionsToRender.map((option, index) => {
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
  }), createOption] : createOption || noOptions, after);
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
  componentId: "sc-6v9k5p-1"
})(_t2 || (_t2 = _`
  display: flex;
  justify-content: center;
  padding: ${0};
`), ({
  theme
}) => `${theme.space.u8} ${theme.space.u4}`);
//# sourceMappingURL=SelectOptions.js.map