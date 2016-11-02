import angular from 'angular';
import HateoasService from './hateoas';

export default angular
  .module('angularjs-redux.services', [])
  .service('HateoasService', HateoasService);
