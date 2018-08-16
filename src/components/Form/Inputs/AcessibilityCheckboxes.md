# Accessibility

## Best Practices
- Individual checkboxes must have an onscreen `<label>`
- Groups of checkboxes must have group label, using the `<fieldset>` and `<legend>` tags.
- See related [ARIA attributes](#related-aria-attributes)

## Markup Expectations
- **Always** include an unique id on the checkbox element so it can be referenced by a label `<input type="checkbox" id="agree">`


## Labeling Expectations
- Use clear and descriptive labels that avoid ambiguity.
- **Always** include a `<label>` with a `for` property that matches the checkbox `id`.
```
<label for="email-optin"><input type="checkbox" id="email-optin" value="confirm"> Subscript to our email list<label>
```
- Groups of checkboxes **must be** wrapped in a `<fieldset>` and have `<legend>` that describes the group
```
<fieldset>
  <legend>Pick your favorite emojis</legend>

  <input type="checkbox" id="pizza" name="emoji" value="pizza" />
  <label for="pizza">🍕</label>

  <input type="checkbox" id="avocado" name="emoji" value="avocado" />
  <lable for="avocado">🥑</label>

  <input type="checkbox" id="grapes" name="emoji" value="grapes" />
  <lable for="grapes">🍇</label>
</fieldset>
```



## Focus Expectations
- checkboxes with `:focus` should have an outline and/or a visible change to show it has focus.
- If the checkbox with `:focus` has an error, the error should be read by a screen reader

## Keyboard Expectations
- If checkbox has focus the `SPACE` key should toggle the state.
- If checkbox has focus the `Enter` key should submit the form.
- If checkbox has focus, `TAB` and `SHIFT+TAB` should move focus to next focusable element.

## Related Aria Attributes

### `aria-describedby`
Use this to provide a detailed descriptions of a field that contains errors.

```
  <label for="approve">Approve Changes</label>
  <input id="approve" type="checkbox" aria-describedby="confirm-error-message" />
  <p id="confirm-error-message">Confirm you approve these changes</p>
```

This would announce "Approve, unchecked checkbox. Confirm you approve these changes"





