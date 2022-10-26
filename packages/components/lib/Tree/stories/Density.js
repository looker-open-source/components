import React from 'react';
import { Tree } from '../Tree';
import { TreeCollection } from '../TreeCollection';
import { TreeItem } from '../TreeItem';
import { Grid } from '../../Layout';

const DensityTree = ({
  density
}) => React.createElement(TreeCollection, null, React.createElement(Tree, {
  defaultOpen: true,
  density: density,
  label: React.createElement("strong", null, "Cheeses")
}, React.createElement(Tree, {
  defaultOpen: true,
  label: React.createElement("strong", null, "French")
}, React.createElement(TreeItem, null, "Brie")), React.createElement(TreeItem, null, "Cheddar"), React.createElement(TreeItem, null, "Gouda"), React.createElement(TreeItem, null, "Swiss")));

const densities = [1, 0, -1, -2, -3];
export const Density = () => React.createElement(Grid, {
  columns: densities.length
}, densities.map(density => React.createElement(DensityTree, {
  density: density,
  key: density
})));
//# sourceMappingURL=Density.js.map