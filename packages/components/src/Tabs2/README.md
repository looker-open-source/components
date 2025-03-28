# Tabs2

_As compared with Tabs, Tabs2 is the simpler version to implement and should be used for basic use cases._

`Tabs2` contains one or more `Tab2` components. `Tabs2`, when left uncontrolled, manages the visible tab as well as switching between tabs.

Each `Tab2` must have a `label`. The value passed as children will be displayed as its content area. `id` is optional (`label` will be used in its place if not supplied) but `id` is highly recommended when using `Tabs2` in a controlled state.

```tsx
function Basic(props: Tabs2Props) {
  return (
    <Tabs2 {...props}>
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
    </Tabs2>
  );
}
```

## Distribute Attribute

Using the `distribute` prop on `Tabs2` will equally distribute each `Tab` in the container.

```tsx
function Disabled() {
  return (
    <Tabs2>
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
      <Tab2 disabled id="human" label="Human">
        Humans tab is disabled
      </Tab2>
    </Tabs2>
  );
}
```

## Default Tab

Using the `defaultTabId` prop on `Tabs2` will change the tab that is selected by default.

```tsx
function DefaultTab() {
  return (
    <Tabs2 defaultTabId="dogs">
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
    </Tabs2>
  );
}
```

## Horizontal Scroll

`Tabs` supports scrolling when the tabs' combined width cannot be accommodated within the viewport width. Try scrolling left-right.

```tsx
function Scrolling() {
  const tabs = new Array(20).fill('Tab2');
  return (
    <Tabs2>
      {tabs.map((value, index) => (
        <Tab2 label={`Hello World ${index}`} key={index}>
          This is {value} {index}
        </Tab2>
      ))}
    </Tabs2>
  );
}
```

## Disabled Tab

Using the `disabled` prop on an individual `Tab2` will make the tab disabled and not accessible.

```tsx
function Disabled() {
  return (
    <Tabs2>
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
      <Tab2 disabled id="human" label="Human">
        Humans tab is disabled
      </Tab2>
    </Tabs2>
  );
}
```
