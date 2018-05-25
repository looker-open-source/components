
<div class="doc-section-divider"></div>

### A basic Card

At its most basic, a `Card` is a slightly styled container that organizes groups of content, usually linking to a more in-depth view of that content. It can have elevation and a border. A default `Card` makes no assumptions about the content you place inside of it or the size of your card, but you should follow the guidelines to be sure you use them effectively.


```js

// A Card with Block component to add spacing
// Try typing some content into the Block or Card to see how it handles content by default

<Card raised>
  <Block p="4xl"></Block>
</Card>
```

<div class="doc-section-divider"></div>

### A Card with content

Using the [`CardContent`](/#!/CardContent) component quickly gives your content consistent spacing inside your `Card`. You can then use other components to layout your `Card`.

```js
<Card raised url="https://docs.looker.com/relnotes">
  <CardContent>
    <Heading size="2">🎉 Looker Release Notes 🎉</Heading>
    <Heading level="4" size="5">Read all about our latest features</Heading>
    <Text size="6" mode="subdued">Last updated 3 days ago</Text>
  </CardContent>
</Card>
```

<div class="doc-section-divider"></div>

### A group of media Cards

A few common patterns for `Cards` are displaying them in groups and using images to reinforce the content of the card. Below is an example of using `CardGroup` and `CardMedia` components to create a layout of grouped cards.

```js
<CardGroup>

  <Card raised url="https://google.com/search?q=summer+activities">

    <CardMedia image="https://placeimg.com/640/480/nature" title="Summer Nature"></CardMedia>

    <CardContent>
      <Text size="6" transform="upper" weight="semi-bold" mode="subdued">Summer</Text>
      <Heading level="4" size="3" weight="semi-bold" truncate>Life in The Great Outdoors</Heading>
      <Block mt="xs">
        <Text size="5">10 reasons to get off the couch and head outside this summer.</Text>
      </Block>
    </CardContent>
  </Card>

   <Card raised url="https://google.com/search?q=scenic+hikes">

    <CardMedia image="https://placeimg.com/630/480/nature" title="A Scenic Valley"></CardMedia>

    <CardContent>
      <Text size="6" transform="upper" weight="semi-bold" mode="subdued">Explore</Text>
      <Heading level="4" size="3" weight="semi-bold" truncate>Best Scenic Hikes</Heading>
      <Block mt="xs">
        <Text size="5">Looking for a new place to trailblaze? Make sure it has a great view!</Text>
      </Block>
    </CardContent>
  </Card>

  <Card raised url="https://google.com/search?q=relax+outdoors">

    <CardMedia image="https://placeimg.com/620/480/nature" title="Relaxing Views"></CardMedia>

    <CardContent>
      <Text size="6" transform="upper" weight="semi-bold" mode="subdued">Relax</Text>
      <Heading level="4" size="3" weight="semi-bold" truncate>Mindfull Wilderness</Heading>
      <Block mt="xs">
        <Text size="5">Find a place to find your self.</Text>
      </Block>
    </CardContent>
  </Card>

</CardGroup>
```

