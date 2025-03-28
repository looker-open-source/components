# Best Practices

## General

- Buttons **do not** open a new page, use links instead
- Buttons can open dialogs and menus, but should use the proper [ARIA attributes](#related-aria-attributes)

## Markup Expectations

- **Always** use the `<button>` element. This solves most of the accessibly concerns for free.

## Labeling Expectations

- Use clear and descriptive labels. By default this is the text inside the `<Button>` component.
- Ambiguous labels like "click here", "run", "save" are ok for sighted users but can lack context for users using assistive technology. Use the `aria-label` attribute to provide an accessible label for all `<Button>` components with potentially ambiguous labels.
- Icon only buttons must provide a descriptive label using the `aria-label` attribute.

## Focus Expectations

- Buttons with `:focus` should have an outline and/or a visible change to show it has focus.

## Keyboard Expectations

- Buttons with focus should be activated when user hits the `ENTER` and `SPACEBAR` keys
- If button has focus, `TAB` and `SHIFT+TAB` should move focus to next focusable element.

## Related Aria Attributes

### aria-label

Use this to provide more context and an accessible label for `<Button>` components. **Must be** used for buttons with ambiguous labels and icon only buttons.

For example `<Button aria-label="Save Dashboard">Save</Button>` would be announced as "Save Dashboard Button" by a screen reader instead of just "Save Button".

### aria-haspopup

Use this to indicate that when the buttons is pressed a popup is triggered. A popup can be a dialog or menu.

For example say you have an icon-only button that reveals a set of options in a context menu when clicked, you would do the following:

```tsx
<Button aria-haspopup="true" aria-label="Look Settings">
  Settings
</Button>
```

This would be announced as "Look Settings popup button" by a screen reader.
