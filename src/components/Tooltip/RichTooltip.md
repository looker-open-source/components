## RichTooltip

```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="stable"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Tooltip/RichTooltip.tsx"
  feedbackTitle="RichTooltip Component Feedback"
/>
```

```js
const RichTooltipDemo = require('../../../styleguide_components/RichTooltipDemo')
  .RichTooltipDemo
;<RichTooltipDemo />
```

```js
import { Box } from '../Box'
import { Link } from '../Link'
import { Text } from '../Text'
import { RichTooltip } from './RichTooltip'
import { RichTooltipContent } from './RichTooltipContent'

const wikipediaWildebeest = (
  <RichTooltipContent width="360px">
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
  </RichTooltipContent>
)
;<Box display="inline-block" mr="small">
  Here's a RichTooltip connected to a Link:
  <RichTooltip content={wikipediaWildebeest} placement="auto-end">
    {(eventHandlers, ref) => (
      <Link
        href="https://en.wikipedia.org/wiki/Wildebeest"
        innerRef={ref}
        {...eventHandlers}
      >
        A Wikipedia article about Wildebeests
      </Link>
    )}
  </RichTooltip>
</Box>
```
