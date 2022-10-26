import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "firstDayOfWeek", "isRange", "locale", "onSelectDate", "onSelectRange", "onMonthChange", "readOnly", "selectedDate", "selectedRange", "showNextButton", "showPreviousButton", "viewMonth"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getDateLocale } from '@looker/i18n';
import { isAfter, isBefore, isSameDay } from 'date-fns';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';
import { useToggle } from '../utils';
import { DialogContext } from '../Dialog/DialogContext';
import { DaysOfWeek } from './DaysOfWeek';
import { CalendarNav } from './CalendarNav';
import { MonthList } from './MonthList';
import { MonthPickerNav } from './MonthPickerNav';

const getDatesSelected = (date, range) => {
  if (date && !range) return [date];

  if (range) {
    return [...(range.from ? [range.from] : []), ...(range.to ? [range.to] : [])];
  }

  return [];
};

export const Calendar = styled(_ref => {
  var _locale$options;

  let {
    className,
    firstDayOfWeek,
    isRange,
    locale = getDateLocale(),
    onSelectDate,
    onSelectRange,
    onMonthChange,
    readOnly,
    selectedDate,
    selectedRange,
    showNextButton,
    showPreviousButton,
    viewMonth = new Date()
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const datesSelected = getDatesSelected(selectedDate, selectedRange);
  const [draftTo, setDraftTo] = useState();
  const [baseMonth, setBaseMonth] = useState(viewMonth);
  const [activeInput, setActiveInput] = useState('from');
  const {
    value: showMonthPicker,
    setOn,
    setOff
  } = useToggle(false);
  const onOpenMonthPicker = useCallback(() => {
    setOn();
    setBaseMonth(viewMonth);
  }, [setOn, viewMonth]);
  const handleDraftSelect = useCallback(date => {
    if (isRange && selectedRange !== null && selectedRange !== void 0 && selectedRange.from && !selectedRange.to) {
      if (isSameDay(date, selectedRange.from) || isBefore(date, selectedRange.from)) {
        setDraftTo(undefined);
      } else {
        setDraftTo(date);
      }
    }
  }, [isRange, selectedRange]);
  const {
    closeModal
  } = useContext(DialogContext);
  const handleSelect = useCallback(date => {
    onSelectDate === null || onSelectDate === void 0 ? void 0 : onSelectDate(date);

    if (isRange) {
      const beforeFrom = (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.from) && isBefore(date, selectedRange.from);
      const afterTo = (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.to) && isAfter(date, selectedRange.to);

      if (activeInput === 'from') {
        if (!afterTo) {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            from: date
          }));
          setActiveInput('to');
        } else {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            to: date
          }));
        }
      } else if (activeInput === 'to') {
        if (!beforeFrom) {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            to: date
          }));
          setActiveInput('from');
        } else {
          onSelectRange === null || onSelectRange === void 0 ? void 0 : onSelectRange(_objectSpread(_objectSpread({}, selectedRange), {}, {
            from: date
          }));
        }
      }
    } else {
      closeModal();
    }
  }, [closeModal, selectedRange, onSelectRange, onSelectDate, activeInput, isRange]);
  const monthChangedFromScroll = useRef(false);
  useEffect(() => {
    if (!monthChangedFromScroll.current) {
      setBaseMonth(viewMonth);
    }
  }, [viewMonth]);
  const handleMonthChangeByScroll = useCallback(newMonth => {
    monthChangedFromScroll.current = true;
    onMonthChange(newMonth);
    window.setTimeout(() => {
      monthChangedFromScroll.current = false;
    }, 50);
  }, [onMonthChange]);
  const localeProps = {
    firstDayOfWeek: firstDayOfWeek || ((_locale$options = locale.options) === null || _locale$options === void 0 ? void 0 : _locale$options.weekStartsOn) || 0,
    locale
  };
  return React.createElement("div", _extends({
    className: className
  }, props), showMonthPicker ? React.createElement(MonthPickerNav, {
    locale: locale,
    date: viewMonth,
    onClose: setOff,
    onMonthChange: onMonthChange
  }) : React.createElement(React.Fragment, null, React.createElement(CalendarNav, {
    locale: locale,
    monthYear: viewMonth,
    onMonthChange: onMonthChange,
    onOpenMonthPicker: onOpenMonthPicker
  }), React.createElement(Divider, {
    appearance: "light"
  }), React.createElement(DaysOfWeek, localeProps), React.createElement(MonthList, _extends({}, localeProps, {
    onSelect: handleSelect,
    onDraftSelect: handleDraftSelect,
    draftTo: draftTo,
    currentDate: viewMonth,
    datesSelected: datesSelected,
    onMonthChange: handleMonthChangeByScroll,
    baseMonth: baseMonth,
    setBaseMonth: setBaseMonth
  }))));
}).withConfig({
  displayName: "Calendar",
  componentId: "sc-16c71io-0"
})(_t || (_t = _`
  font-family: ${0};
  width: fit-content;
`), ({
  theme
}) => theme.fonts.brand);
//# sourceMappingURL=Calendar.js.map