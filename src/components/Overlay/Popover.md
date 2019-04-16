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

You can use the `pin` and `arrow` properties to customize the `Popover`'s behavior

```js
import { Button } from '../Button'
import { List, ListItem } from '../List'
import { Paragraph } from '../Text'
import { Popover } from './Popover'
import { PopoverContent } from './PopoverContent'

const content = (
  <PopoverContent p="large" width={350}>
    <Paragraph fontWeight="bold" mb="small">
      Customizations:
    </Paragraph>
    <List type="bullet">
      <ListItem>
        I am pinned, so I won't reposition if my content overflows the window.
      </ListItem>
      <ListItem>My arrow is also hidden.</ListItem>
    </List>
  </PopoverContent>
)
;<>
  <Popover pin arrow={false} content={content}>
    {(onClick, ref) => (
      <Button onClick={onClick} innerRef={ref}>
        Pinned and arrowless popover
      </Button>
    )}
  </Popover>
</>
```
