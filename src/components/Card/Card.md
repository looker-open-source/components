```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/PUkKDfseVgoPGNJng7TJ2TIJ/Card"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Card/Card.tsx"
  feedbackTitle="Card Component Feedback"
/>
```

<div class="doc-section-divider"></div>

### A basic Card

At its most basic, a `Card` is a slightly styled container that organizes groups of content, usually linking to a more in-depth view of that content. It can have elevation and a border. A default `Card` makes no assumptions about the content you place inside of it or the size of your card, but you should follow the guidelines to be sure you use them effectively.

```js
// A Card
// Try typing some content into the Card to see how it handles content by default
import { Card } from './Card'
import { Text } from '../Text'
;<Card raised>
  <Text mode="subdued" fontSize="xlarge">
    Hello World!
  </Text>
</Card>
```

<div class="doc-section-divider"></div>

### A Card with content

Using the [`CardContent`](/#!/CardContent) component quickly gives your content consistent spacing inside your `Card`. You can then use other components to layout your `Card`.

```js
import { Card, CardContent } from './'
import { Heading } from '../Heading'
import { Text } from '../Text'
;<Card raised>
  <CardContent>
    <Heading fontSize="xxxlarge">🎉 Looker Release Notes 🎉</Heading>
    <Heading is="h4" fontSize="small">
      Read all about our latest features
    </Heading>
    <Text fontSize="xsmall" mode="subdued">
      Last updated 3 days ago
    </Text>
  </CardContent>
</Card>
```

<div class="doc-section-divider"></div>

### A group of media Cards

A few common patterns for `Cards` are displaying them in groups and using images to reinforce the content of the card.

```js
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardMedia } from './CardMedia'
import { Flex } from '../Flex'
import { FlexItem } from '../FlexItem'
import { Heading } from '../Heading'
import { Text } from '../Text'
;<Flex>
  <FlexItem width="33%" mr="small">
    <Card raised>
      <CardMedia
        image="https://placeimg.com/640/480/nature"
        title="Summer Nature"
      />
      <CardContent>
        <Text
          fontSize="xsmall"
          transform="upper"
          fontWeight="semiBold"
          mode="subdued"
        >
          Summer
        </Text>
        <Heading is="h4" fontSize="medium" fontWeight="semiBold" truncate>
          Life in The Great Outdoors
        </Heading>
        <div>
          <Text fontSize="small">
            10 reasons to get off the couch and head outside this summer.
          </Text>
        </div>
      </CardContent>
    </Card>
  </FlexItem>
  <FlexItem width="33%" mr="small">
    <Card raised>
      <CardMedia
        image="https://placeimg.com/630/480/nature"
        title="A Scenic Valley"
      />
      <CardContent>
        <Text
          fontSize="xsmall"
          transform="upper"
          fontWeight="semiBold"
          mode="subdued"
        >
          Explore
        </Text>
        <Heading is="h4" fontSize="medium" fontWeight="semiBold" truncate>
          Best Scenic Hikes
        </Heading>
        <div mt="xs">
          <Text fontSize="small">
            Looking for a new place to trailblaze? Make sure it has a great
            view!
          </Text>
        </div>
      </CardContent>
    </Card>
  </FlexItem>
  <FlexItem width="33%">
    <Card raised>
      <CardMedia
        image="https://placeimg.com/620/480/nature"
        title="Relaxing Views"
      />
      <CardContent>
        <Text
          fontSize="xsmall"
          transform="upper"
          fontWeight="semiBold"
          mode="subdued"
        >
          Relax
        </Text>
        <Heading is="h4" fontSize="large" fontWeight="semiBold" truncate>
          Mindfull Wilderness
        </Heading>
        <div mt="xs">
          <Text fontSize="small">Find a place to find your self.</Text>
        </div>
      </CardContent>
    </Card>
  </FlexItem>
</Flex>
```
