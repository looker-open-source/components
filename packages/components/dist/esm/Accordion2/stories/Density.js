import React from 'react';
import { Accordion2, SpaceVertical, Grid } from '../..';
export default function Density() {
  return React.createElement(SpaceVertical, null, React.createElement(Grid, {
    columns: 5
  }, React.createElement(Accordion2, {
    defaultOpen: true,
    density: 1,
    label: `Density Example: 1`
  }, "Content within accordion."), React.createElement(Accordion2, {
    defaultOpen: true,
    density: 0,
    label: `Density Example: 0`
  }, "Content within accordion."), React.createElement(Accordion2, {
    defaultOpen: true,
    density: -1,
    label: `Density Example: -1`
  }, "Content within accordion."), React.createElement(Accordion2, {
    defaultOpen: true,
    density: -2,
    label: `Density Example: -2`
  }, "Content within accordion."), React.createElement(Accordion2, {
    defaultOpen: true,
    density: -3,
    label: `Density Example: -3`
  }, "Content within accordion.")));
}
//# sourceMappingURL=Density.js.map