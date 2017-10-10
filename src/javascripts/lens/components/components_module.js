import angular from 'angular'

import bodyCopyTemplate from './templates/body_copy.html'
import buttonsTemplate from './templates/buttons.html'
import formsTemplate from './templates/forms.html'
import headingsTemplate from './templates/headings.html'
import modalsTemplate from './templates/modals.html'
import tablesTemplate from './templates/tables.html'

const m = angular.module('lens.components', [])

m.component('bodyCopy', { template: bodyCopyTemplate })
m.component('buttons', { template: buttonsTemplate })
m.component('forms', { template: formsTemplate })
m.component('headings', { template: headingsTemplate })
m.component('modals', { template: modalsTemplate })
m.component('tables', { template: tablesTemplate })
