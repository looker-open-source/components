# DataTable

The `<DataTable>` component, like `<Table>`, displays tabular data. However, unlike a `<Table>`, a `<DataTable>` allows you to bake in a set of actions on each row. Common use cases include:

- A list of users with user details and a "Delete This User" action
- A list of groups and their associated permissions with an "Edit This Group's Permissions" action on each row
- A list of recently run queries and a "Rerun This Query" action on each row

The `<DataTable>` component acts as the main wrapper to other `<DataTable>`-related components. It must receive an array of type `DataTableColumn` in its `columns` prop. That array should contain objects that describe the columns in your `<DataTable>`.

For accessibility `caption` must be specified to describe the table's contents.

## Columns

`DataTableColumn`s are defined as an array of objects that conform to the `DataTableColumn` interface:

### **title** (required)

- `title` for the column
- `titleIcon` is an `Icon` specified instead of the title text in the header row.
  - NOTE: `title` will still be used in column selector and will be added as a tooltip to the icon displayed in the header row.

### **id** (required)

A unique identifier for a given column. NOTE: A column object's id should match a key in your data object template, see example below.

### **type**

Defaults to `string`. In some locales, we may change horizontal alignment of 'number'

- `string`
- `number`
- `date`

### **size**

Specify a size to have the column consume a fixed width. Defaults to `auto`

For content that is not expected to wrap `auto` is often the best choice as the column will only consume the horizontal room needed to contain its content.

- `auto` columns will use browser-native table column behavior.
- `small`, `medium`, & `large` are the predefined sizes and will truncate
- `nowrap` - column will not truncate and content will not wrap. Use with caution.
- `0-100` (number) - width is a percentage of the table's width.
  - Columns sized as a percentage do not support truncation.
  - Mixing percentage columns with other sizing formats is not supported and yields unpredictable behavior.
  - If percentages of all columns do not total 100% column widths may be somewhat unpredictable as well (browser table column calculations vary widely in these scenarios)

```tsx
export default function Basic() {
  const data = [
    {
      id: 1,
      name: 'Gorgonzola',
    },
    {
      id: 2,
      name: 'Cheddar',
    },
    {
      id: 3,
      name: `Blue`,
    },
  ];

  const columns: DataTableColumns = [
    {
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ];

  const items = data.map(({ id, name }) => {
    const actions = (
      <>
        <DataTableAction onClick={() => alert(`${name} selected!`)}>
          Select Cheese
        </DataTableAction>
      </>
    );

    return (
      <DataTableItem
        key={id}
        id={`${id}`}
        onClick={() => alert('Row clicked')}
        actions={actions}
      >
        <DataTableCell>{id}</DataTableCell>
        <DataTableCell>{name}</DataTableCell>
      </DataTableItem>
    );
  });

  return (
    <DataTable caption="Cheeses example" columns={columns}>
      {items}
    </DataTable>
  );
}
```

## DataTableItem

The `<DataTableItem>` component represents a row of data in your DataTable.

To define actions on a row, pass in `<DataTableAction>` elements (wrapped in a React.Fragment if there are multiple) into the `actions` prop.

You can also pass a callback to the `onClick` prop, but note that this callback will not fire when clicking on the Vertical Dots `<IconButton />`.

The `actionsTooltip` prop can be used to set the tooltip text of a row's actions button. This prop will also be used in a visually hidden label on the actions button, which is especially useful for getting the actions button DOM element when testing.

## DataTableCell

The `<DataTableCell>` component is equivalent to a data cell in your DataTable. `<DataTableCell>` elements should always be children of a `<DataTableItem>` element (i.e. each row should contain some number of column elements).

In its simplest form, a `<DataTableCell>` element will display whatever child elements it has.

You can also create more advanced layouts within your `<DataTableCell>` by utilizing the optional `description` and `indicator` props.

Passing in a React element into the `description` prop will display said element underneath any child elements of your `<DataTableCell>`.

Passing in a React element into the `indicator` prop will display said element left of any child elements (and any element passed into the `description` prop).

```tsx
import * as MaterialIcons from '@styled-icons/material';

export default function Indicator() {
  const link = (
    <Link
      onClick={event => event.stopPropagation()}
      href="https://en.wikipedia.org/wiki/Cheddar_cheese"
    >
      Wikipedia
    </Link>
  );

  const indicator = (
    <Icon
      icon={<MaterialIcons.Person />}
      color="key"
      size={24}
      marginRight="small"
    />
  );

  const columns: DataTableColumns = [
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ];

  return (
    <DataTable caption="Cheeses example" columns={columns}>
      <DataTableItem id={'cheddar'} onClick={() => alert(`Row clicked`)}>
        <DataTableCell description={link} indicator={indicator}>
          Cheddar
        </DataTableCell>
      </DataTableItem>
    </DataTable>
  );
}
```

**Note:** By default, clicking on any element within a `<DataTableCell>` will trigger the `onClick` of the parent `<DataTableItem>`. To prevent this, make sure to include an `event.stopPropagation()` call within your `<DataTableCell>`'s `onClick`.

## DataTableAction

The `<DataTableAction>` component represents an actionable item on the rows of your `DataTable`. As noted above, you can supply each of your rows with actions by passing `<DataTableAction>` elements into the `actions` prop of the parent `<DataTableItem>` element.

## States

In the event that your page and `<DataTable>` render before data is available (i.e. before a Promise resolves), you can use the `state` prop to conditionally render a loading icon until your data is ready.

Passing "loading" into a `<DataTable>`'s `state` prop will render a `<Spinner>` icon.

Additionally, you can render a "No Results" message using the `state="noResults"` prop. When `state="noResults"` the `<DataTable>` will display a "No Results" message in place of its children.

To customize the "No Results" message text, use the `noResultsDisplay` prop. Strings will be formatted as shown below, use JSX for custom formattng if you prefer.

```tsx
export default function State() {
  const columns: DataTableColumns = [
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ];

  // Change state to "noResults" to render the noResultsDisplay
  return (
    <DataTable caption="Cheeses example" columns={columns} state="noResults">
      <DataTableItem id={'cheddar'} onClick={() => alert(`Row clicked`)}>
        <DataTableCell>Cheddar</DataTableCell>
      </DataTableItem>
    </DataTable>
  );
}
```

## Sorting

You can implement sorting on a `<DataTable>` by passing a function into the optional `onSort` prop. In addition, sortable columns must have `canSort: true` on their corresponding column object.

Clicking on the header of a sortable column will lead to an `onSort` call, with (1) the column's id and (2) the next sort direction, passed in as arguments. The sort direction argument will either be a string 'desc' if the current sort direction of the column is 'asc', or 'asc' in all other cases.

If your data is initially sorted on a specific column, you may want to default the corresponding column object with a `sortDirection` property.

For default sort behavior, use the `doDataTableSort` helper function. The `doDataTableSort` helper function will return a sorted data array as well as an updated columns array, which can then be used to replace your existing arrays post-sort.

**Note:** `doDataTableSort` is a generic function. The returned data array will have the same type as the data array argument.

`doDataTableSort` currently supports `string`, `number`, and `date` sorting. It will use the `type` property on the corresponding column object of the passed-in `id` to determine which sort logic to use.

If using a custom `onSort`, make sure the function performs the following:

- Updates the corresponding column object's `sortDirection`
- Sorts the collection representing your data

```tsx
export default function Sorting() {
  const [data, setData] = useState([
    {
      createdDate: new Date('11/11/2001'),
      id: 1,
      name: 'Gorgonzola',
    },
    {
      createdDate: new Date('03/15/2001'),
      id: 2,
      name: 'Cheddar',
    },
    {
      createdDate: new Date('07/20/2001'),
      id: 3,
      name: `Blue`,
    },
  ]);

  const [columns, setColumns] = useState<DataTableColumns>([
    {
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      canSort: true,
      id: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      canSort: true,
      id: 'createdDate',
      size: 'nowrap',
      title: 'Created Date',
      type: 'date',
    },
  ]);

  const onSort = (id: string, sortDirection: 'asc' | 'desc') => {
    const { columns: sortedColumns, data: sortedData } = doDataTableSort(
      data,
      columns,
      id,
      sortDirection
    );
    setData(sortedData);
    setColumns(sortedColumns);
  };

  const items = data.map(({ id, name, createdDate }) => {
    const actions = (
      <>
        <DataTableAction onClick={() => alert(`${name} selected!`)}>
          Select Cheese
        </DataTableAction>
      </>
    );

    return (
      <DataTableItem
        id={`${id}`}
        key={id}
        onClick={() => alert('Row clicked')}
        actions={actions}
      >
        <DataTableCell>{id}</DataTableCell>
        <DataTableCell>{name}</DataTableCell>
        <DataTableCell>
          <DateFormat>{createdDate}</DateFormat>
        </DataTableCell>
      </DataTableItem>
    );
  });

  return (
    <DataTable caption="Cheeses example" onSort={onSort} columns={columns}>
      {items}
    </DataTable>
  );
}
```

## Selecting rows

You can add row select behavior on a `<DataTable />` by passing a valid into the `select` prop.

The following properties are **required** in the object passed into the `select` prop.

- `onSelect`: Clicking on a checkbox will trigger the `onSelect` callback, with the id of the checkbox's `DataTableItem` passed in as an argument.

- `onSelectAll`: Callback that is triggered when the header's checkbox is clicked

- `selectedItems`: An array containing the `id`s of all selected items. Will usually be a piece of state.

- `pageItems`: An array containing the `id`s of all currently visible items. This is mainly used to help calculate the checked state of the header checkbox.

The following properties are **optional** in the object passed into the `select` prop:

**Note:** For accessibility purposes, the header checkbox is described by the ID of the header row. To set the ID of the header row, use the `headerRowId` prop on `DataTable`.

```tsx
export default function SelectRow() {
  const data = [
    {
      id: 1,
      name: 'Gorgonzola',
    },
    {
      id: 2,
      name: 'Cheddar',
    },
    {
      id: 3,
      name: `Blue`,
    },
  ];

  const columns: DataTableColumns = [
    {
      id: 'id',
      size: 20,
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      size: 80,
      title: 'Name',
      type: 'string',
    },
  ];

  const [selections, setSelections] = useState<string[]>([]);
  const onSelect = (selection: string) => {
    setSelections(
      selections.includes(selection)
        ? selections.filter(item => item !== selection)
        : [...selections, selection]
    );
  };

  const allSelectableItems = data.map(({ id }) => String(id));

  const onSelectAll = () => {
    setSelections(selections.length ? [] : allSelectableItems);
  };

  const items = data.map(({ id, name }) => (
    <DataTableItem
      id={String(id)}
      key={id}
      onClick={() => alert(`${name} clicked`)}
      actions={
        <>
          <DataTableAction onClick={() => alert(`${name} deleted`)}>
            Delete
          </DataTableAction>
        </>
      }
    >
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
    </DataTableItem>
  ));

  return (
    <>
      <DataTable
        caption="Cheeses example"
        columns={columns}
        select={{
          onSelect,
          onSelectAll,
          pageItems: allSelectableItems,
          selectedItems: selections,
        }}
      >
        {items}
      </DataTable>
    </>
  );
}
```

### useSelectManager

The `useSelectManager` hook can be used to quickly create the standard building blocks of `DataTable` select behavior.

`useSelectManager` accepts the following parameters:

<SelectManagerParameterTable />

`useSelectManager` returns an object with the following properties:

<SelectManagerReturnTable />

```tsx
export default function SelectManager() {
  const data = [
    {
      id: 1,
      name: 'Gorgonzola',
    },
    {
      id: 2,
      name: 'Cheddar',
    },
    {
      id: 3,
      name: `Blue`,
    },
  ];

  const columns: DataTableColumns = [
    {
      id: 'id',
      size: 20,
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      size: 80,
      title: 'Name',
      type: 'string',
    },
  ];

  const allSelectableItems = data.map(({ id }) => String(id));

  const { onSelect, onSelectAll, selections } =
    useSelectManager(allSelectableItems);

  const items = data.map(({ id, name }) => (
    <DataTableItem
      id={String(id)}
      key={id}
      onClick={() => alert(`${name} clicked`)}
      actions={
        <>
          <DataTableAction onClick={() => alert(`${name} deleted`)}>
            Delete
          </DataTableAction>
        </>
      }
    >
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
    </DataTableItem>
  ));

  return (
    <DataTable
      caption="Cheeses example"
      columns={columns}
      select={{
        onSelect,
        onSelectAll,
        pageItems: allSelectableItems,
        selectedItems: selections,
      }}
    >
      {items}
    </DataTable>
  );
}
```

## Control Bar

`DataTable` comes with a built-in control bar that allows for bulk actions and additional select control.

A `DataTable` will reveal its control bar when the following conditions are met:

1. The array passed into the `select.selectedItems` prop has length > 0.
2. A valid object is passed into the `bulk` prop.

The `bulk` prop is used to configure a `DataTable`'s control bar. The object passed into `bulk` _must_ have the following properties:

- `actions`: Bulk actions that are available when one or more items are selected
- `onTotalClearAll`: Callback that is triggered when the user presses the "Clear Selection" button
- `onTotalSelectAll`: Callback that is triggered when the user presses the "Select all X results" button in the control bar
- `pageCount`: The total number of visible items (i.e. the total number of items on the current page in paginated `DataTable`s)
- `totalCount`: The total number of items, both visible and nonvisible, in this `DataTable`

**Note:** The `onSelect` returned from the `useSelectManager` hook is designed to work seamlessly with the control bar. In the event that a user selects all items, both visible and non-visible, a follow-up click on a checkbox will unselect both the clicked item and all non-visible items.

```tsx
export default function ControlBar() {
  const data = [
    { id: 1, name: 'Gorgonzola' },
    { id: 2, name: 'Cheddar' },
    { id: 3, name: `Blue` },
    { id: 4, name: 'American' },
    { id: 5, name: 'Cheddar' },
    { id: 6, name: 'Pepper Jack' },
  ];

  const columns: DataTableColumns = [
    {
      id: 'id',
      size: 20,
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      size: 80,
      title: 'Name',
      type: 'string',
    },
  ];

  const [page, setPage] = useState(1);
  const perPageCount = 3;

  // The logic for which items are being displayed on which page will vary
  const pageItemData = data.filter(
    ({ id }) => id > (page - 1) * perPageCount && id <= page * perPageCount
  );
  const pageItemIds = pageItemData.map(({ id }) => String(id));
  const pageItems = pageItemData.map(({ id, name }) => (
    <DataTableItem
      id={String(id)}
      key={id}
      onClick={() => alert(`${name} clicked`)}
      actions={
        <>
          <DataTableAction onClick={() => alert(`${name} deleted`)}>
            Delete
          </DataTableAction>
        </>
      }
    >
      <DataTableCell>{id}</DataTableCell>
      <DataTableCell>{name}</DataTableCell>
    </DataTableItem>
  ));

  const { onSelect, onSelectAll, selections, setSelections } =
    useSelectManager(pageItemIds);

  const allItems = [...data].map(({ id }) => String(id));
  const onTotalSelectAll = () => setSelections(allItems);
  const onTotalClearAll = () => setSelections([]);

  const bulkActionsConfig = {
    actions: (
      <DataTableAction onClick={() => alert(`Selected Items: ${selections}`)}>
        View Selected Item IDs
      </DataTableAction>
    ),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: pageItems.length,
    totalCount: allItems.length,
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Box width="100%" mb="u3">
        <DataTable
          bulk={bulkActionsConfig}
          caption="Cheeses example"
          select={{
            onSelect,
            onSelectAll,
            pageItems: pageItemIds,
            selectedItems: selections,
          }}
          columns={columns}
        >
          {pageItems}
        </DataTable>
      </Box>
      <Pagination
        current={page}
        pages={data.length / perPageCount}
        onChange={nextPage => {
          setSelections([]);
          setPage(nextPage);
        }}
      />
    </Flex>
  );
}
```

## Truncation

DataTable plays nicely with [Truncate](?path=/docs/docs-truncate--docs), when you wish to condense the table and keep all values to a single line.

```tsx
export default function Basic() {
  const columns: DataTableColumns = [
    {
      id: 'title',
      size: 50,
      title: 'Title',
      type: 'string',
    },
    {
      id: 'description',
      size: 50,
      title: 'Description',
      type: 'string',
    },
  ];

  return (
    <DataTable caption="Cheeses example" columns={columns}>
      <DataTableItem key="cheddar" id="cheddar">
        <DataTableCell>Cheddar</DataTableCell>
        <DataTableCell>
          <Truncate>
            Cheddar cheese is a relatively hard, off-white (or orange if
            colourings such as annatto are added), sometimes sharp-tasting,
            natural cheese. Originating in the English village of Cheddar in
            Somerset, cheeses of this style are now produced beyond the region
            and in several countries around the world.
          </Truncate>
        </DataTableCell>
      </DataTableItem>
      <DataTableItem key="parm" id="parm">
        <DataTableCell>Parmesan</DataTableCell>
        <DataTableCell>
          <Truncate>
            Parmigiano-Reggiano or Parmesan is an Italian hard, granular cheese
            that is produced from cow's milk and has aged 12–36 months. It is
            named after the producing areas, the provinces of Parma, Reggio
            Emilia, the part of Bologna west of the Reno, and Modena (all in
            Emilia-Romagna); and the part of Mantua (Lombardy) south of the Po.
            Parmigiano is the Italian adjective for Parma and Reggiano that for
            Reggio Emilia.
          </Truncate>
        </DataTableCell>
      </DataTableItem>
    </DataTable>
  );
}
```
