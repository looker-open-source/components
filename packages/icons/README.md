# Lens Icons

Lens icons are defined in SVG format and are automatically built by a build script to ensure they match Lens conventions.

# Lens Icon Directories

- `src/svg`: All source SVG icon files are placed here. The build process uses the files in this directory to create Lens components.
- `src/generated`: Built artifacts are placed into this directory, including a
  set of SVGs converted to React components in icons/dist/glyphs.

# Building Icons

All Lens icons should be exported as SVG and placed in the `icons/src/svg` directory. They do not need to be optimized beforehand, a build process will optimize them and convert them to Lens components.

Icons are automatically built when starting or publishing the Lens style guide,
running the tests, building the Lens components or publishing the Lens component
module. The icons can be manually built using the command:

`lerna run build:icons --scope looker-icons`
