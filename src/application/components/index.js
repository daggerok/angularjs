import angular from 'angular';

import CommonModule from './common';
import HomeModule from './app-home';

import AppComponent from './app/component';
import ContactUsComponent from './app-contact-us/component';
import SiteMapComponent from './app-site-map/component';
import LoginComponent from './app-login/component';
import SignupComponent from './app-signup/component';

const AppModule = angular.module('app.components', [
  CommonModule.name,
  HomeModule.name
]);

AppModule.component('app', AppComponent);
AppModule.component('appContactUs', ContactUsComponent);
AppModule.component('appSiteMap', SiteMapComponent);
AppModule.component('appLogin', LoginComponent);
AppModule.component('appSignup', SignupComponent);

export default AppModule;
