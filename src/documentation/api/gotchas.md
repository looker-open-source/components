### Styled Components

##### Styling Child Components and Linter Errors

Styled Components [provides a useful mechanism for styling child components](https://www.styled-components.com/docs/advanced#referring-to-other-components). This syntax, unfortunately, [generates a known linter error](https://github.com/styled-components/stylelint-processor-styled-components/issues/34#issuecomment-325339118). To remove the linter error, simply add the `/* sc-selector */` tag to your style definition. For example:

```jsx static
import { styled, Link } from 'looker-lens'

const Card = styled.div`
  ${/* sc-selector */ Link} {
    background-color: ${props => props.theme.palette.green300}
  }
`
```
