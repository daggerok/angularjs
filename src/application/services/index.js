import angular from 'angular';

import HateoasService from './hateoas';
import StorageService from './storage';

export default angular
  .module('app.services', [])
  .service('HateoasService', HateoasService)
  .service('StorageService', StorageService);
