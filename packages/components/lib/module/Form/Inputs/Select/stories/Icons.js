

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Select } from '..';
import { Space } from '../../../../Layout';
export default function Icons() {
  return React.createElement(Space, null, React.createElement(Select, {
    placeholder: "Select a visualization",
    options: [{
      icon: React.createElement(MaterialIcons.BarChart, null),
      label: 'Column',
      value: 'column'
    }, {
      icon: React.createElement(MaterialIcons.ShowChart, null),
      label: 'Line',
      value: 'line'
    }, {
      icon: React.createElement(MaterialIcons.Map, null),
      label: 'Map',
      value: 'map'
    }, {
      icon: React.createElement(MaterialIcons.PieChart, null),
      label: 'Pie',
      value: 'pie'
    }, {
      icon: React.createElement(MaterialIcons.TableChart, null),
      label: 'Table',
      value: 'table'
    }]
  }), React.createElement(Select, {
    placeholder: "Custom Icons",
    options: [{
      icon: React.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
        fill: "#7FFFD4"
      })),
      label: 'Aqua',
      value: 'Aqua'
    }, {
      icon: React.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
        fill: "#ff00e6"
      })),
      label: 'Pink',
      value: 'Pink'
    }]
  }));
}
//# sourceMappingURL=Icons.js.map