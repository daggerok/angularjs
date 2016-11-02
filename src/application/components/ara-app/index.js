import angular from 'angular';
import Config from './config';

import AraHomeModule from './ara-home';
import Component from './component';

// root ara-app component:

const AraAppModule = angular.module('angularjs-redux.component', [AraHomeModule.name]);

AraAppModule.component('araApp', Component);
AraAppModule.config(['$stateProvider', Config]);

export default AraAppModule;
