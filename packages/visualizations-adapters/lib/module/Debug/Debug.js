

import React from 'react';
import { Accordion2 } from '@looker/components';
import { StaticTable } from '../StaticTable';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from '../utils';
import { KeyValueList } from '../KeyValueList';

export const Debug = ({
  ok,
  data,
  error,
  config: _config = {},
  fields
}) => {
  const {
    t
  } = useTranslation('Debug');
  return React.createElement(React.Fragment, null, React.createElement(KeyValueList, {
    value: {
      response: ok ? t('ok') : t('error')
    }
  }), !isEmpty(error) && React.createElement(Accordion2, {
    indicatorPosition: "left",
    defaultOpen: true,
    label: t('Error')
  }, React.createElement(KeyValueList, {
    value: error || {}
  })), !isEmpty(_config) && React.createElement(Accordion2, {
    indicatorPosition: "left",
    label: t('Config')
  }, React.createElement(KeyValueList, {
    value: _config
  })), !isEmpty(fields) && React.createElement(React.Fragment, null, React.createElement(Accordion2, {
    indicatorPosition: "left",
    label: t('Dimensions')
  }, React.createElement(KeyValueList, {
    value: (fields === null || fields === void 0 ? void 0 : fields.dimensions) || {}
  })), React.createElement(Accordion2, {
    indicatorPosition: "left",
    label: t('Measures')
  }, React.createElement(KeyValueList, {
    value: (fields === null || fields === void 0 ? void 0 : fields.measures) || {}
  }))), data && React.createElement(Accordion2, {
    indicatorPosition: "left",
    defaultOpen: true,
    label: t('Result')
  }, React.createElement(StaticTable, {
    data: data,
    fields: fields
  })));
};
//# sourceMappingURL=Debug.js.map