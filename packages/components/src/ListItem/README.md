# ListItem

`ListItem` renders an `li` element and should be the child of a `List` element.

## Icon and Color customization

`ListItem` allows you to customise the icon that will be rendered for that item by passing a react element to the `icon` prop.

If the icon is an SVG element, it will be colored to match the text as specified by the `color` prop. `color` will accept any of our predefined theme names (e.g. `calculation`, `key`), or any custom hex code.

```tsx
function Icon() {
  return (
    <List>
      <ListItem icon={<MaterialIcons.PersonOutline />}>List Item</ListItem>
      <ListItem icon={<MaterialIcons.PersonOutline />} color="calculation">
        List Item
      </ListItem>
      <ListItem icon={<MaterialIcons.PersonOutline />} color="key">
        List Item
      </ListItem>
      <ListItem icon={<MaterialIcons.PersonOutline />} color="#cc00cc">
        List Item
      </ListItem>
    </List>
  );
}
```

## Disabled

```tsx
function Disabled() {
  return (
    <ListItem color="warn" disabled>
      List Item
    </ListItem>
  );
}
```

## Description & Detail

```tsx
function Description() {
  return (
    <ListItem
      description="Description text, which is different than detail text"
      detail="detail text"
    >
      List Item
    </ListItem>
  );
}
```

## Selected

```tsx
function Selected() {
  return <ListItem selected>List Item</ListItem>;
}
```

## Customizing a ListItem detail

You can customize the look and behavior of `detail` elements by providing the `detail` prop an object with an "options" property.

Enabling the `hoverDisclosure` option will hide and show the detail on hover on and hover off.

Enabling the `accessory` option will render the detail element outside of the label container. This option is most commonly used when you'd like to have a button as your `detail` element.

```tsx
function Detail() {
  return (
    <List>
      <ListItem icon={<MaterialIcons.Tag />} detail="Standard Detail text">
        ListItem (Standard)
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Tag />}
        detail={
          <IconButton
            icon={<MaterialIcons.PivotTableChart />}
            label={<MaterialIcons.PivotTableChart />}
            onClick={() => alert("You've pivoted!")}
          />
        }
        itemRole="none"
      >
        ListItem (Standard)
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Tag />}
        detail={{
          content: (
            <IconButton
              icon={<MaterialIcons.PivotTableChart />}
              label={<MaterialIcons.PivotTableChart />}
              onClick={() => alert("You've pivoted!")}
            />
          ),
          options: {
            accessory: true,
            hoverDisclosure: true,
          },
        }}
      >
        ListItem (Options Enabled)
      </ListItem>
    </List>
  );
}
```

## List item as a Link

```tsx
function Link() {
  return (
    <ListItem itemRole="link" href="https://google.com" target="_blank">
      ListItem that links to Google
    </ListItem>
  );
}
```

## Truncated text

```tsx
const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function Truncated() {
  return (
    <ListItem
      truncate
      description={longText}
      icon={<MaterialIcons.DateRange />}
    >
      {longText}
    </ListItem>
  );
}
```

## ARIA Role

```tsx
function Role() {
  return (
    <List>
      <ListItem itemRole="button" description="Definitely a button">
        List Item
      </ListItem>
      <ListItem itemRole="link" description="Definitely a link">
        List Item
      </ListItem>
      <ListItem itemRole="none" description="Definitely a none">
        List Item
      </ListItem>
    </List>
  );
}
```

## Event Handlers

In addition the props listed below, `ListItem` also accepts standard handlers like `onClick`, `onKeyDown`, etc.

```tsx
function ClickEvent() {
  return (
    <ListItem
      icon={<MaterialIcons.DateRange />}
      description="An Island"
      detail="England"
      onClick={() => alert('Get that Cheddar')}
    >
      Cheddar
    </ListItem>
  );
}
```
