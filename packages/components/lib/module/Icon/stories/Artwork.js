
import React from 'react';
import { Icon, Space } from '../..';
export default function Artwork() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Icon, {
    icon: React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
      fill: "hotpink"
    })),
    size: "xxsmall"
  }), React.createElement(Icon, {
    icon: React.createElement("svg", null, React.createElement("rect", {
      width: "100",
      height: "100",
      fill: "rgb(0,0,255)",
      strokeWidth: "3",
      stroke: "rgb(0,0,0)"
    }))
  }));
}
//# sourceMappingURL=Artwork.js.map