export default class CategoriesMockService {
  constructor($q) {
    'ngInject';
    this.$q = $q;
    this.categories = [
      {id: 1, name: 'development'},
      {id: 2, name: 'testing'},
      {id: 3, name: 'management'},
    ];
  }

  getCategories() {
    return this.$q.when(this.categories);
  }
}
