import angular from 'angular';
import BmHeaderComponent from './component';
import BmBrandComponent from './bm.brand/component';
import BmNavComponent from './bm.nav/component';

export default angular
  .module('bmHeader.component', [])
  .component('bmHeader', BmHeaderComponent)
  .component('bmBrand', BmBrandComponent)
  .component('bmNav', BmNavComponent);

