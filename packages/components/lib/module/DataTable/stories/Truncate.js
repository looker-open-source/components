
import React from 'react';
import { DataTableItem, DataTableCell, DataTable, Truncate } from '../..';
export default function Basic() {
  const columns = [{
    id: 'title',
    size: 50,
    title: 'Title',
    type: 'string'
  }, {
    id: 'description',
    size: 50,
    title: 'Description',
    type: 'string'
  }];
  return React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, React.createElement(DataTableItem, {
    key: "cheddar",
    id: "cheddar"
  }, React.createElement(DataTableCell, null, "Cheddar"), React.createElement(DataTableCell, null, React.createElement(Truncate, null, "Cheddar cheese is a relatively hard, off-white (or orange if colourings such as annatto are added), sometimes sharp-tasting, natural cheese. Originating in the English village of Cheddar in Somerset, cheeses of this style are now produced beyond the region and in several countries around the world."))), React.createElement(DataTableItem, {
    key: "parm",
    id: "parm"
  }, React.createElement(DataTableCell, null, "Parmesan"), React.createElement(DataTableCell, null, React.createElement(Truncate, null, "Parmigiano-Reggiano or Parmesan is an Italian hard, granular cheese that is produced from cow's milk and has aged 12\u201336 months. It is named after the producing areas, the provinces of Parma, Reggio Emilia, the part of Bologna west of the Reno, and Modena (all in Emilia-Romagna); and the part of Mantua (Lombardy) south of the Po. Parmigiano is the Italian adjective for Parma and Reggiano that for Reggio Emilia."))));
}
//# sourceMappingURL=Truncate.js.map