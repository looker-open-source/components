# Layout

## Basic

```tsx
function Basic(props: LayoutProps) {
  const { hasAside, ...rest } = props;
  return (
    <Page>
      <Header height="4rem" px="large">
        I'm the header
      </Header>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightskyblue' }}>
          <ItemsFiller count={20} />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
      </Layout>
      <Footer height="3rem" px="large">
        I'm a footer
      </Footer>
    </Page>
  );
}
```

## Fixed With Footer And Header Shadow

```tsx
function FixedWithFooterAndHeaderShadow(props: LayoutProps) {
  const { hasAside, ...rest } = props;
  return (
    <Page fixed>
      <Header
        height="4rem"
        px="large"
        style={{ backgroundColor: 'lightcoral' }}
      >
        I'm the header
      </Header>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightskyblue' }}>
          <ItemsFiller count={20} />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
      </Layout>
      <Footer
        height="3rem"
        px="large"
        style={{ backgroundColor: 'lightcoral' }}
      >
        I'm a footer
      </Footer>
    </Page>
  );
}
```

## Scroll All Areas Together Default

```tsx
function ScrollAllAreasTogetherDefault(props: LayoutProps) {
  const { hasAside, ...rest } = props;
  return (
    <Page>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightsalmon' }}>
          <ConstitutionShort />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <Aside
          p="u10"
          width="10rem"
          style={{ backgroundColor: 'lightskyblue' }}
        >
          <ConstitutionShort />
        </Aside>
      </Layout>
    </Page>
  );
}
```

## Scroll Independently

```tsx
function ScrollIndependently(props: LayoutProps) {
  const { hasAside, ...rest } = props;
  return (
    <Page fixed>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" style={{ backgroundColor: 'lightsalmon' }}>
          <Constitution />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <Aside
          p="u10"
          width="navigation"
          style={{ backgroundColor: 'lightskyblue' }}
        >
          <ConstitutionShort />
        </Aside>
      </Layout>
    </Page>
  );
}
```

## Scroll Selected Areas

```tsx
function ScrollSelectedAreas(props: LayoutProps) {
  const { hasAside, ...rest } = props;
  return (
    <Page fixed>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightsalmon' }}>
          <ConstitutionShort />
        </Aside>
        <Layout hasAside={hasAside} {...rest}>
          <Section
            main
            scrollWithin
            p="u10"
            style={{ backgroundColor: 'lightgoldenrodyellow' }}
          >
            <Heading>Page title</Heading>
            <Constitution />
          </Section>
          <Aside
            scrollWithin
            p="u10"
            style={{ backgroundColor: 'lightskyblue' }}
          >
            <ConstitutionShort />
          </Aside>
        </Layout>
      </Layout>
    </Page>
  );
}
```

## Whitespace Repro

```tsx
function WhitespaceRepro(props: LayoutProps) {
  const { hasAside, ...rest } = props;
  return (
    <Page fixed>
      <Header
        height="4rem"
        px="large"
        style={{ backgroundColor: 'lightcoral' }}
      >
        I'm the header
      </Header>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightsalmon' }}>
          <ItemsFiller count={20} />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
          <IconButton icon={<Info />} label="Info" />
        </Section>
      </Layout>
    </Page>
  );
}
```
