```js noeditor
const StatusAndResources = require('../../../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="experimental"
  githubURL="https://github.com/looker/lens/blob/master/src/components/Form/InputSearch/InputSearch.tsx"
  feedbackTitle="InputSearch Component Feedback"
/>
```

### InputSearch

The `<InputSearch />` component renders a single search input element. You can add a placeholder, and a starter value, also a summary text and a closing button associated with it. To remove the button and summary use the hideControls flag. If you are building a menu you probably want to use `<MenuSearch />`.

#### Basic Example

```javascript
import { InputSearch } from './InputSearch'
import { Divider } from '../../../Divider'
;<>
  <InputSearch placeholder="Type your search" />
  <Divider my="medium" />

  <InputSearch placeholder="Type your search" value="test search" />
  <Divider my="medium" />

  <InputSearch
    width="50%"
    placeholder="Type your search"
    value="test search 0"
    summary={'some text'}
  />
  <Divider my="medium" />

  <InputSearch
    placeholder="Type your search"
    value="test search 1"
    hideControls
  />
</>
```

#### Controlled Example

```javascript
import { InputSearch } from './InputSearch'
import { Divider } from '../../../Divider'

const ExampleInputSearch = ({
  value = '',
  hideControls,
  searchResults = [],
}) => {
  const [keywords, setKeywords] = React.useState(value)
  const onChange = e => {
    setKeywords(e.currentTarget.value)
  }

  return (
    <InputSearch
      placeholder="Type your search"
      summary={keywords.length > 0 && `You typed ${keywords.length} characters`}
      value={keywords}
      onChange={onChange}
      hideControls={hideControls}
    />
  )
}

;<>
  <ExampleInputSearch />
  <Divider my="medium" />
  <ExampleInputSearch value="test search 2" />
  <Divider my="medium" />
  <ExampleInputSearch value="test search 3" hideControls />
</>
```
