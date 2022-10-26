import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["debouncedFilterTerm"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useDebounce } from 'use-debounce';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from '../../utils';
import { createOptions, filterOptions } from './option_utils';

const useExtendedOptions = (options, values, filterTerm, limit, excludeValues) => {
  return useMemo(() => {
    const needToAppendValues = !excludeValues && filterTerm === '' && values.length > 0 && options.length >= limit;

    const valueInOptions = value => options.find(option => option.value === value);

    const reducer = (acc, value) => {
      if (!valueInOptions(value)) {
        acc.push(value);
      }

      return acc;
    };

    const valuesToAppend = needToAppendValues ? values.reduce(reducer, []) : [];
    return [...options, ...createOptions(valuesToAppend)];
  }, [options, values, filterTerm, limit, excludeValues]);
};

export const useDebouncedFilterTerm = onInputChange => {
  const {
    t
  } = useTranslation('use_option_filtering');
  const [filterTerm, setFilterTerm] = useState('');
  const [debouncedFilterTerm] = useDebounce(filterTerm, 150, {
    leading: true
  });
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(debouncedFilterTerm.trim());
    }

    isFirstRender.current = false;
  }, [debouncedFilterTerm]);
  const noOptionsLabel = filterTerm === '' ? t('No values') : `${t('No values match')} "${debouncedFilterTerm}"`;
  return {
    debouncedFilterTerm,
    noOptionsLabel,
    onFilter: setFilterTerm
  };
};
export const useOptionFiltering = ({
  excludeValues,
  limit: _limit = 999,
  onInputChange,
  options,
  value
}) => {
  let values;

  if (typeof value === 'string') {
    if (value === '') {
      values = [];
    } else {
      values = [value];
    }
  } else {
    values = value;
  }

  const _useDebouncedFilterTe = useDebouncedFilterTerm(onInputChange),
        {
    debouncedFilterTerm
  } = _useDebouncedFilterTe,
        rest = _objectWithoutProperties(_useDebouncedFilterTe, _excluded);

  const extendedOptions = useExtendedOptions(options, values, debouncedFilterTerm, _limit, excludeValues);
  const filteredOptions = useMemo(() => {
    return filterOptions(extendedOptions, debouncedFilterTerm, excludeValues ? values : []);
  }, [extendedOptions, debouncedFilterTerm, values]);
  return _objectSpread({
    filteredOptions,
    debouncedFilterTerm
  }, rest);
};
//# sourceMappingURL=use_option_filtering.js.map