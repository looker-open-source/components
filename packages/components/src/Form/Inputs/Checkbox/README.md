# Checkbox

The `<Checkbox />` component renders a single checkbox element on the page, with no accompanying label. It is generally used to construct higher-order components like the `<FieldCheckbox />`. If you are building a form, you probably want to use `<FieldCheckbox />` instead as it provides label support.

## Checked Property

The `<Checkbox />` component can be rendered in three different states: checked, unchecked, and "mixed". In addition to the standard boolean, rendering a "mixed" value can be used to indicate that only a fraction of related sub-options have been selected.

```tsx
function Checked() {
  return <Checkbox checked />;
}
```

**Note:** The "mixed" value is only available to the `checked` property and not available to `defaultChecked` property.

```tsx
function Checked() {
  return <Checkbox checked="mixed" />;
}
```

## onChange Property

`Checkbox` accepts an onChange callback, which can be used for toggling checkbox state.

```tsx
function OnChange() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => setChecked(!checked);
  return <Checkbox checked={checked} onChange={handleChange} />;
}
```

## Advanced Use: Controlling parent/child mixed states

Using a mixed state checkbox can be used to establish a parent and child relationship between multiple options. This is an advanced use and will likely require bespoke state management. In an attempt to facilitate a standard UX, we've create a hook and state pattern.

This may not be sufficient for your own use case, but it may provide a good starting point and reference for how it should work.

```tsx
function MixedStates() {
  // Set up local state and child change handlers
  const [parentState, setParentState] = useState(false as MixedBoolean);
  const [appleState, setAppleState] = useState(false as MixedBoolean);
  const [bananaState, setBananaState] = useState(true as MixedBoolean);
  const handleAppleChange = () => setAppleState(!appleState);
  const handleBananaChange = () => setBananaState(!bananaState);

  // Establish checkbox hierarchy for use in custom hook
  const fruitTree = {
    children: [
      { setState: setAppleState, state: appleState },
      { setState: setBananaState, state: bananaState },
    ],
    parent: {
      setState: setParentState,
      state: parentState,
    },
  };

  // Sync parent/child states and get provided parent change handler
  const handleParentChange = useMixedStateCheckbox(fruitTree);

  return (
    <UnorderedList>
      <li>
        <FieldCheckbox
          label="All Fruit"
          value="all-fruit"
          onChange={handleParentChange}
          checked={parentState}
        />
      </li>
      <li>
        <UnorderedList pl="u5">
          <li>
            <FieldCheckbox
              label="🍏"
              value="apple"
              onChange={handleAppleChange}
              checked={appleState}
            />
          </li>
          <li>
            <FieldCheckbox
              value="apple"
              onChange={handleBananaChange}
              checked={bananaState}
              label="🍌"
            />
          </li>
        </UnorderedList>
      </li>
    </UnorderedList>
  );
}
```

## Name and ID

A name and ID can be specified in the `<Checkbox />` component. Names are important if the checkbox is used in the context of a form, in which case a name is required for the value of the checkbox to be captured.

```tsx
function Basic(props: CheckboxProps) {
  return <Checkbox name="someName" id="someId" {...props} />;
}
```

## Disabled Property

Use the disable property to gray out the checkbox, making it unclickable.

```tsx
function Disabled() {
  return <Checkbox disabled />;
}
```

```tsx
function DisabledChecked() {
  return <Checkbox disabled checked />;
}
```

## ReadOnly property

`Checkbox` will ignore user-actions on a `Checkbox` with the `readOnly` property enabled, similar to `disabled` but without greying out the option.

NOTE: In HTML specifying `readonly` on _only_ prevents changes to `value` attribute of the checkbox and therefore allowing the user to still check and uncheck the checkbox.

In most cases we emulate the HTML specification where it has an existing decision or feature. However, the specification's behavior around checkboxes with a `readonly` attribute is rather unintuitive.

```tsx
function ReadOnly() {
  return <Checkbox readOnly />;
}
```

## Accessibility

Use `FieldCheckbox` to ensure accessibility. If you must use `Checkbox` on its own, always associate a `label`, either by wrapping it around the `Checkbox`, or using the `for` attribute corresponding to the `Checkbox` id attribute.
