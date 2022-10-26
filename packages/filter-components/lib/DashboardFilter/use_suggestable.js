import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { model_fieldname_suggestions } from '@looker/sdk';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from '../utils';
import { FilterContext } from '../FilterCollection';

const shouldFetchSuggestions = field => {
  return (field === null || field === void 0 ? void 0 : field.suggestable) && !(field !== null && field !== void 0 && field.enumerations) && !(field !== null && field !== void 0 && field.suggestions);
};

const getOptionsProps = (field, fetchedSuggestions) => {
  if (shouldFetchSuggestions(field)) {
    return {
      suggestions: fetchedSuggestions
    };
  }

  const {
    enumerations,
    suggestions
  } = field || {};

  if (enumerations) {
    return {
      enumerations
    };
  }

  if (suggestions) {
    return {
      suggestions
    };
  }

  return {};
};

const getLinkedFilterMap = (filterMap, listensToFilters) => {
  if (!listensToFilters || listensToFilters.length === 0) return undefined;
  return listensToFilters.reduce((acc, title) => {
    if (filterMap[title]) {
      const {
        filter,
        expression
      } = filterMap[title];

      if (filter.dimension && expression) {
        acc[filter.dimension] = expression;
      }
    }

    return acc;
  }, {});
};

export const useSuggestable = ({
  filter,
  sdk
}) => {
  const {
    state
  } = useContext(FilterContext);
  const filterMap = state.filterMap;
  const field = filter.field;
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [fetchedSuggestions, setSuggestions] = useState([]);
  const {
    t
  } = useTranslation('use_suggestable');
  const translatedErrorMessage = t('Error loading suggestions');
  const {
    listens_to_filters
  } = filter;
  const linkedFilterMap = useMemo(() => getLinkedFilterMap(filterMap, listens_to_filters), [filterMap, listens_to_filters]);
  useEffect(() => {
    const loadSuggestions = async () => {
      if (sdk && shouldFetchSuggestions(field)) {
        setLoading(true);
        const params = {
          field_name: (field === null || field === void 0 ? void 0 : field.suggest_dimension) || '',
          model_name: filter.model || '',
          term: searchTerm,
          view_name: (field === null || field === void 0 ? void 0 : field.suggest_explore) || (field === null || field === void 0 ? void 0 : field.view) || '',
          filters: linkedFilterMap
        };

        try {
          const result = await sdk.ok(model_fieldname_suggestions(sdk, params));
          setLoading(false);
          setSuggestions(result.suggestions || []);
        } catch (error) {
          setLoading(false);
          setErrorMessage(translatedErrorMessage);
        }
      }
    };

    loadSuggestions();
  }, [filter.model, field, searchTerm, sdk, linkedFilterMap, translatedErrorMessage]);
  return {
    errorMessage,
    suggestableProps: _objectSpread({
      isLoading,
      onInputChange: setSearchTerm
    }, getOptionsProps(field, fetchedSuggestions))
  };
};
//# sourceMappingURL=use_suggestable.js.map