```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="stable"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Overlay/Popover.tsx"
  feedbackTitle="Popover Component Feedback"
/>
```

```js
import { Button } from '../Button'
import { Text } from '../Text'
import { Popover } from './Popover'
import { PopoverContent } from './PopoverContent'

const wikipediaWildebeest = (
  <PopoverContent p="large" width="360px">
    <img
      width="100%"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg/440px-Blue_Wildebeest%2C_Ngorongoro.jpg"
    />
    <Text fontSize="small">
      The blue wildebeest, also called the common wildebeest, white-bearded
      wildebeest or brindled gnu, is a large antelope and one of the two species
      of wildebeest. It is placed in the genus Connochaetes and family Bovidae
      and has a close taxonomic relationship with the black wildebeest. The blue
      wildebeest is known to have five subspecies. This broad-shouldered
      antelope has a muscular, front-heavy appearance, with a distinctive robust
      muzzle. Young blue wildebeest are born tawny brown, and begin to take on
      their adult colouration at the age of two months. The adults' hues range
      from a deep slate or bluish gray to light gray or even grayish brown. Both
      sexes possess a pair of large curved horns.
    </Text>
  </PopoverContent>
)
;<>
  <Text>Here's a Popover:</Text>
  <Popover content={wikipediaWildebeest}>
    {(onClick, ref) => (
      <Button onClick={onClick} innerRef={ref}>
        A Wikipedia article about Wildebeests
      </Button>
    )}
  </Popover>
</>
```

### Placement and Arrow

Placement can be adjusted with the `placement` prop. Valid positions are `top`, `left`, `right` and `bottom`, each can be augmented with -`start` or `-end` which places the edge of the popover at the start or end of the target.

If you want to hide the popover arrow you can set the prop `arrow` prop to false.

```js
import { Box } from '../Box'
import { Button } from '../Button'
import { Paragraph } from '../Text'
import { Popover } from './Popover'
import { PopoverContent } from './PopoverContent'

const content = (
  <PopoverContent>
    <Paragraph width={300} p="xxlarge">
      👋 Hello, I am a popover!
    </Paragraph>
  </PopoverContent>
)
;<>
  <Box mb="xxxlarge">
    <Popover content={content}>
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref} mr="xlarge">
          Default
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="right">
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref} mr="xlarge">
          Right
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="left">
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref} mr="xlarge">
          Left
        </Button>
      )}
    </Popover>
  </Box>

  <Box>
    <Popover content={content} placement="bottom-start">
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref} mr="xlarge">
          Bottom Start
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="right-end">
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref} mr="xlarge">
          Right End
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="top-start" arrow={false}>
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref} mr="xlarge">
          Top Start - No arrow
        </Button>
      )}
    </Popover>
  </Box>
</>
```

#### `stopPropagation` Example

Prevent a click event from a `<Popover>` contained element from propogating up to its ancestors in the DOM.

```js
import { Button } from '../Button'
import { List, ListItem } from '../List'
import { Link } from '../Link'
import { Paragraph } from '../Text'
import { Popover } from './Popover'
import { PopoverContent } from './PopoverContent'

const content = (
  <PopoverContent p="large" width={350}>
    No trouble at all...
  </PopoverContent>
)
;<>
  <Link href="http://google.com" target="_blank">
    Open Google in new Tab
    <Popover stopPropagation content={content}>
      {(onClick, ref) => (
        <Button onClick={onClick} innerRef={ref}>
          Show Popover
        </Button>
      )}
    </Popover>
  </Link>
</>
```
