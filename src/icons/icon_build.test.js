const checksum = require('./icon_checksum.json')
const iconFileHelpers = require('../../bin/icons/icon_file_helpers')

test('icon SVG directory checksum should match the icon checksum from the icon build process', async () => {
  const iconChecksum = await iconFileHelpers.getFilesChecksum(
    iconFileHelpers.ICON_SVG_PATH,
    'svg'
  )
  if (iconChecksum !== checksum.iconChecksum) {
    console.error(
      `The icon SVG checksum doesn't match the current directory. This probably means an icon was added, edited, or removed. To fix this error run \`yarn build-icons\` which will build the icon SVG files into proper icon components. Once the build process is finished, rerun the tests via \`yarn test\` to ensure everything passes`
    )
  }
  expect(iconChecksum).toEqual(checksum.iconChecksum)
})
