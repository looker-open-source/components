

import React from 'react';
import { SpaceVertical, Heading, Space, Divider } from '@looker/components';
import { Filter } from '../Filter';
export default function Config() {
  return React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h3"
  }, "String"), React.createElement(Space, {
    align: "start"
  }, React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "button_group"), React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending,complete",
    config: {
      type: 'button_group'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  })), React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "button_toggles"), React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    config: {
      type: 'button_toggles'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  }))), React.createElement(Space, null, React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "taglist"), React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending,complete",
    config: {
      type: 'tag_list'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  })), React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "dropdown_menu"), React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    config: {
      type: 'dropdown_menu'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  }))), React.createElement(Space, null, React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "checkboxes"), React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending,complete",
    config: {
      type: 'checkboxes'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  })), React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "radio_buttons"), React.createElement(Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    config: {
      type: 'radio_buttons'
    },
    suggestions: ['complete', 'pending', 'cancelled']
  }))), React.createElement(Divider, null), React.createElement(Heading, {
    as: "h3"
  }, "Date"), React.createElement(Space, null, React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "relative_timeframes"), React.createElement(Filter, {
    name: "Date",
    expressionType: "date",
    expression: "7 day",
    config: {
      type: 'relative_timeframes'
    }
  })), React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "day_picker"), React.createElement(Filter, {
    name: "Date",
    expressionType: "date",
    expression: "2021/06/29",
    config: {
      type: 'day_picker'
    }
  }))), React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "day_range_picker"), React.createElement(Filter, {
    name: "Date",
    expressionType: "date",
    expression: "2021/06/01 to 2021/06/30",
    config: {
      type: 'day_range_picker'
    }
  })), React.createElement(Divider, null), React.createElement(Heading, {
    as: "h3"
  }, "Number"), React.createElement(Space, null, React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "slider"), React.createElement(Filter, {
    name: "Age",
    expressionType: "number",
    expression: "55",
    config: {
      max: 120,
      min: 0,
      type: 'slider'
    }
  })), React.createElement(SpaceVertical, null, React.createElement(Heading, {
    as: "h5"
  }, "range_slider"), React.createElement(Filter, {
    name: "Age",
    expressionType: "number",
    expression: "[0,45]",
    config: {
      max: 120,
      min: 0,
      type: 'range_slider'
    }
  }))));
}
//# sourceMappingURL=Config.js.map