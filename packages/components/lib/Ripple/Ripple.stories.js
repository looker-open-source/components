import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["bounded", "className", "color", "height", "width"],
      _excluded2 = ["callbacks"],
      _excluded3 = ["className", "color", "height", "width"],
      _excluded4 = ["callbacks"];

let _ = t => t,
    _t,
    _t2,
    _t3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import styled, { css } from 'styled-components';
import { simpleLayoutCSS } from '../Layout';
import { useRipple, useBoundedRipple, useRippleHandlers, rippleStyle } from './';
const styles = css(_t || (_t = _`
  ${0}
  ${0}

align-items: center;
  display: flex;
  justify-content: center;
`), simpleLayoutCSS, rippleStyle);
const Ripple = styled(_ref => {
  let {
    bounded,
    className,
    color,
    height,
    width
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _useRipple = useRipple({
    bounded,
    className,
    color,
    height,
    width
  }),
        {
    callbacks
  } = _useRipple,
        rippleProps = _objectWithoutProperties(_useRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, {});
  return React.createElement("div", _extends({
    tabIndex: 0
  }, rippleProps, rippleHandlers, props), "click me");
}).withConfig({
  displayName: "Ripplestories__Ripple",
  componentId: "sc-15a2avg-0"
})(_t2 || (_t2 = _`
  ${0}
`), styles);
const BoundedRipple = styled(_ref2 => {
  let {
    className,
    color,
    height,
    width
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded3);

  const _useBoundedRipple = useBoundedRipple({
    className,
    color
  }),
        {
    callbacks
  } = _useBoundedRipple,
        rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded4);

  const rippleHandlers = useRippleHandlers(callbacks, {});
  return React.createElement("div", _extends({
    tabIndex: 0
  }, rippleProps, rippleHandlers, props), "click me");
}).withConfig({
  displayName: "Ripplestories__BoundedRipple",
  componentId: "sc-15a2avg-1"
})(_t3 || (_t3 = _`
  ${0}
`), styles);

const Template = args => React.createElement(Ripple, args);

const BoundedTemplate = args => React.createElement(BoundedRipple, args);

export const Basic = Template.bind({});
Basic.args = {
  height: 80,
  width: 80
};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Bounded = BoundedTemplate.bind({});
Bounded.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  width: 200
});
Bounded.parameters = {
  storyshots: {
    disable: true
  }
};
export const Key = Template.bind({});
Key.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'key'
});
Key.parameters = {
  storyshots: {
    disable: true
  }
};
export const Critical = Template.bind({});
Critical.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'critical'
});
Critical.parameters = {
  storyshots: {
    disable: true
  }
};
export const Calculation = Template.bind({});
Calculation.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'calculation'
});
Calculation.parameters = {
  storyshots: {
    disable: true
  }
};
export const Dimension = Template.bind({});
Dimension.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'dimension'
});
Dimension.parameters = {
  storyshots: {
    disable: true
  }
};
export const Measure = Template.bind({});
Measure.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'measure'
});
Measure.parameters = {
  storyshots: {
    disable: true
  }
};
export const NoAnimation = () => React.createElement(Ripple, {
  height: 80,
  width: 80
});
NoAnimation.parameters = {
  storyshots: {
    disable: true
  }
};
export default {
  component: Ripple,
  title: 'Ripple'
};
//# sourceMappingURL=Ripple.stories.js.map