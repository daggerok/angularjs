import angular from 'angular';

const heads = document.getElementsByTagName('head');
const base = document.createElement('base');

base.setAttribute('href', '/');
angular.element(heads).append(base);
