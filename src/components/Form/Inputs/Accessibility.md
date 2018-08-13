# Accessibility

## Best Practices
- Placeholders are not a substitute for labels.
- Use the correct [input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types_) for the required data to get more accessible fields for free.
- See related [ARIA attributes](#related-aria-attributes)

## Markup Expectations
- **Always** use the `<input>` element with the proper `type` attribute for the content, e.g. `<input type="text">` for text content and `<input type"=number">` for numbers.
- **Always** include an unique id on the `<input>` element so it can be referenced by a label `<input type="text" id="first-name">`
- Fields that are required **must have** the `required` attribute: `<input type="text" id="first-name" required>`

## Labeling Expectations
- Use clear and descriptive labels that avoid ambiguity.
- Make required fields obvious.
- **Always** include a descriptive label with each input, the `for` attribute of the label should match the `id` of the input it labels
```
<label for="first-name">First Name</label>
<input id="first-name" type="text" />
```
- Fields with validations **must have** a the `aria-desrcibedby` attribute to ensure the error message for the field is read by assistive technology.
  ```
  <label for="first-name">First Name</label>
  <input id="first-name" type="text" aria-describedby="fn-error-message" required />
  <p id="fn-error-message">This field is required</p>
  ```


## Focus Expectations
- Input fields with `:focus` should have an outline and/or a visible change to show it has focus.
- If the input field with `:focus` has an error, the error should be read by a screen reader

## Keyboard Expectations
- If input has focus, `TAB` and `SHIFT+TAB` should move focus to next focusable element...
- If input has focus the `Enter` key should submit the form.

## Related Aria Attributes

### `aria-describedby`
Use this to provide a detailed descriptions of a field that contains errors.

```
  <label for="email">Email Address</label>
  <input id="email" type="email" aria-describedby="email-error-message" />
  <p id="email-error-message">Please enter a valid email address</p>
```

This would announce "Email Address, edit text. Please enter a valid email address"





