`IconButton`'s are used when you need an icon to trigger an action, such as showing a dialog or deleting an item. Icon buttons require a `label` that describes it's action. The `label` should be descriptive and succinct.

`IconButton`'s come in five sizes, `xxsmall`, `xsmall` (default), `small`, `medium`, and `large`.

If you need an icon for purely decorative purposes use an `<Icon />` instead.

```js
import { IconButton } from './IconButton'
;<>
  <IconButton label="Add File" icon="Plus" size="xxsmall" mr="small" />
  <IconButton label="Settings" icon="Gear" mr="small" />
  <IconButton
    label="Add to Favorites"
    icon="Favorite"
    size="small"
    mr="small"
  />
  <IconButton
    label="Delete Look"
    icon="Trash"
    size="medium"
    color="danger"
    mr="small"
  />
  <IconButton label="Close" icon="Close" size="large" outline mr="small" />
</>
```
