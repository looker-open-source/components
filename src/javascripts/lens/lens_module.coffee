angular = require "angular"

require "angular-ui-router"
require "./atoms/atoms_module.coffee"
require "./getting_started.coffee"
require "./index.coffee"
require "./release_notes.coffee"
require "./sass.coffee"

module.exports = m = angular.module "Lens", [
  "ui.router"
  "lens.atoms"
  "lens.getting_started"
  "lens.index"
  "lens.release_notes"
  "lens.sass"
]

m.config ($stateProvider) ->
  indexState =
    name: 'index'
    url: '/'
    template: '<index></index>'
  gettingStartedState =
    name: 'getting-started'
    url: '/getting-started'
    template: '<getting-started></getting-started>'
  blockGridState =
    name: 'block-grid'
    url: '/block-grid'
    template: '<block-grid></block-grid>'
  bordersState =
    name: 'borders'
    url: '/borders`'
    template: '<borders></borders>'
  buttonsState =
    name: 'buttons'
    url: '/buttons`'
    template: '<buttons></buttons>'
  colorsState =
    name: 'colors'
    url: '/colors'
    template: '<colors></colors>'
  flexboxState =
    name: 'flexbox'
    url: '/flexbox'
    template: '<flexbox></flexbox>'
  formsState =
    name: 'forms'
    url: '/forms'
    template: '<forms></forms>'
  gridState =
    name: 'grid'
    url: '/grid'
    template: '<grid></grid>'
  iconsState =
    name: 'icons'
    url: '/icons'
    template: '<icons></icons>'
  layoutState =
    name: 'layout'
    url: '/layout'
    template: '<layout></layout>'
  responsiveState =
    name: 'responsive'
    url: '/responsive'
    template: '<responsive></responsive>'
  tablesState =
    name: 'tables'
    url: '/tables'
    template: '<tables></tables>'
  typographyState =
    name: 'typography'
    url: '/typography'
    template: '<typography></typography>'
  sassState =
    name: 'sass'
    url: '/sass'
    template: '<sass></sass>'
  releaseNotesState =
    name: 'release-notes'
    url: '/release-notes'
    template: '<release-notes></release-notes>'

  $stateProvider.state indexState
  $stateProvider.state gettingStartedState
  $stateProvider.state blockGridState
  $stateProvider.state bordersState
  $stateProvider.state buttonsState
  $stateProvider.state colorsState
  $stateProvider.state flexboxState
  $stateProvider.state formsState
  $stateProvider.state gridState
  $stateProvider.state iconsState
  $stateProvider.state layoutState
  $stateProvider.state responsiveState
  $stateProvider.state tablesState
  $stateProvider.state typographyState
  $stateProvider.state sassState
  $stateProvider.state releaseNotesState
  return

m.run ->
