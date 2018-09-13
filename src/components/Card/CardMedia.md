```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/PUkKDfseVgoPGNJng7TJ2TIJ/Card"
  githubURL="https://github.com/looker/relens/blob/master/src/components/Card/CardMedia.tsx"
  feedbackTitle="Card Media Component Feedback" />
```

### Displaying an image in your card

A common pattern for `Cards` is to display an image that reinforces what the content is about.

The `CardMedia` component accepts and `image` property that will render the image as a background image and the optional `title` property used to give the image an accessible title if needed.

```js
<Box>
  <Card>
    <CardMedia image="http://fillmurray.com/200/300" title="Bill 1"></CardMedia>
    <CardContent>
      <Heading>A wild Bill appears</Heading>
    </CardContent>
  </Card>
</Box>
<Box mt="medium">
  <Card>
    <CardMedia image="http://fillmurray.com/400/300" title="Bill 2"></CardMedia>
    <CardContent>
      <Heading>Another Bill spoting</Heading>
    </CardContent>
  </Card>
</Box>
```
