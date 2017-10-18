import angular from 'angular'

import bodyCopyTemplate from './templates/body_copy'
import buttonsTemplate from './templates/buttons'
import formsTemplate from './templates/forms'
import headingsTemplate from './templates/headings'
import modalsTemplate from './templates/modals'
import tablesTemplate from './templates/tables'

const m = angular.module('lens.components', [])

m.component('bodyCopy', { template: bodyCopyTemplate })
m.component('buttons', { template: buttonsTemplate })
m.component('forms', { template: formsTemplate })
m.component('headings', { template: headingsTemplate })
m.component('modals', { template: modalsTemplate })
m.component('tables', { template: tablesTemplate })
