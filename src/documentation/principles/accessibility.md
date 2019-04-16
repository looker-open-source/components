The goal of accessibility is to provide a seamless experience for all users by increasing the usability of our UI, a clear understanding of guidelines, and the ability to navigate all of our products and resources.

### Understanding Accessibility

We want to create a product that is accessible and considers the usability for everyone that might have hearing loss or impaired, those with color blindness or low vision, blindness, and all other disabilities. Accessibility guidelines are included in our Lens components and meet WCAG standards.

```js noeditor
import { Card, CardContent } from '../../components/Card'
import { Heading } from '../../components/Heading'
import { Link } from '../../components/Link'
import { Icon } from '../../components/Icon'
;<Card raised url="https://www.w3.org/WAI/WCAG21/quickref/">
  <CardContent>
    <Heading fontSize="large"> WCAG Web Accessibility Quick Guide</Heading>
    <Heading is="h4" fontSize="medium">
      We follow these guidelines and build them into every Lens component.
    </Heading>
    <Link href="https://www.w3.org/WAI/WCAG21/quickref/">
      Visit WCAG Quick Guide <Icon name="External" />
    </Link>
  </CardContent>
</Card>
```
