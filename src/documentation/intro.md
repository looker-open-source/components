
```jsx noeditor
const semanticColors = require('../style').theme.semanticColors;

<div>

<Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

  <Box my="large">
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="35.4822" cy="13.5172" rx="13.5178" ry="13.5172" fill="#4C33AA"/>
    <ellipse cx="21.9662" cy="27.0345" rx="21.9664" ry="21.9654" fill="#7E64E0" fillOpacity="0.8"/>
    </svg>
  </Box>

  <Heading size="d1">LENS</Heading>
  <Box my="large" style={{maxWidth: '600px'}}>
    <Text size="two">A collections of assets for anyone making Looker software, providing Looker services, or telling Looker stories.</Text>
  </Box>
</Box>

<Box my="xlarge">
  <div style={{height: '8px', background: '#F4F6F7'}}></div>
</Box>

<Box>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <div style={{maxWidth: '215px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box mb="large">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '44px', height: '44px', background: 'rgba(152, 131, 230, 0.2)'}}>
        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.79199 15.6797L6.79199 0.166748L4.20866 0.166748L4.20866 15.6797L0.333658 15.6797L5.50032 20.8334L10.667 15.6797L6.79199 15.6797Z" fill="#6C43E0"/>
</svg>
      </div>
      </Box>
      <Heading level="4" size="three" weight="semi-bold">Install</Heading>
      <Box mt="small">
        <Text size="five">Lens packages are served by Looker's private package server, Nexus, and can be installed through npm or yarn.</Text>
        <Code size="five">
            yarn add looker-lens
        </Code>
      </Box>
    </div>

     <div style={{maxWidth: '215px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box mb="large">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '44px', height: '44px', background: 'rgba(0, 135, 225, 0.1)'}}>
        <IconExploreCircle width="24" height="24" fill="#0087E1" />
      </div>
      </Box>
      <Heading level="4" size="three" weight="semi-bold">Explore</Heading>
      <Box mt="small">
        <Text size="five">Search or browse through the component listing on this site. You can use the interactive prompts to compose whole components right in Lens.
        </Text>
      </Box>
    </div>

     <div style={{maxWidth: '215px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box mb="large">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '44px', height: '44px', background: 'rgba(255, 202, 98, 0.2)'}}>
        <IconUndo width="24" height="24" fill="#FFA800"  />
      </div>
      </Box>
      <Heading level="4" size="three" weight="semi-bold">Contribute</Heading>
        <Box mt="small">
        <Text size="five">Want something in Lens you don't see here? Follow the contribution guidelines and best practices, then open a Pull Request on the Lens repository.
        </Text>
      </Box>
    </div>
  </div>
</Box>
</div>
```
