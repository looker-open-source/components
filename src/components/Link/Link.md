### Default Link

The `<Link />` component renders an `<a>` tag that accepts and `href` property. You can also supply an optional `id` property if you want to give your anchor an id.

```js
<List>
  <ListItem><Link href="https://looker.com">👋 I am a link!</Link></ListItem>
  <ListItem><Link href="https://looker.com" id="thumbs-up">👍 I am a link with an id</Link></ListItem>
</List>
```
### External links

In some cases you may want to use a link that navigates to an external resource and opens in a tab, using the `external` property on a `<Link /> will ensure the link opens in a new tab.

```js
<Link href="https://looker.com" external>I will open in a new tab <Icon name="external" /></Link>
```
