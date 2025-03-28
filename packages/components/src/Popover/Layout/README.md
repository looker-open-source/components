# PopoverLayout

The `PopoverLayout` component manages the popover layout components below to easily meet design-system expectations.

This component composes `PopoverHeader`, `PopoverContent` and `PopverFooter` as needed.

`PopoverHeader` will display the closing button if `footer` is set to false.

By default `PopoverFooter` will contain a dismissal button with the text "Done". That value can be changed by using the prop `closeButton`.

```tsx
function Header() {
  return (
    <PopoverLayout footer={false} header="Header Text">
      We the People of the United States
    </PopoverLayout>
  );
}
```

## Header Icon

In addition to the header text, you can specify an icon to be rendered next to it.

```tsx
function HeaderIconBefore() {
  return (
    <PopoverLayout
      headerIconBefore={
        <Icon icon={<MaterialIcons.Article />} aria-label="Article icon" />
      }
      header="Preamble"
    >
      We the People of the United States
    </PopoverLayout>
  );
}
```

## Header hidden

Use the hidden prop to hide the visible header text but still provide context for screen readers

```tsx
function HeaderHideHeading() {
  return (
    <PopoverLayout header="Header text" hideHeader>
      We the People of the United States
    </PopoverLayout>
  );
}
```

## Footer extra content

Use the footer prop to add an extra element to the Footer.

```tsx
function Full() {
  return (
    <PopoverLayout
      footer={
        <ButtonTransparent color="neutral" size="small">
          Cancel
        </ButtonTransparent>
      }
      header="Header Text"
    >
      We the People of the United States
    </PopoverLayout>
  );
}
```

## Footer closeButton

Use the closeButton prop to change the default value of Footer.

```tsx
function FooterCloseButton() {
  return (
    <PopoverLayout
      closeButton={
        <ButtonTransparent color="neutral" size="small">
          Close
        </ButtonTransparent>
      }
      header="Header Text"
    >
      We the People of the United States
    </PopoverLayout>
  );
}
```

## No Footer

```tsx
function FooterCloseButton() {
  return (
    <PopoverLayout footer={false}>
      We the People of the United States
    </PopoverLayout>
  );
}
```
