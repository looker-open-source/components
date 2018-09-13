```jsx noeditor
<Box mx="auto">
  <Text>Looker's Component Library</Text>
</Box>
```

```jsx noeditor
<div style={{display: 'flex'}}>
  <div style={{flex: 1, marginRight: '1rem'}}>
    <Card raised>
      <CardContent>
        <Heading level="3" size="2" weight="semi-bold">⇟ Installation</Heading>
        <Box my="medium">
          <Text>Lens packages are served by Looker's private package server, Nexus, and can be installed through npm or yarn.</Text>
        </Box>
        <Code>
          yarn add looker-lens
        </Code>
      </CardContent>
    </Card>
  </div>
  <div style={{flex: 1, marginRight: '1rem'}}>
    <Card raised>
      <CardContent>
        <Heading level="3" size="2" weight="semi-bold" truncate><IconExploreCircle /> Explore</Heading>
        <Box my="medium">
          <Text size="5">Search or browse through the component listing on this site. You can use the interactive prompts to compose whole components right in Lens.</Text>
        </Box>
      </CardContent>
    </Card>
  </div>
  <div style={{flex: 1}}>
    <Card raised>
      <CardContent>
        <Text size="6" transform="upper" weight="semi-bold" mode="subdued">Relax</Text>
        <Heading level="4" size="3" weight="semi-bold" truncate>Mindfull Wilderness</Heading>
        <div mt="xs">
          <Text size="5">Find a place to find your self.</Text>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
```
