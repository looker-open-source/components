import angular from 'angular'

import blockGridTemplate from './templates/block_grid'
import bordersTemplate from './templates/borders'
import colorsTemplate from './templates/colors'
import effectsTemplate from './templates/effects'
import flexboxTemplate from './templates/flexbox'
import gridTemplate from './templates/grid'
import iconsTemplate from './templates/icons'
import layoutTemplate from './templates/layout'
import spacingSizingTemplate from './templates/spacing_sizing'
import typographyTemplate from './templates/typography'

import ColorsController from './controllers/colors'

const m = angular.module('lens.atoms', [])

m.component('blockGrid', { template: blockGridTemplate })
m.component('borders', { template: bordersTemplate })
m.component('colors', { controller: ColorsController, template: colorsTemplate })
m.component('effects', { template: effectsTemplate })
m.component('flexbox', { template: flexboxTemplate })
m.component('grid', { template: gridTemplate })
m.component('icons', { template: iconsTemplate })
m.component('layout', { template: layoutTemplate })
m.component('spacingSizing', { template: spacingSizingTemplate })
m.component('typography', { template: typographyTemplate })
