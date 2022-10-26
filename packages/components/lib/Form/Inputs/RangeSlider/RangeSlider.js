let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;

import React, { forwardRef, useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { reset, space, typography } from '@looker/design-tokens';
import styled from 'styled-components';
import sortBy from 'lodash/sortBy';
import indexOf from 'lodash/indexOf';
import startsWith from 'lodash/startsWith';
import partial from 'lodash/partial';
import map from 'lodash/map';
import isEqual from 'lodash/isEqual';
import { useMeasuredElement, useMouseDragPosition, useReadOnlyWarn, usePreviousValue, useTranslation } from '../../../utils';
import { getPrecision, precisionRound } from './precisionUtils';

const sort = arr => arr.sort((a, b) => a - b);

const findClosestIndex = (value, newPoint) => {
  const {
    index: closestIndex
  } = sortBy(value.map((p, i) => ({
    distance: Math.abs(p - newPoint),
    index: i
  })), 'distance')[0];
  return closestIndex;
};

const createNewValue = (value, newPoint, focusedIndex) => {
  const indexToReplace = focusedIndex === undefined ? findClosestIndex(value, newPoint) : focusedIndex;
  const newValue = Object.assign([], value, {
    [indexToReplace]: newPoint
  });
  return sort(newValue);
};

const roundToStep = (min, max, step, newPoint) => {
  const stepPrecision = getPrecision(step);
  const roundedPoint = precisionRound((newPoint - min) / step * step + min, stepPrecision);
  return Math.max(Math.min(roundedPoint, max), min);
};

const calculatePointValue = (mouseX, containerRect, min, max, step) => {
  const mousePosition = mouseX - containerRect.left;
  const possibleValueRange = max - min;
  const newPoint = mousePosition / containerRect.width * possibleValueRange + min;
  return roundToStep(min, max, step, newPoint);
};

const boundValueProp = (min, max, value) => {
  return map(value || [min, max], point => {
    const boundedPoint = Math.max(Math.min(point, max), min);

    if (boundedPoint !== point) {
      console.warn(`<RangeSlider />: The value '${point}' falls outside the possible range (MIN: ${min}, MAX: ${max}). Please adjust min and max props accordingly.`);
    }

    return boundedPoint;
  });
};

export const InternalRangeSlider = forwardRef(({
  className,
  id,
  min: _min = 0,
  max: _max = 10,
  step: _step = 1,
  value: valueFromProps,
  defaultValue: defaultValueProp,
  onChange,
  disabled: _disabled = false,
  readOnly: readOnlyProp = false,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  name
}, ref) => {
  const {
    t
  } = useTranslation('RangeSlider');
  const valuePropMin = valueFromProps === null || valueFromProps === void 0 ? void 0 : valueFromProps[0];
  const valuePropMax = valueFromProps === null || valueFromProps === void 0 ? void 0 : valueFromProps[1];
  const valueProp = useMemo(() => {
    if (valuePropMin === undefined || valuePropMax === undefined) {
      return undefined;
    }

    return [valuePropMin, valuePropMax];
  }, [valuePropMin, valuePropMax]);
  const unintentionalReadOnly = useReadOnlyWarn('RangeSlider', valueProp, onChange);
  const readOnly = readOnlyProp || unintentionalReadOnly;
  const [valueState, setValue] = useState(() => {
    const boundedValue = boundValueProp(_min, _max, valueProp || defaultValueProp);
    return sort(boundedValue);
  });
  const valueMin = valueState[0];
  const valueMax = valueState[1];
  const value = useMemo(() => {
    return [valueMin, valueMax];
  }, [valueMin, valueMax]);
  const [containerRef, setContainerRef] = useState(null);
  const [focusedThumb, setFocusedThumb] = useState();
  const [containerRect, refreshDomRect] = useMeasuredElement(containerRef);
  const {
    mousePos,
    isMouseDown
  } = useMouseDragPosition(containerRef);
  const previousIsMouseDown = usePreviousValue(isMouseDown);
  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);
  const [minValue, maxValue] = value;
  const minPos = (minValue - _min) / (_max - _min) * containerRect.width;
  const maxPos = (maxValue - _min) / (_max - _min) * containerRect.width;
  const fillWidth = maxPos - minPos;
  const roundSliderValue = partial(roundToStep, _min, _max, _step);
  const focusChangedPoint = useCallback((newValue, newPoint) => {
    const indexToFocus = indexOf(newValue, newPoint);
    const thumbRefs = [minThumbRef, maxThumbRef];
    const refToFocus = thumbRefs[indexToFocus];
    setFocusedThumb(indexToFocus);
    refToFocus.current && refToFocus.current.focus();
  }, []);

  const incrementPoint = (point, stepMultiplier = 1) => point + _step * stepMultiplier;

  const decrementPoint = (point, stepMultiplier = 1) => point - _step * stepMultiplier;

  const handleKeyboardNav = e => {
    if (!_disabled && !readOnly) {
      if (startsWith(e.key, 'Arrow') && focusedThumb !== undefined) {
        e.preventDefault();
        const unfocusedThumb = focusedThumb === 0 ? 1 : 0;
        const mutationFn = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? incrementPoint : decrementPoint;
        const newPoint = roundSliderValue(mutationFn(value[focusedThumb], e.shiftKey ? 10 : 1));
        const newValue = sort([newPoint, value[unfocusedThumb]]);
        focusChangedPoint(newValue, newPoint);
        setValue(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
      }
    }
  };

  const focusMinThumb = () => {
    if (!_disabled && !readOnly) {
      setFocusedThumb(0);
    }
  };

  const focusMaxThumb = () => {
    if (!_disabled && !readOnly) {
      setFocusedThumb(1);
    }
  };

  const handleBlur = () => {
    setFocusedThumb(undefined);
  };

  const handleMouseEvent = useCallback(maintainFocus => {
    if (!_disabled && !readOnly && mousePos.x) {
      const newPoint = calculatePointValue(mousePos.x, containerRect, _min, _max, _step);
      const newValue = createNewValue(value, newPoint, maintainFocus ? focusedThumb : undefined);
      focusChangedPoint(newValue, newPoint);

      if (!isEqual(value, newValue)) {
        setValue(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
      }
    }
  }, [containerRect, _disabled, focusChangedPoint, focusedThumb, _max, _min, mousePos.x, onChange, readOnly, _step, value]);
  const handleMouseDown = useMemo(() => partial(handleMouseEvent, false), [handleMouseEvent]);
  const handleMouseDrag = useMemo(() => partial(handleMouseEvent, true), [handleMouseEvent]);
  useEffect(() => {
    if (isMouseDown) {
      refreshDomRect();
    }
  }, [isMouseDown, refreshDomRect]);
  useEffect(() => {
    if (isMouseDown) {
      handleMouseDown();
    }
  }, [isMouseDown, handleMouseDown, containerRect]);
  useEffect(() => {
    if (isMouseDown && previousIsMouseDown) {
      handleMouseDrag();
    }
  }, [isMouseDown, previousIsMouseDown, handleMouseDrag, mousePos]);
  const previousValueProp = usePreviousValue(valueProp);
  useEffect(() => {
    const boundedValueProp = boundValueProp(_min, _max, valueProp);

    if (valueProp && !isEqual(value, boundedValueProp) && !isEqual(valueProp, previousValueProp)) {
      setValue(sort(boundedValueProp));
    }
  }, [valueProp, previousValueProp, value, _min, _max]);
  useEffect(() => {
    const boundedValueProp = boundValueProp(_min, _max, valueProp);

    if (valueProp && !isEqual(valueProp, boundedValueProp)) {
      onChange === null || onChange === void 0 ? void 0 : onChange(sort(boundedValueProp));
    }
  }, [valueProp, onChange, _min, _max]);
  return React.createElement("div", {
    "data-testid": "range-slider-wrapper",
    onTouchEnd: handleBlur,
    className: className,
    id: id,
    ref: setContainerRef
  }, React.createElement(SliderTrack, {
    ref: ref,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby
  }, React.createElement(SliderFill, {
    fillStart: minPos,
    fillWidth: fillWidth,
    disabled: _disabled
  }), React.createElement(ThumbLabel, {
    position: minPos,
    focus: focusedThumb === 0,
    disabled: _disabled
  }, minValue), React.createElement(ThumbLabel, {
    position: maxPos,
    focus: focusedThumb === 1,
    disabled: _disabled
  }, maxValue), React.createElement(Thumb, {
    position: minPos,
    tabIndex: _disabled ? '-1' : '0',
    onFocus: focusMinThumb,
    onBlur: handleBlur,
    onKeyDown: handleKeyboardNav,
    ref: minThumbRef,
    disabled: _disabled,
    "aria-label": name ? t('Minimum Name', {
      name
    }) : t('Minimum Value'),
    role: "slider",
    "aria-valuemin": _min,
    "aria-valuemax": _max,
    "aria-disabled": _disabled,
    "aria-valuenow": value[0]
  }), React.createElement(Thumb, {
    position: maxPos,
    tabIndex: _disabled ? '-1' : '0',
    onFocus: focusMaxThumb,
    onBlur: handleBlur,
    onKeyDown: handleKeyboardNav,
    ref: maxThumbRef,
    disabled: _disabled,
    "aria-label": name ? t('Maximum Name', {
      name
    }) : t('Maximum Value'),
    role: "slider",
    "aria-valuemin": _min,
    "aria-valuemax": _max,
    "aria-disabled": _disabled,
    "aria-valuenow": value[1]
  })));
});
InternalRangeSlider.displayName = 'InternalRangeSlider';
export const RangeSlider = styled(InternalRangeSlider).attrs(({
  fontSize: _fontSize = 'small',
  lineHeight: _lineHeight = 'xsmall'
}) => ({
  fontSize: _fontSize,
  lineHeight: _lineHeight
})).withConfig({
  displayName: "RangeSlider",
  componentId: "sc-1w8bpgp-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  padding: 1.5rem 0 0.5rem;
  touch-action: none;
  user-select: none;
`), reset, space, typography);
const SliderTrack = styled.div.withConfig({
  displayName: "RangeSlider__SliderTrack",
  componentId: "sc-1w8bpgp-1"
})(_t2 || (_t2 = _`
  background: ${0};
  border-radius: 2px;
  height: 4px;
  position: relative;
`), ({
  theme
}) => theme.colors.ui2);
const ThumbLabel = styled.div.withConfig({
  displayName: "RangeSlider__ThumbLabel",
  componentId: "sc-1w8bpgp-2"
})(_t3 || (_t3 = _`
  background: ${0};
  border-radius: 1rem;
  color: ${0};
  padding: 0 0.5rem;
  position: absolute;
  text-align: center;
  top: -24px;
  transform: translateX(${0})
    translateX(-50%);
  user-select: none;
  z-index: ${0};
`), ({
  theme,
  focus
}) => focus && theme.colors.keyAccent, ({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.neutral : colors.key, ({
  position: _position = 0
}) => `${_position}px`, ({
  focus
}) => focus ? 1 : 0);
const Thumb = styled.div.withConfig({
  displayName: "RangeSlider__Thumb",
  componentId: "sc-1w8bpgp-3"
})(_t4 || (_t4 = _`
  background: ${0};
  border: 3px solid
    ${0};
  border-radius: 100%;
  cursor: pointer;
  height: 16px;
  margin-left: -8px;
  position: absolute;
  top: -6px;
  transform: translateX(${0});
  width: 16px;
  &:focus {
    border-width: ${0};
    outline: none;
    z-index: 1;
  }
`), ({
  theme
}) => theme.colors.field, ({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.neutral : colors.key, ({
  position: _position2 = 0
}) => `${_position2}px`, ({
  disabled
}) => disabled ? '3px' : '5px');
const SliderFill = styled.div.withConfig({
  displayName: "RangeSlider__SliderFill",
  componentId: "sc-1w8bpgp-4"
})(_t5 || (_t5 = _`
  background: ${0};
  height: 100%;
  left: ${0}px;
  position: absolute;
  width: ${0}px;
`), ({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.neutral : colors.key, ({
  fillStart
}) => fillStart, ({
  fillWidth
}) => fillWidth);
//# sourceMappingURL=RangeSlider.js.map