import angular from 'angular';
import BmHeaderComponent from './component';
import BmBrandComponent from './bm.brand/component';
import BmNavComponent from './bm.nav/component';

export default angular
  .module('bm.header.component', [])
  .component('bm.header', BmHeaderComponent)
  .component('bm.brand', BmBrandComponent)
  .component('bm.nav', BmNavComponent);

