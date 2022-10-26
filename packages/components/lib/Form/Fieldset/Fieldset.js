import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["accordion", "className", "inline", "gap", "legend", "fieldsHideLabel", "children", "wrap", "defaultOpen", "isOpen", "toggleOpen", "onClose", "onOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { createContext, forwardRef } from 'react';
import styled from 'styled-components';
import { omitStyledProps } from '@looker/design-tokens';
import { Space, SpaceVertical } from '../../Layout';
import { simpleLayoutCSS } from '../../Layout/utils/simple';
import { Legend } from '../Legend';
import { Accordion2 } from '../../Accordion2';
import { accordionDimensions } from '../../Accordion2/accordionDimensions';
export const FieldsetContext = createContext({});
const FieldsetLayout = forwardRef((props, ref) => {
  const {
    accordion,
    className,
    inline,
    gap = 'u4',
    legend,
    fieldsHideLabel,
    children,
    wrap,
    defaultOpen,
    isOpen,
    toggleOpen,
    onClose,
    onOpen
  } = props,
        restProps = _objectWithoutProperties(props, _excluded);

  const LayoutComponent = inline ? Space : SpaceVertical;
  const content = React.createElement(LayoutComponent, {
    gap: gap,
    ref: ref,
    role: "group",
    align: "start",
    flexWrap: wrap ? 'wrap' : undefined
  }, children);
  !legend && accordion && console.warn('Please provide a value for the "legend" prop if using accordion mode');
  const LegendComponent = accordion ? FieldsetAccordionLegend : Legend;
  const legendRender = typeof legend === 'string' ? React.createElement(LegendComponent, null, legend) : legend;
  let accordionProps = {
    defaultOpen,
    indicatorPosition: 'left',
    label: legendRender,
    onClose,
    onOpen
  };

  if (isOpen && toggleOpen) {
    accordionProps = _objectSpread(_objectSpread({}, accordionProps), {}, {
      isOpen,
      toggleOpen
    });
  }

  let renderedFieldset = content;

  if (legend) {
    if (accordion) {
      renderedFieldset = React.createElement(Accordion2, accordionProps, React.createElement(FieldsetAccordionContent, null, content));
    } else {
      renderedFieldset = React.createElement(SpaceVertical, null, legendRender, content);
    }
  }

  return React.createElement(FieldsetContext.Provider, {
    value: {
      fieldsHideLabel: fieldsHideLabel || false
    }
  }, React.createElement("div", _extends({}, omitStyledProps(restProps), {
    className: className
  }), renderedFieldset));
});

const FieldsetAccordionLegend = props => React.createElement(Legend, _extends({
  py: "xxsmall",
  fontSize: "small"
}, props));

FieldsetLayout.displayName = 'FieldsetLayout';
const FieldsetAccordionContent = styled.div.withConfig({
  displayName: "Fieldset__FieldsetAccordionContent",
  componentId: "sc-fc4a60-0"
})(_t || (_t = _`
  padding-left: ${0};
  padding-top: ${0};
`), ({
  theme
}) => `calc(${theme.sizes[accordionDimensions().indicatorSize]} + ${theme.space[accordionDimensions().indicatorGap]})`, ({
  theme
}) => theme.space.u4);
export const Fieldset = styled(FieldsetLayout).attrs(({
  width: _width = '100%'
}) => ({
  width: _width
})).withConfig({
  displayName: "Fieldset",
  componentId: "sc-fc4a60-1"
})(_t2 || (_t2 = _`
  ${0}
`), simpleLayoutCSS);
//# sourceMappingURL=Fieldset.js.map