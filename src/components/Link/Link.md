```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/Dirjx0RKbOOrLacqHq61By/Button-and-Links"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Link/Link.tsx"
  feedbackTitle="Link Component Feedback" />
```


### Default Link

The `<Link />` component renders an `<a>` tag that accepts and `href` property. You can also supply an optional `id` property if you want to give your anchor an id.

```js
<List>
  <ListItem><Link href="https://looker.com">👋 I am a link!</Link></ListItem>
  <ListItem><Link href="https://looker.com" id="thumbs-up">👍 I am a link with an id</Link></ListItem>
</List>
```
