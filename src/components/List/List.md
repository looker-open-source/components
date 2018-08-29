```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;

<StatusAndResources
  status="experimental"
  figmaURL="https://www.figma.com/file/VyHO1Hv1XaW1v3lE9I4PVT/Lists?node-id=1%3A3&viewport=1737%2C947%2C1"
  githubURL="https://github.com/looker/relens/blob/master/src/components/List/List.tsx"
  feedbackTitle="List Component Feedback" />
```


### The Default List

By default a `<List />` component will render as an unordered list, `<ul>` tag, with no marker. Each item in the list should be wrapped in the `<ListItem />` component. Below is an example of creating a list of links using the default list behavior.
```js
<List>
  <ListItem><Link href="/#!/Card">Lens Card</Link></ListItem>
  <ListItem><Link href="/#!/Link">Lens Link</Link></ListItem>
  <ListItem><Link href="/#!/Heading">Lens Heading</Link></ListItem>
</List>
```

### List Types

Often times you want to have a marker before each item in your list, you can use the `type` property to change list marker and also the semantic html tag used to wrap the list.

```js
<List mb={5}>
  <ListItem>An unordered list</ListItem>
  <ListItem>Wraps in a <Code>&lt;ul&gt;</Code> tag</ListItem>
  <ListItem>No marker</ListItem>
</List>

<List type="bullet" mb={5}>
  <ListItem>An unordered list</ListItem>
  <ListItem>Wraps in a <Code>&lt;ul&gt;</Code> tag</ListItem>
  <ListItem>Bullet marker</ListItem>
</List>

<List type="number" mb={5}>
  <ListItem>An orderd list</ListItem>
  <ListItem>Wraps in a <Code element="code">&lt;ol&gt;</Code> tag</ListItem>
  <ListItem>Number marker</ListItem>
</List>

<List type="letter">
  <ListItem>An ordered list</ListItem>
  <ListItem>Wraps in a <Code>&lt;ol&gt;</Code> tag</ListItem>
  <ListItem>Alpha marker</ListItem>
</List>
```

### Hiding the List marker

If for semantic reasons you need an ordered list but do not want to display the marker, you can control that with the `nomarker` property.

```js
<List type="number" nomarker>
 <ListItem>I am an ordered list</ListItem>
 <ListItem>But I do not have a marker</ListItem>
 <ListItem>That is neat</ListItem>
</List>
```
