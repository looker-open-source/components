# Tree

Tree, like Accordion, is a collapsible section component designed for hiding and showing content. However, unlike Accordion, Tree has a more structured interface and is best used when building tree views like a file structure or a sidebar.

Use the required label prop to set the text of the Tree disclosure. label alternatively accepts a ReactNode for more advanced layouts.

Use the icon prop to display an icon next to the Tree label.

```tsx
function Icon() {
  return (
    <TreeCollection>
      <Tree
        defaultOpen
        icon={<MaterialIcons.Alarm />}
        label={
          <strong>
            <Space between>
              "Alarm" icon has margin-right, but "Download" icon does not
              <MaterialIcons.Download size={20} />
            </Space>
          </strong>
        }
      >
        <TreeItem>Don't mind me</TreeItem>
      </Tree>
    </TreeCollection>
  );
}
```

Use detail to display an element in the negative space of the Tree label.

```tsx
function Detail() {
  return (
    <TreeCollection>
      <Tree
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        detail={
          <IconButton
            icon={<MaterialIcons.Info />}
            label="Get Info"
            onClick={() => alert("You've got info!")}
          />
        }
      >
        <TreeItem icon={<MaterialIcons.Tag />}>Cost</TreeItem>
      </Tree>
    </TreeCollection>
  );
}
```

Use the border prop if you would like to have vertical lines expand from your Tree's indicator icon when open.

```tsx
function Border() {
  return (
    <TreeCollection>
      <Tree label="Border" border={true}>
        <Tree label={<strong>Orders</strong>} defaultOpen>
          <TreeItem>ID</TreeItem>
          <TreeItem>Status</TreeItem>
          <Tree label={<strong>Created</strong>} defaultOpen>
            <TreeItem>Created Date</TreeItem>
            <TreeItem>Created Month</TreeItem>
            <TreeItem>Created Year</TreeItem>
            <TreeItem>Created Quarter</TreeItem>
          </Tree>
        </Tree>
      </Tree>
    </TreeCollection>
  );
}
```

Use the selected prop to display a light grey background on your Tree.

Use the color='key' prop to get more colorful backgrounds when your Tree (or its child Trees and TreeItems) is hovered or selected.

Use the disabled prop to present your Tree in a disabled state. Note that using disabled will not change any Tree behavior like opening and closing on click.

```tsx
function Example1() {
  return (
    <TreeCollection>
      <Tree
        selected
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        defaultOpen
      >
        <Tree disabled label="Created" defaultOpen>
          <TreeItem selected>Created Date</TreeItem>
          <TreeItem disabled>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
      <Tree
        color="key"
        selected
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        defaultOpen
      >
        <Tree disabled label="Created" defaultOpen>
          <TreeItem selected>Created Date</TreeItem>
          <TreeItem disabled>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
    </TreeCollection>
  );
}
```

## Truncating Tree Items & Labels

Occasionally tree item labels will wrap to a second line when the text content is very long, or the available space is very narrow. The text content will wrap by default, but if that is undesirable you can use the truncate prop to limit text content to a single line.

When text content overflows, it will render a tooltip to view the entire content, which is consistent with the [Truncate](/components/text/truncate) component.

```tsx
function TruncateExample() {
  return (
    <>
      <Heading>Default Text Wrapping Layout</Heading>
      <TreeCollection>
        <Tree
          border
          label="A very long label that wraps to a second line. Both the label and the tree item will wrap to two or more lines because there is just too much text."
          icon={<MaterialIcons.TableChart />}
          defaultOpen
        >
          <TreeItem icon={<MaterialIcons.Tag />}>
            Cheese is a dairy product, derived from milk and produced in wide
            ranges of flavours, textures and forms by coagulation of the milk
            protein casein. It comprises proteins and fat from milk, usually the
            milk of cows, buffalo, goats, or sheep.
          </TreeItem>
        </Tree>
      </TreeCollection>

      <Heading>Truncated Text</Heading>
      <TreeCollection>
        <Tree
          border
          label="A very label that wraps to a second line. Sometimes you don't want to take up extra vertical space, and instead it will cut off the text."
          truncate
          icon={<MaterialIcons.TableChart />}
          defaultOpen
        >
          <TreeItem icon={<MaterialIcons.Tag />} truncate>
            Hover over me for a tooltip of the full content. Cheese is a dairy
            product, derived from milk and produced in wide ranges of flavours,
            textures and forms by coagulation of the milk protein casein. It
            comprises proteins and fat from milk, usually the milk of cows,
            buffalo, goats, or sheep.
          </TreeItem>
        </Tree>
      </TreeCollection>
    </>
  );
}
```

## Nesting Trees

You can nest trees within each other by passing a Tree in as a child of another Tree.

**Note:** Tree will automatically indent any child Tree and TreeItems based on their depth in the hierarchy.

```tsx
function Nesting() {
  return (
    <TreeCollection>
      <Tree defaultOpen label="Orders" icon={<MaterialIcons.TableChart />}>
        <Tree defaultOpen label="Created">
          <TreeItem>Created Date</TreeItem>
          <TreeItem>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
    </TreeCollection>
  );
}
```

## Tree Callbacks

Use the onOpen and onClose props if you would like to trigger callbacks on Tree open or close, respectively.

```tsx
function Callbacks() {
  return (
    <Tree
      onOpen={() => alert('Open!')}
      onClose={() => alert('Close!')}
      label="Cheese"
      icon={<MaterialIcons.TableChart />}
    >
      <TreeItem>Gouda</TreeItem>
    </Tree>
  );
}
```

## Controlling a Tree

Like Accordion, a Tree can be either uncontrolled or controlled.

By default, the Tree is an uncontrolled component and maintains its own opened/closed state. If you are using an uncontrolled Tree and want it initially open, use the defaultOpen prop.

However, you can use the isOpen and toggleOpen props to explicitly control the state of your Tree.

When the isOpen prop receives true, your Tree will reveal its content. When false, your content will be hidden.

The toggleOpen prop should receive a function that has one parameter: a boolean. When the Tree's disclosure is clicked, the toggleOpen callback will be triggered and passed the opposite boolean of the current isOpen prop value.

```tsx
function Controlled() {
  const { value, change, toggle } = useToggle(true);
  return (
    <>
      <FieldToggleSwitch on={value} onChange={toggle} label="Toggle" />
      <Tree isOpen={value} toggleOpen={change} label="Controlled Tree">
        <TreeItem icon={<MaterialIcons.Tag />}>Cost</TreeItem>
        <TreeItem icon={<MaterialIcons.Place />}>Location</TreeItem>
        <TreeItem icon={<MaterialIcons.Filter />}>Tier</TreeItem>
        <TreeItem icon={<MaterialIcons.Check />}>Oui ou Non</TreeItem>
      </Tree>
    </>
  );
}
```

## TreeCollection

TreeCollection acts as a wrapper component to Tree and TreeItem elements. For accessibility purposes, all Tree and TreeItem compositions should have a TreeCollection as the top-level element.

```tsx
function Basic() {
  return (
    <TreeCollection>
      <Tree label="Default">
        <Tree label={<strong>Orders</strong>} defaultOpen>
          <TreeItem>ID</TreeItem>
          <TreeItem>Status</TreeItem>
          <Tree label={<strong>Created</strong>} defaultOpen>
            <TreeItem>Created Date</TreeItem>
            <TreeItem>Created Month</TreeItem>
            <TreeItem>Created Year</TreeItem>
            <TreeItem>Created Quarter</TreeItem>
          </Tree>
        </Tree>
      </Tree>
    </TreeCollection>
  );
}
```

## TreeItem

TreeItem is used to create branches in a tree view; it is best used as the direct child of a Tree.

```tsx
function Handlers() {
  return (
    <TreeCollection>
      <Tree label="Cheeses" defaultOpen>
        <TreeItem
          icon={<MaterialIcons.TableChart />}
          detail={<Text color="text2">is great</Text>}
          onClick={() => alert('Clicked Swiss')}
          selected
        >
          Swiss
        </TreeItem>
      </Tree>
    </TreeCollection>
  );
}
```

## Customizing Detail Elements on Tree and TreeItem

You can customize the look and behavior of detail elements by providing the detail prop an object with an "options" property.

Enabling the hoverDisclosure option will hide and show the detail on hover on and hover off.

Enabling the accessory option will render the detail element outside of the label container. This option is most commonly used when you'd like to have a button as your detail element.

```tsx
function CustomDetail() {
  return (
    <TreeCollection>
      <Tree
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        defaultOpen
        detail={{
          content: (
            <IconButton
              icon={<MaterialIcons.Info />}
              label="Get Info"
              onClick={() => alert("You've got info!")}
            />
          ),
          options: {
            accessory: true,
            hoverDisclosure: true,
          },
        }}
      >
        <TreeItem
          icon={<MaterialIcons.Tag />}
          detail={{
            content: (
              <IconButton
                icon={<MaterialIcons.Star />}
                label={<MaterialIcons.Star />}
                onClick={() => alert("You've pivoted!")}
              />
            ),
            options: {
              accessory: true,
              hoverDisclosure: true,
            },
          }}
        >
          Cost
        </TreeItem>
      </Tree>
    </TreeCollection>
  );
}
```

## Windowing

If a TreeCollection contains more than 100 visible descendants (trees, items, and nested trees) at a given time, performance will begin to degrade.
Use WindowedTreeCollection instead, with the following differences:

- The trees prop replaces children
- trees accepts an array of nestable objects where:
  - content is a Tree, TreeItem, or other JSX element that renders either
  - items are any nested tree/items (replaces Tree children)
  - isOpen (optional) controls the state of each tree, rather than the
    isOpen or defaultOpen props on the Tree component itself

**Note:** WindowedTreeCollection should be rendered inside an element with a specified height
or add a height prop to the component directly.

```tsx
function WindowingExample() {
  const { value, toggle } = useToggle();

  const trees = React.useMemo(
    () =>
      Array.from(Array(200), (_, treeIndex) => ({
        content: <Tree label={`Tree ${treeIndex}`} />,
        isOpen: value,
        items: Array.from(Array(10), (_, itemIndex) => {
          if (itemIndex === 2) {
            return {
              content: <Tree label={`Nested Tree ${treeIndex}-${itemIndex}`} />,
              isOpen: value,
              items: Array.from(Array(4), (_, nestedItemIdex) => ({
                content: (
                  <TreeItem>
                    Nested TreeItem {treeIndex}-{itemIndex}-{nestedItemIdex}
                  </TreeItem>
                ),
              })),
            };
          }
          return {
            content: (
              <TreeItem>
                TreeItem {treeIndex}-{itemIndex}
              </TreeItem>
            ),
          };
        }),
      })),
    [value]
  );
  return (
    <SpaceVertical>
      <Button onClick={toggle}>Toggle all {value ? 'closed' : 'open'}</Button>
      <WindowedTreeCollection height={300} width={500} trees={trees} />
    </SpaceVertical>
  );
}
```
