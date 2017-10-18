import ace from 'brace'
require('brace/mode/html')

class PlaygroundController {
  constructor($element, $timeout, $sce) { 'ngInject';
    this.$el = $element
    this.$timeout = $timeout
    this.$sce = $sce

    this.defaultAceValue = '<!-- test out some Lens styles here! -->\n\n' +
      '<div class="button">Normal</div>\n' +
      '<div class="button button--primary">Primary</div>\n' +
      '<div class="button button--alert">Alert</div>'
  }

  renderHtml(editor) {
    this.$timeout(() => {
      this.html = this.$sce.trustAsHtml(editor.getValue())
    })
  }

  $postLink() {
    let editor = ace.edit('html-editor')
    editor.getSession().setMode('ace/mode/html')
    editor.getSession().setUseWorker(false)
    editor.setShowPrintMargin(false)

    editor.setValue(this.defaultAceValue)
    this.renderHtml(editor)

    editor.on('change', (e) => {
      this.renderHtml(editor)
    })
  }
}

export { PlaygroundController as default }
