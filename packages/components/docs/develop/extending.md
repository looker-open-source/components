# Extending

## Composition

Looker UI Components (and React) rely heavily on the concept of composition, where smaller components can be composed to create higher-order behavior. In the `BoardCard` example below the `Card`, `CardMedia`, `CardContent` and `Heading` are composed to define a what it means to display a Board object in Card format.

```tsx
() => {
  const BoardCard = ({ title, description, previewImage }) => (
    <Card raised width="24rem">
      <CardMedia image={previewImage} />
      <CardContent>
        <Heading as="h3" fontWeight="semiBold">
          {title}
        </Heading>
        <Paragraph fontSize="small" color="text2">
          {description}
        </Paragraph>
      </CardContent>
    </Card>
  );

  return (
    <BoardCard
      title="Business Metrics"
      previewImage="https://www.fillmurray.com/384/192"
      description="Important metrics we use to understand our daily operational performance."
    />
  );
};
```

## Extending behavior

In some cases we may not support the exact presentation or behavior necessary. Through composition and styling, most components can be extended and customized. Here's an example of a new LoggerButton that logs every click:

```tsx
() => {
  // import React from 'react'
  // import { Button, ButtonProps } from '@looker/components'

  const logHandler = event => {
    /**
     *  Place an actual logging function here.
     *  For our example we'll simply log to the browser console.
     **/
    console.log('You clicked:', event.currentTarget);
  };

  const LoggerButton = ({ onClick, ...props }) => {
    const handleClick = event => {
      logHandler(event);
      if (onClick) onClick(event);
    };

    return (
      <ButtonOutline onClick={handleClick} {...props}>
        {props.children}
      </ButtonOutline>
    );
  };

  return (
    <LoggerButton onClick={() => alert('Thanks for the click.')}>
      Click to run example
    </LoggerButton>
  );
};
```

## Extending styling

Styling can also be extended, but care is needed to ensure you do not violate Looker's design principles.

```tsx
() => {
  // import { Button } from '@looker/components'
  // import styled from 'styled-components'

  const CustomButton = styled(Button)`
    background: white;
    border-color: transparent;
    border-radius: 100%;
    color: hotpink;
    font-size: 2rem;
    transition: transform 1.5s, background 2s;
    width: 42px;

    &:hover,
    &:focus {
      background: hotpink;
      border-color: transparent;
      color: white;
      transform: rotate(360deg);
    }

    &:active {
      background: orange;
    }
  `;

  return <CustomButton size="large">+</CustomButton>;
};
```
