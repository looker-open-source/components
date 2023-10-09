const _excluded = ["className", "firstDayOfWeek", "isRange", "locale", "onSelectDate", "onSelectRange", "onMonthChange", "readOnly", "selectedDate", "selectedRange", "showNextButton", "showPreviousButton", "viewMonth"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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