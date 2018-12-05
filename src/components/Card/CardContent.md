```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/PUkKDfseVgoPGNJng7TJ2TIJ/Card"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Card/CardContent.tsx"
  feedbackTitle="Card Content Component Feedback" />
```


### Content and Padding

The `CardContent` component is used to add padding around a `Card`'s content.

```js
<Card>
  <CardContent>
    <Text size="medium">Padding</Text>
    <Text size="small" mode="subdued">Some more text</Text>
  </CardContent>
</Card>
```
