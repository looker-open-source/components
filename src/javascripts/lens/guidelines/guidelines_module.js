import angular from 'angular'

import environmentPropertiesTemplate from './templates/environment_properties'
import markupTemplate from './templates/markup'
import responsiveTemplate from './templates/responsive'

const m = angular.module('lens.guidelines', [])

m.component('environmentProperties', { template: environmentPropertiesTemplate })
m.component('markup', { template: markupTemplate })
m.component('responsive', { template: responsiveTemplate })
