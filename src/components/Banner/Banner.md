```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources').StatusAndResources;
<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Banner/Banner.tsx"
  feedbackTitle="Banner Component Feedback" />
```

### Banner

The `<Banner />` component is used to alert the user with `warning`, `error`, `info`, or `confirmation` messages, settable via the `intent` property.

```js
<Box bg="white" p="medium">
  <Banner intent='warning'>Warning</Banner>
  <Banner intent='error'>Error</Banner>
  <Banner intent='info'>Info</Banner>
  <Banner intent='confirmation'>Confirmation</Banner>
</Box>
```

Banners can also be set to be `dismissable`, giving them a close button, and allows for a dismiss handler to be passed to `onDismiss`.

```js
class Parent extends React.Component {

  constructor () {
    this.state = {
      show: true
    }
  }

  render () {
    return this.state.show && <Banner intent='warning' onDismiss={() => this.setState({ show: false })} dismissable>I can be closed</Banner>
  }
}

<Parent />

```
