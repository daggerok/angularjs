import angular from 'angular';
import CategoriesMockService from './categories.mock';
import CategoriesService from './categories';
import HateoasService from './hateoas';
import PostService from './posts';
import UserService from './users';

export default angular
  .module('app.services', [])
  .service('CategoriesService', CategoriesService)
  .service('CategoriesMockService', CategoriesMockService)
  .service('HateoasService', HateoasService)
  .service('UserService', UserService)
  .service('PostService', PostService);

