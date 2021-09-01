# Icons

Icons are defined in SVG format and are automatically built by a build script to ensure they remain consistent.

### Directories

- `svg`: All source SVG icon files are placed here. The build process uses the files in this directory to create components.
- `src/*`: Built artifacts are placed into this directory.

### Building Icons

All icons should be exported as SVG and placed in the `svg` directory. They do not need to be optimized beforehand, the build process will optimize them and convert them to components.

When adding new icons run the build script below to output the optimized React-component versions.

`yarn workspace @looker/icons build`

Adding new icons to `svg` and failing to re-run the command above will result in a lint failure.

### Naming Icons

When adding a new icon, the name given to the icon should aim to be a succinct and semantic representation of the icon's use, not its artwork. For example, `Warning` not `Triangle With Exclamation Point`. While this rule can be broken in some cases, it is the recommended way to name icons as well as something that will be reviewed when submitting new icons.
