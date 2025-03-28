# Card

At its most basic, a `Card` is a slightly styled container that organizes groups of content, usually linking to a more in-depth view of that content. It can have elevation and a border. A default `Card` makes no assumptions about the content you place inside of it or the size of your card, but you should follow the guidelines to be sure you use them effectively.

```tsx
export default () => {
  return (
    <Card raised>
      <Paragraph color="text1" fontSize="xlarge">
        Hello World!
      </Paragraph>
    </Card>
  );
};
```

## CardContent

Using the `CardContent` component quickly gives your content consistent spacing inside your `Card`. You can then use other components to layout your `Card`.

```tsx
export default () => {
  return (
    <Card raised>
      <CardContent>
        <Heading fontSize="xxxlarge">🎉 Looker Release Notes 🎉</Heading>
        <Heading as="h4" fontSize="small">
          Read all about our latest features
        </Heading>
        <Paragraph fontSize="xsmall" color="text1">
          Last updated 3 days ago
        </Paragraph>
      </CardContent>
    </Card>
  );
};
```

## CardMedia

A common pattern for `Cards` is to display an image that reinforces what the content is about.

The `CardMedia` component accepts and `image` property that will render the image as a background image and the optional `title` property used to give the image an accessible title if needed.

```tsx
export default () => {
  return (
    <Card raised>
      <CardContent>
        <Heading fontSize="xxxlarge">🎉 Looker Release Notes 🎉</Heading>
        <Heading as="h4" fontSize="small">
          Read all about our latest features
        </Heading>
        <Paragraph fontSize="xsmall" color="text1">
          Last updated 3 days ago
        </Paragraph>
      </CardContent>
    </Card>
  );
};
```

## A group of media Cards

A few common patterns for `Cards` are displaying them in groups and using images to reinforce the content of the card.

```tsx
export default () => {
  return (
    <Grid columns={3}>
      <Card raised>
        <CardMedia
          image="https://placeimg.com/640/480/nature"
          title="Summer Nature"
        />
        <CardContent>
          <Span
            fontSize="xsmall"
            textTransform="uppercase"
            fontWeight="semiBold"
            color="text1"
          >
            Summer
          </Span>
          <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>
            Life in The Great Outdoors
          </Heading>
          <Paragraph fontSize="small">
            10 reasons to get off the couch and head outside this summer.
          </Paragraph>
        </CardContent>
      </Card>
      <Card raised>
        <CardMedia
          image="https://placeimg.com/630/480/nature"
          title="A Scenic Valley"
        />
        <CardContent>
          <Span
            fontSize="xsmall"
            textTransform="uppercase"
            fontWeight="semiBold"
            color="text1"
          >
            Explore
          </Span>
          <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>
            Best Scenic Hikes
          </Heading>
          <Paragraph fontSize="small">
            Looking for a new place to trailblaze? Make sure it has a great
            view!
          </Paragraph>
        </CardContent>
      </Card>
      <Card raised>
        <CardMedia
          image="https://placeimg.com/620/480/nature"
          title="Relaxing Views"
        />
        <CardContent>
          <Span
            fontSize="xsmall"
            textTransform="uppercase"
            fontWeight="semiBold"
            color="text1"
          >
            Relax
          </Span>
          <Heading as="h4" fontSize="large" fontWeight="semiBold" truncate>
            Mindfull Wilderness
          </Heading>
          <Paragraph fontSize="small">
            Find a place to find your self.
          </Paragraph>
        </CardContent>
      </Card>
    </Grid>
  );
};
```
