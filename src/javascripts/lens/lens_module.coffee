angular = require "angular"

require "angular-ui-router"
require "./atoms/atoms_module.coffee"
require "./getting_started.coffee"
require "./index.coffee"
require "./release_notes.coffee"
require "./lens_main.coffee"
require "./sass.coffee"

module.exports = m = angular.module "Lens", [
  "ui.router"
  "lens.atoms"
  "lens.getting_started"
  "lens.index"
  "lens.release_notes"
  "lens.lens_main"
  "lens.sass"
]

m.config ($stateProvider) ->
  indexState =
    name: 'index'
    url: '/'
    template: '<index></index>'
    title: 'Welcome to Lens'
  gettingStartedState =
    name: 'getting-started'
    url: '/getting-started'
    template: '<getting-started></getting-started>'
    title: 'Getting Started'
  blockGridState =
    name: 'block-grid'
    url: '/block-grid'
    template: '<block-grid></block-grid>'
    title: 'Block Grid'
  bordersState =
    name: 'borders'
    url: '/borders'
    template: '<borders></borders>'
    title: 'Borders'
  buttonsState =
    name: 'buttons'
    url: '/buttons'
    template: '<buttons></buttons>'
    title: 'Buttons'
  colorsState =
    name: 'colors'
    url: '/colors'
    template: '<colors></colors>'
    title: 'Colors'
  flexboxState =
    name: 'flexbox'
    url: '/flexbox'
    template: '<flexbox></flexbox>'
    title: 'Flexbox'
  formsState =
    name: 'forms'
    url: '/forms'
    template: '<forms></forms>'
    title: 'Forms'
  gridState =
    name: 'grid'
    url: '/grid'
    template: '<grid></grid>'
    title: 'Grid'
  iconsState =
    name: 'icons'
    url: '/icons'
    template: '<icons></icons>'
    title: 'Icons'
  layoutState =
    name: 'layout'
    url: '/layout'
    template: '<layout></layout>'
    title: 'Layout'
  responsiveState =
    name: 'responsive'
    url: '/responsive'
    template: '<responsive></responsive>'
    title: 'Responsive'
  tablesState =
    name: 'tables'
    url: '/tables'
    template: '<tables></tables>'
    title: 'Tables'
  typographyState =
    name: 'typography'
    url: '/typography'
    template: '<typography></typography>'
    title: 'Typography'
  sassState =
    name: 'sass'
    url: '/sass'
    template: '<sass></sass>'
    title: 'Sass'
  releaseNotesState =
    name: 'release-notes'
    url: '/release-notes'
    template: '<release-notes></release-notes>'
    title: 'Release Notes'

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
