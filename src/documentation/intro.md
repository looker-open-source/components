```jsx noeditor
<Box mx="auto">
  <Text>Looker's Component Library</Text>
</Box>
```

```jsx noeditor
const semanticColors = require('../themes/semantic_colors').semanticColors;

<div style={{display: 'flex'}}>
  <div style={{flex: 1, marginRight: '1rem'}}>
    <Card raised bg={semanticColors.primary.lighter}>
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
    <Card raised bg={semanticColors.primary.lighter}>
      <CardContent>
        <Heading level="3" size="2" weight="semi-bold" truncate><IconExploreCircle /> Explore</Heading>
        <Box my="medium">
          <Text size="5">Search or browse through the component listing on this site. You can use the interactive prompts to compose whole components right in Lens.</Text>
        </Box>
      </CardContent>
    </Card>
  </div>
  <div style={{flex: 1}}>
    <Card raised bg={semanticColors.primary.lighter}>
      <CardContent>
        <Heading level="3" size="2" weight="semi-bold" truncate>⃔ Contribute</Heading>
        <Box my="medium">
          <Text size="5">Want something in Lens you don't see here? Follow the contribution guidelines and best practices, then open a Pull Request on the <Link href="https://github.com/looker/lens">Lens repository</Link>.</Text>
        </Box>
      </CardContent>
    </Card>
  </div>
</div>
```
