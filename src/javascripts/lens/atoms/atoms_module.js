import angular from 'angular'

import blockGridTemplate from './templates/block_grid.html'
import bordersTemplate from './templates/borders.html'
import colorsTemplate from './templates/colors.html'
import effectsTemplate from './templates/effects.html'
import flexboxTemplate from './templates/flexbox.html'
import gridTemplate from './templates/grid.html'
import iconsTemplate from './templates/icons.html'
import layoutTemplate from './templates/layout.html'
import spacingSizingTemplate from './templates/spacing_sizing.html'
import typographyTemplate from './templates/typography.html'

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
