# FilterToken

`FilterToken` renders a token showing the summary of the current expression, and when clicked, opens a popover containing the filter UI (as well as any applicable error message). In some cases, a filter's config may be set to display inline, in which case `FilterToken` will simply render the filter UI without the token or popover.

```tsx
<FilterToken
  name="Age"
  type="field_filter"
  field={{ is_numeric: true }}
  expression="[0,100]"
/>
```
