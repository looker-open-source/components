A simple Tooltip component with out of the box styles and behavior.

```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Overlay/Tooltip.tsx"
  feedbackTitle="Tooltip Component Feedback"
/>
```

```js
const TooltipDemo = require('../../../styleguide_components/TooltipDemo')
  .TooltipDemo
;<TooltipDemo />
```

```js
import { Button } from '../Button'
import { Tooltip } from './Tooltip'

;<Tooltip content="More things you should know...">
  {(eventHandlers, ref) => (
    <Button
      innerRef={ref}
      onBlur={eventHandlers.onBlur}
      onFocus={eventHandlers.onFocus}
      onMouseOut={eventHandlers.onMouseOut}
      onMouseOver={eventHandlers.onMouseOver}
      /* {...eventHandlers}
       * IMPORTANT NOTE: eventHandlers should be applied as a spread but can't
       * due to a bug with inline code editor in Styleguidist.
       * Please use spread behavior in actual implementations.
       */
    >
      Hover for Tooltip
    </Button>
  )}
</Tooltip>
```

```js
import { Button } from '../Button'
import { Tooltip } from './Tooltip'

const content =
  'Lorem ipsum dolor amet artisan meditation four loko poutine pinterest meh cold-pressed flexitarian vaporware umami kale chips selvage salvia waistcoat occupy. Jianbing jean shorts VHS austin bushwick.'
;<Tooltip content={content}>
  {(eventHandlers, ref) => (
    <Button
      innerRef={ref}
      onBlur={eventHandlers.onBlur}
      onFocus={eventHandlers.onFocus}
      onMouseOut={eventHandlers.onMouseOut}
      onMouseOver={eventHandlers.onMouseOver}
      /* {...eventHandlers}
       * IMPORTANT NOTE: eventHandlers should be applied as a spread but can't
       * due to a bug with inline code editor in Styleguidist.
       * Please use spread behavior in actual implementations.
       */
    >
      Hover me! (with lots of text)
    </Button>
  )}
</Tooltip>
```
