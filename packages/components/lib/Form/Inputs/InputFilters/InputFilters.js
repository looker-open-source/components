import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2;

const _excluded = ["className", "filters", "hideFilterIcon", "onChange"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import omit from 'lodash/omit';
import styled from 'styled-components';
import React, { useMemo, useState, useRef } from 'react';
import { Close } from '@styled-icons/material/Close';
import { FilterList } from '@styled-icons/material/FilterList';
import { Select } from '../Select';
import { InputText, inputTextFocus, inputCSS } from '../InputText';
import { Icon } from '../../../Icon';
import { IconButton } from '../../../Button';
import { Chip } from '../../../Chip';
import { Text } from '../../../Text';
import { Popover, PopoverContent } from '../../../Popover';
import { useTranslation } from '../../../utils';
import { InputFiltersChip } from './InputFiltersChip';
import { inputFilterEditor } from './inputFilterEditor';

const InputFiltersLayout = _ref => {
  let {
    className,
    filters,
    hideFilterIcon = false,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = useTranslation('InputFilters');
  const placeholder = props.placeholder || t('Filter List');
  const [fieldEditing, setFieldEditing] = useState(undefined);
  const assignedFilters = filters.filter(filter => filter.value || filter.field === fieldEditing).sort((a, b) => {
    if (a.value === undefined) {
      return 1;
    } else if (b.value === undefined) {
      return -1;
    } else {
      return 0;
    }
  });
  const unassignedFilters = filters.filter(filter => !assignedFilters.map(assigned => assigned.field).includes(filter.field));
  const [filterTerm, setFilterTerm] = useState('');
  const options = useMemo(() => unassignedFilters.reduce((acc, filter) => {
    const option = {
      label: filter.label || filter.field,
      value: filter.field
    };
    const optionMatchesFilter = Object.values(option).some(value => value.toLocaleLowerCase().indexOf(filterTerm.toLocaleLowerCase()) > -1);

    if (optionMatchesFilter) {
      acc = [...acc, option];
    }

    return acc;
  }, []), [filterTerm, unassignedFilters]);
  const inputRef = useRef(null);
  const isClearable = assignedFilters.length > 0;

  const clearFilters = () => {
    onChange(filters.map(filter => omit(filter, 'value')));
  };

  const focusInput = () => inputRef.current && inputRef.current.focus();

  const handleFilterLookupChange = field => {
    const filter = filters.find(option => option.field === field);

    if (filter) {
      setFieldEditing(filter.field);
    }
  };

  return React.createElement("div", {
    className: className,
    onClick: focusInput
  }, !hideFilterIcon && React.createElement(Icon, {
    color: "ui4",
    mr: "xsmall",
    mt: "xxsmall",
    icon: React.createElement(FilterList, null),
    size: 20
  }), React.createElement(ChipWrapper, null, assignedFilters.map((filter, i) => {
    const {
      editor,
      field,
      value
    } = filter;

    const editFilter = () => setFieldEditing(field);

    const handleDelete = () => onChange(filters.map(currentFilter => currentFilter.field !== field ? currentFilter : omit(currentFilter, 'value')));

    const setFieldEditingValue = value => {
      const filterIndex = assignedFilters.findIndex(f => f.field === fieldEditing);
      const newFilters = [...assignedFilters, ...unassignedFilters];

      const updateFilter = _objectSpread(_objectSpread({}, newFilters[filterIndex]), {}, {
        value
      });

      newFilters[filterIndex] = updateFilter;
      onChange(newFilters);
    };

    const closeEditor = () => setFieldEditing(undefined);

    const filterToken = value ? React.createElement(InputFiltersChip, {
      filter: filter,
      key: i,
      onClick: editFilter,
      onDelete: handleDelete
    }) : React.createElement(Text, {
      fontSize: "small",
      lineHeight: "xlarge"
    }, (filter === null || filter === void 0 ? void 0 : filter.label) || filter.field, ":");
    return filter.field === fieldEditing ? React.createElement(Popover, {
      content: React.createElement(PopoverContent, null, editor ? editor({
        closeEditor,
        filterOptions: filter,
        onChange: setFieldEditingValue,
        value
      }) : inputFilterEditor({
        closeEditor,
        filterOptions: filter,
        onChange: setFieldEditingValue,
        value
      })),
      isOpen: fieldEditing !== undefined,
      key: i,
      placement: t('bottom-start'),
      setOpen: closeEditor
    }, filterToken) : filterToken;
  }), !fieldEditing && React.createElement(Select, {
    autoResize: true,
    openOnFocus: true,
    indicator: false,
    onFilter: setFilterTerm,
    isFilterable: true,
    onChange: handleFilterLookupChange,
    options: options,
    placeholder: placeholder,
    ref: inputRef
  })), isClearable && React.createElement(IconButton, {
    icon: React.createElement(Close, null),
    label: t('Clear Filters'),
    ml: "auto",
    mt: "xxsmall",
    mr: "xsmall",
    onClick: clearFilters,
    size: "xsmall"
  }));
};

const ChipWrapper = styled.div.withConfig({
  displayName: "InputFilters__ChipWrapper",
  componentId: "sc-1eligs2-0"
})(_t || (_t = _`
  display: inline-flex;
  flex: 1;
  flex-wrap: wrap;

  @supports (gap: 4px) {
    gap: ${0};
    ${0} {
      margin: 0;
    }
  }
`), ({
  theme
}) => theme.space.u1, Chip);
export const InputFilters = styled(InputFiltersLayout).withConfig({
  displayName: "InputFilters",
  componentId: "sc-1eligs2-1"
})(_t2 || (_t2 = _`
  ${0}
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  padding: ${0} 0;
  padding-left: ${0};
  width: 100%;
  &:focus-within {
    ${0}
  }

  ${0} {
    margin-left: ${0};
  }

  ${0} ${0} {
    display: none;
  }

  ${0} {
    border: none;
    height: 30px;
    padding: 0;

    &:focus-within {
      box-shadow: none;
    }

    input {
      padding: 0;
    }
  }
`), inputCSS, ({
  theme: {
    space
  }
}) => space.u05, ({
  theme: {
    space
  }
}) => space.u2, inputTextFocus, Select, ({
  theme: {
    space
  }
}) => space.u1, Select, Icon, InputText);
//# sourceMappingURL=InputFilters.js.map