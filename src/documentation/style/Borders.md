<div class="component-desc"><p>Borders help define the space and structure of the interface. </p></div>

<div class="doc-section-divider"></div>

```js noeditor
const BorderRender = require('../../../styleguide_components/BorderRender')
  .BorderRender

;<BorderRender />
```

### Using Border Colors

```js
import { Box } from '../../components/Box'
;<>
  <Box
    borderColor="palette.charcoal300"
    border="solid 1px"
    p="large"
    mb="small"
  >
    I have the default border
  </Box>
  <Box borderColor="palette.charcoal400" border="solid 1px" p="large">
    I have the dark border
  </Box>
</>
```
