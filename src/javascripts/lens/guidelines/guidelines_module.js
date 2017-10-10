import angular from 'angular'

import environmentPropertiesTemplate from './templates/environment_properties.html'
import markupTemplate from './templates/markup.html'
import responsiveTemplate from './templates/responsive.html'

const m = angular.module('lens.guidelines', [])

m.component('environmentProperties', { template: environmentPropertiesTemplate })
m.component('markup', { template: markupTemplate })
m.component('responsive', { template: responsiveTemplate })
