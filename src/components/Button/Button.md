```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/Dirjx0RKbOOrLacqHq61By/Button-%26-Links?node-id=914%3A981&viewport=1741%2C951%2C1"
  githubURL="https://github.com/looker/lens/tree/master/src/components/Button"
  feedbackTitle="Button Component Feedback"
/>
```

### Variants

The `<Button />` component accepts a `variant` property which allows you to select the proper button style for the context and action the button is for.

#### Primary

Use a primary button for the most frequently used action or most important action on a page. Primary buttons should only appear once on a page. They are sometimes accompanied by a secondary button.

```js
import { Button } from './Button'
;<Button>Primary Button</Button>
```

##### Primary states

```js noeditor
import { Button } from './Button'
;<>
  <Button mr="xsmall">Primary Idle</Button>
  <Button mr="xsmall" className="hover">
    Primary Hover
  </Button>
  <Button mr="xsmall" className="active">
    Primary Active
  </Button>
  <Button disabled>Disabled</Button>
</>
```

---

#### Outline

Use an outline button alongside a primary button to provide alternative actions on a page. Outline buttons should only appear alongside primary buttons for secondary actions. Use no more than two secondary buttons on a page.

```js
import { Button } from './Button'
;<Button variant="outline">Outline</Button>
```

##### Outline states

```js noeditor
import { Button } from './Button'
;<>
  <Button mr="xsmall" variant="outline">
    Outline Idle
  </Button>
  <Button mr="xsmall" variant="outline" className="hover">
    Outline Hover
  </Button>
  <Button mr="xsmall" variant="outline" className="active">
    Outline Active
  </Button>
  <Button variant="outline" disabled>
    Outline Disabled
  </Button>
</>
```

---

#### Transparent

Use a transparent button as a tertiary action on a screen, they are often used as a Cancel button on a form. Typically it performs the opposite action of a primary button

```js
import { Button } from './Button'
;<Button variant="transparent">Transparent</Button>
```

##### Transparent states

```js noeditor
import { Button } from './Button'
;<>
  <Button mr="xsmall" variant="transparent">
    Transparent Idle
  </Button>
  <Button mr="xsmall" variant="transparent" className="hover">
    Transparent Hover
  </Button>
  <Button mr="xsmall" variant="transparent" className="active">
    Transparent Active
  </Button>
  <Button variant="transparent" disabled>
    Transparent Disabled
  </Button>
</>
```

---

#### Danger

Danger Buttons are to be used in situations where you need to convey some very important, potentially irreversible consequence of pressing this button.

```js
import { Button } from './Button'
;<Button color="danger">Danger</Button>
```

##### Danger states

```js noeditor
import { Button } from './Button'
;<>
  <Button mr="xsmall" color="danger">
    Danger Idle
  </Button>
  <Button mr="xsmall" color="danger" className="hover">
    Danger Hover
  </Button>
  <Button mr="xsmall" color="danger" className="active">
    Danger Active
  </Button>
  <Button color="danger" disabled>
    Danger Disabled
  </Button>
</>
```

#### Danger Variants

Danger Buttons extend the default button, so they also have different variants

```js noeditor
import { Button } from './Button'
;<>
  <Button mr="xsmall" color="danger" variant="outline">
    Danger Outline
  </Button>
  <Button color="danger" variant="transparent">
    Danger Transparent
  </Button>
</>
```

### Size

Use the size property on a `<Button />` to modify the size the button rendered. You can combine it with the `mode` property to get the correct style and size of button you need.

```js
import { Button } from './Button'
;<>
  <Button size="xsmall" mr="xsmall">
    Xsmall Button
  </Button>
  <Button size="small" mr="xsmall">
    Small Button
  </Button>
  <Button mr="xsmall">Medium (default) Button</Button>
  <Button size="large">Large Button</Button>
</>
```

### Disabled

Use a disabled button to indicate to the user what action will be possible on a page once a prerequisite action is taken. Disabled buttons do not respond to user interaction.

```js
import { Button } from './Button'
;<Button disabled>I am disabled</Button>
```

### Buttons with an Icon

Buttons can have an icon before or after their content, using the `iconBefore` and `iconAfter` property. Each property accepts the [name of an icon](/#!/Icons)

```js
import { Button } from './Button'
;<>
  <Button iconBefore="CircleAdd" mr="large">
    Add To Cart
  </Button>
  <Button iconAfter="Trash" color="danger">
    Delete
  </Button>
</>
```

### Additional Action Considerations

When a call to action requires additional steps, include an ellipsis at the end of the button text as a visual clue. This helps reinforce that there are additional steps that can take place before the action takes effect.

```js
import { Button } from './Button'
import { List, ListItem } from '../List'
;<List>
  <ListItem>
    <Button color="danger">Move to Trash...</Button>
  </ListItem>
  <ListItem>
    <Button>Print...</Button>
  </ListItem>
</List>
```

### Extending Button

Sometimes you may want to extend the Button defaults to create a specific styling effect. That should be straightforward by wrapped a StyledComponent in another `styled` call to extend it like so:

```js
import styled from 'styled-components'
import { Button } from './Button'

const RoundButton = styled(Button)`
  border-radius: 2rem;
`
;<RoundButton>Hello RoundButton</RoundButton>
```

### Overriding A Color

Buttons can be passed a SemanticColor object like so:

```js
import { Button } from './Button'
const punkRockColor = {
  main: 'DeepPink',
  light: 'HotPink',
  lighter: 'LightPink',
  dark: 'PaleVioletRed',
  darker: 'MediumVioletRed',
  borderColor: 'MediumVioletRed',
  text: 'White',
}
;<Button color={punkRockColor}>I'm a Punk Rock Button</Button>
```

### Theming Button

Button uses the following theme classes...

```js
import { Box } from '../Box'
import { Button } from './Button'

const mildTheme = theme => {
  const primary = Object.assign({}, theme.colors.semanticColors.primary, {
    main: '#2db264',
    dark: '#198044',
    darker: '#12593c',
  })
  const danger = Object.assign({}, theme.colors.semanticColors.danger, {
    main: '#ffd200',
    dark: '#e5ae17',
    darker: '#a67e11',
    lighter: '#fff1bf',
    borderColor: '#ffd200',
  })

  const newTheme = Object.assign({}, theme)
  newTheme.colors = Object.assign({}, newTheme.colors)
  newTheme.colors.semanticColors = {}
  newTheme.colors.semanticColors.primary = primary
  newTheme.colors.semanticColors.danger = danger
  return newTheme
}

;<React.Fragment>
  <ThemeProvider theme={mildTheme}>
    <Box>
      <Button>Mild Button</Button>
      <Box ml="small" display="inline-block">
        <Button color="danger" variant="outline">
          Mild Danger Outline Button
        </Button>
      </Box>
    </Box>
  </ThemeProvider>
</React.Fragment>
```
