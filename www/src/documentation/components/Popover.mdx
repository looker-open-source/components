```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="stable"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Popover/Popover.tsx"
  feedbackTitle="Popover Component Feedback"
/>
```

### Popover Accessibility

Popover triggers should have the `aria-haspopover` attribute set to `true`, you can see an example on the buttons that trigger the popovers below.

---

### Basic Popover

```js
import { Button } from '../Button'
import { Paragraph, Text } from '../Text'
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
  <Paragraph>Here's a Popover:</Paragraph>
  <Popover content={wikipediaWildebeest}>
    {(onClick, ref, className) => (
      <Button
        aria-haspopup="true"
        onClick={onClick}
        innerRef={ref}
        className={className}
      >
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
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          innerRef={ref}
          className={className}
          mr="xlarge"
        >
          Default
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="right">
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          innerRef={ref}
          className={className}
          mr="xlarge"
        >
          Right
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="left">
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          innerRef={ref}
          className={className}
          mr="xlarge"
        >
          Left
        </Button>
      )}
    </Popover>
  </Box>

  <Box>
    <Popover content={content} placement="bottom-start">
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          innerRef={ref}
          className={className}
          mr="xlarge"
        >
          Bottom Start
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="right-end">
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          innerRef={ref}
          className={className}
          mr="xlarge"
        >
          Right End
        </Button>
      )}
    </Popover>

    <Popover content={content} placement="top-start" arrow={false}>
      {(onClick, ref, className) => (
        <Button
          aria-haspopup="true"
          onClick={onClick}
          innerRef={ref}
          className={className}
          mr="xlarge"
        >
          Top Start - No arrow
        </Button>
      )}
    </Popover>
  </Box>
</>
```

### Grouped Popovers

By default Popover cancels event bubbling when a click event triggers the closure of the Popover. \* This was deemed a best practice as it prevents inadveted destructive actions and mirrors behavior seen in many commonly used applications (e.g. Chrome).

However, where several related Popover components are grouped together, cancelling event bubbling for the "dismissal click" can make for an awkward UX. This functionality is used for items grouped to create a larger navigation component or associated controls such as a collection of filters.

To create a group, assigned a reference to an containing element and then assign the reference to that element to `groupedPopoversRef` on each `Popover`. This will override the `Popover` component's usual behavior of cancelling event propogation on the clicks outside of the `ModalPortal` associated with the `Popover`. The first click outside of the `ModalPortal` will still close the `Popover` but click event propogation or otherwise surpressed and instead will be allowed to produce its usual behavior.

```js
import { Button } from '../Button'
import { Box } from '../Box'
import { Popover } from './Popover'
import { PopoverContent } from './PopoverContent'

const Component = () => {
  const groupRef = React.useRef()

  const content = (
    <PopoverContent p="large" width="360px">
      Example Popover text.
    </PopoverContent>
  )

  return (
    <Box display="flex">
      <Box
        display="flex"
        justifyContent="space-around"
        innerRef={groupRef}
        p="large"
        border="3px solid green"
      >
        <Popover content={content} groupedPopoversRef={groupRef}>
          {(onClick, ref, className) => (
            <Button
              aria-haspopup="true"
              onClick={onClick}
              innerRef={ref}
              className={className}
            >
              Instant Click
            </Button>
          )}
        </Popover>

        <Popover content={content} groupedPopoversRef={groupRef}>
          {(onClick, ref, className) => (
            <Button
              aria-haspopup="true"
              mx="large"
              onClick={onClick}
              innerRef={ref}
              className={className}
            >
              Instant Click
            </Button>
          )}
        </Popover>

        <Popover content={content}>
          {(onClick, ref, className) => (
            <Button
              aria-haspopup="true"
              variant="outline"
              onClick={onClick}
              innerRef={ref}
              className={className}
            >
              Defer Click
            </Button>
          )}
        </Popover>
      </Box>
      <Popover content={content}>
        {(onClick, ref, className) => (
          <Button
            aria-haspopup="true"
            variant="transparent"
            m="xlarge"
            onClick={onClick}
            innerRef={ref}
            className={className}
          >
            Outside Group
          </Button>
        )}
      </Popover>
    </Box>
  )
}
;<Component />
```
