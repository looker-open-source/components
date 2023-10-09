import React, { useState } from 'react';
import { Box2, ButtonGroup, ButtonItem, Span } from '../../..';
const stateOptions = [{
  label: 'Alabama',
  value: 'Alabama'
}, {
  label: 'Alaska',
  value: 'Alaska'
}, {
  label: 'Arizona',
  value: 'Arizona'
}, {
  label: 'Arkansas',
  value: 'Arkansas'
}, {
  label: 'California',
  value: 'California'
}, {
  label: 'Colorado',
  value: 'Colorado'
}, {
  label: 'Connecticut',
  value: 'Connecticut'
}, {
  label: 'Delaware',
  value: 'Delaware'
}, {
  label: 'Florida',
  value: 'Florida'
}, {
  label: 'Georgia',
  value: 'Georgia'
}, {
  label: 'Hawaii',
  value: 'Hawaii'
}, {
  label: 'Idaho',
  value: 'Idaho'
}, {
  label: 'Illinois',
  value: 'Illinois'
}, {
  label: 'Indiana',
  value: 'Indiana'
}, {
  label: 'Iowa',
  value: 'Iowa'
}, {
  label: 'Kansas',
  value: 'Kansas'
}, {
  label: 'Kentucky',
  value: 'Kentucky'
}, {
  label: 'Louisiana',
  value: 'Louisiana'
}, {
  label: 'Maine',
  value: 'Maine'
}, {
  label: 'Maryland',
  value: 'Maryland'
}, {
  label: 'Massachusetts',
  value: 'Massachusetts'
}, {
  label: 'Michigan',
  value: 'Michigan'
}, {
  label: 'Minnesota',
  value: 'Minnesota'
}, {
  label: 'Mississippi',
  value: 'Mississippi'
}, {
  label: 'Missouri',
  value: 'Missouri'
}, {
  label: 'Montana',
  value: 'Montana'
}, {
  label: 'Nebraska',
  value: 'Nebraska'
}, {
  label: 'Nevada',
  value: 'Nevada'
}, {
  label: 'New Hampshire',
  value: 'New Hampshire'
}, {
  label: 'New Jersey',
  value: 'New Jersey'
}, {
  label: 'New Mexico',
  value: 'New Mexico'
}, {
  label: 'New York',
  value: 'New York'
}, {
  label: 'North Carolina',
  value: 'North Carolina'
}, {
  label: 'North Dakota',
  value: 'North Dakota'
}, {
  label: 'Ohio',
  value: 'Ohio'
}, {
  label: 'Oklahoma',
  value: 'Oklahoma'
}, {
  label: 'Oregon',
  value: 'Oregon'
}, {
  label: 'Pennsylvania',
  value: 'Pennsylvania'
}, {
  label: 'Rhode Island',
  value: 'Rhode Island'
}, {
  label: 'South Carolina',
  value: 'South Carolina'
}, {
  label: 'South Dakota',
  value: 'South Dakota'
}, {
  label: 'Tennessee',
  value: 'Tennessee'
}, {
  label: 'Texas',
  value: 'Texas'
}, {
  label: 'Utah',
  value: 'Utah'
}, {
  label: 'Vermont',
  value: 'Vermont'
}, {
  label: 'Virginia',
  value: 'Virginia'
}, {
  label: 'Washington',
  value: 'Washington'
}, {
  label: 'West Virginia',
  value: 'West Virginia'
}, {
  label: 'Wisconsin',
  value: 'Wisconsin'
}, {
  label: 'Wyoming',
  value: 'Wyoming'
}];
export default function Wrapping() {
  const [value, setValue] = useState([stateOptions[0].value]);
  return React.createElement(Box2, null, React.createElement(ButtonGroup, {
    value: value,
    onChange: setValue
  }, stateOptions.map(item => {
    return React.createElement(ButtonItem, {
      key: item.value,
      value: item.value
    }, item.label);
  }), React.createElement(Span, null, "Inline text")));
}
//# sourceMappingURL=Wrapping.js.map