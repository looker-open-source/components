import { Box2 } from '@looker/components';
import React from 'react';
import { useTranslation } from '../../../../../../../utils';
import { GroupSelect } from '../../../GroupSelect';
import { MidInputLabel } from '../../../MidInputLabel';
import { Interval } from '../Interval';
export const Relative = ({
  item: {
    id,
    intervalType,
    startInterval,
    endInterval
  },
  onChange,
  field
}) => {
  const {
    t
  } = useTranslation('Relative');
  const options = [{
    value: 'ago',
    label: t('ago')
  }, {
    value: 'from now',
    label: t('from now')
  }];

  const intervalTypeChange = value => {
    onChange(id, {
      intervalType: value
    });
  };

  const startChange = interval => {
    onChange(id, {
      startInterval: interval
    });
  };

  const endChange = interval => {
    onChange(id, {
      endInterval: interval
    });
  };

  return React.createElement(Box2, {
    display: "flex",
    bg: "field"
  }, React.createElement(Interval, {
    placement: "middle",
    item: startInterval,
    onChange: startChange,
    field: field
  }), React.createElement(GroupSelect, {
    value: intervalType,
    options: options,
    onChange: intervalTypeChange,
    placement: "middle"
  }), React.createElement(MidInputLabel, null, "FOR"), React.createElement(Interval, {
    item: endInterval,
    onChange: endChange,
    field: field
  }));
};
//# sourceMappingURL=Relative.js.map