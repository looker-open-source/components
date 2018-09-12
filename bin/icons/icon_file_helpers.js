const crypto = require('crypto')
const path = require('path')
const util = require('util')
const glob = util.promisify(require('glob'))
const readFile = util.promisify(require('fs').readFile)

const ICON_SRC_PATH = path.join(__dirname, '..', '..', 'src', 'icons')
const ICON_SVG_PATH = path.join(ICON_SRC_PATH, 'svg')
const ICON_SVG_CHECKSUM_FILE_PATH = path.join(
  ICON_SRC_PATH,
  'icon_checksum.json'
)

// `glyphs` are just the auto-generated jsx files extracted from the svgr tool
const ICON_GLYPH_EXTENSION = 'jsx'
const ICON_GLYPH_PATH = path.join(ICON_SRC_PATH, 'glyphs')

// These are the actual components that Lens exports.
const ICON_COMPONENTS_PATH = path.join(ICON_SRC_PATH, 'components')

async function getFilesChecksum(dir, ext) {
  const filenames = await glob(path.join(dir, `*.${ext}`))
  filenames.sort()
  const filesHash = crypto.createHash('sha1')
  for (const fname of filenames) {
    const fileContents = await readFile(fname)
    filesHash.update(fileContents)
  }
  return filesHash.digest('hex')
}

module.exports = {
  ICON_COMPONENTS_PATH,
  ICON_GLYPH_EXTENSION,
  ICON_GLYPH_PATH,
  ICON_SRC_PATH,
  ICON_SVG_CHECKSUM_FILE_PATH,
  ICON_SVG_PATH,
  getFilesChecksum,
}
