import uiColors from './../../../utils/sass-to-js-custom/ui_colors'
import grayColors from './../../../utils/sass-to-js-custom/gray_colors'

class ColorsController {
  $postLink() {
    uiColors('uiColorData', '#uiColorData', '.guide-colors-ui')
    grayColors('grayColorData', '#grayColorData', '.guide-colors-gray')
  }
}

export { ColorsController as default }
