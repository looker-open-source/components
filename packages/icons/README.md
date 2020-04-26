# Icons

Icons are defined in SVG format and are automatically built by a build script to ensure they remain consistent.

### Directories

- `src/svg`: All source SVG icon files are placed here. The build process uses the files in this directory to create components.
- `src/generated`: Built artifacts are placed into this directory, including a
  set of SVGs converted to React components in icons/lib/glyphs.

### Building Icons

All icons should be exported as SVG and placed in the `icons/src/svg` directory. They do not need to be optimized beforehand, a build process will optimize them and convert them to components.

Icons are automatically built when starting or publishing the style guide, running the tests, building the components or publishing the component package. The icons can be manually built using the command:

`yarn workspace @looker/icons build:icons`

### Naming Icons

When adding a new icon, the name given to the icon should aim to be a succinct and semantic representation of the icon's use, not its artwork. For example, `Warning` not `Triangle With Exclamation Point`. While this rule can be broken in some cases, it is the recommended way to name icons as well as something that will be reviewed when submitting new icons.
