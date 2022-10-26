import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _2 = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { isSameMonth } from 'date-fns';
import debounce from 'lodash/debounce';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useCallbackRef, useMeasuredElement, useScrollPosition } from '../utils';
export const ScrollableDateList = styled(({
  className,
  currentDate,
  baseMonth,
  setBaseMonth,
  buffer,
  getItemDate,
  onMonthChange,
  itemComponent: Component,
  itemProps,
  thresholdRatio
}) => {
  const [containerElement, ref] = useCallbackRef();
  const [{
    height
  }] = useMeasuredElement(containerElement);
  const scrollPosition = useScrollPosition(containerElement);
  const itemPositions = useRef([]);
  const dates = useMemo(() => {
    const total = Array(buffer * 2 + 1);
    const dateArray = Array.from(total, (_, i) => getItemDate(baseMonth, i - buffer));
    itemPositions.current = dateArray.map(d => ({
      date: d
    }));
    return dateArray;
  }, [baseMonth, buffer, getItemDate]);
  const containerHasHeight = height !== 0;
  const setItemPosition = useCallback((index, element) => {
    if (containerHasHeight) {
      itemPositions.current[index] = _objectSpread(_objectSpread({}, itemPositions.current[index]), {}, {
        bottom: element.offsetTop + element.offsetHeight,
        top: element.offsetTop
      });
    }
  }, [containerHasHeight]);
  const hasAutoScrolledToBaseItem = useRef(false);
  useEffect(() => {
    hasAutoScrolledToBaseItem.current = false;
  }, [baseMonth, buffer]);
  useEffect(() => {
    let t = 0;

    if (containerElement && height) {
      if (!hasAutoScrolledToBaseItem.current) {
        const currentMonth = itemPositions.current.find(itemPos => isSameMonth(itemPos.date, baseMonth));

        if (currentMonth !== null && currentMonth !== void 0 && currentMonth.top && currentMonth !== null && currentMonth !== void 0 && currentMonth.bottom) {
          const closeToBottom = scrollPosition > containerElement.scrollHeight - height * 2;
          const scrollTarget = closeToBottom ? currentMonth.bottom - height : currentMonth.top;
          containerElement.scrollTo(0, scrollTarget);
          hasAutoScrolledToBaseItem.current = true;
        }
      } else {
        const atTop = scrollPosition === 0;
        const atBottom = scrollPosition === containerElement.scrollHeight - height;

        if (atTop || atBottom) {
          const goToMonth = atTop ? dates[0] : dates[dates.length - 1];
          onMonthChange(goToMonth);
          setBaseMonth(goToMonth);
        } else {
          const updateCurrentMonth = debounce(() => {
            const threshold = scrollPosition + height * thresholdRatio;
            const inView = itemPositions.current.find(itemPos => itemPos.top && itemPos.bottom && threshold > itemPos.top && threshold < itemPos.bottom);

            if (inView && !isSameMonth(currentDate, inView.date)) {
              onMonthChange(inView.date);
            }
          });
          t = window.setTimeout(updateCurrentMonth, 50);
        }
      }
    }

    return () => {
      window.clearTimeout(t);
    };
  }, [containerElement, currentDate, height, scrollPosition, dates, onMonthChange, setBaseMonth, thresholdRatio, baseMonth]);
  const inViewIndex = dates.findIndex(d => isSameMonth(d, currentDate));
  return React.createElement("div", {
    className: className,
    ref: ref
  }, dates.map((item, i) => {
    const fullRender = Math.abs(i - inViewIndex) <= 1;
    return React.createElement(Component, _extends({
      key: item.toString(),
      index: i,
      fullRender: fullRender,
      date: item
    }, itemProps, {
      setItemPosition: setItemPosition
    }));
  }));
}).withConfig({
  displayName: "ScrollableDateList",
  componentId: "sc-1jksxb7-0"
})(_t || (_t = _2`
  height: 220px;
  overflow-y: scroll;
  position: relative;
`));
//# sourceMappingURL=ScrollableDateList.js.map