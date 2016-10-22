export default class BmCategoriesController {
  constructor(CategoryModel) {
    'ngInject';
    this.$ctrl = this;
    this.CategoryModel = CategoryModel;
    this.categories = [];
  }

  $onInit() {
    this.CategoryModel.getCategories()
      .then(ok => this.categories = ok);
  }
}
