import angular from 'angular';
import HateoasService from './hateoas';

export default angular
  .module('app.services', [])
  .service('HateoasService', HateoasService);
