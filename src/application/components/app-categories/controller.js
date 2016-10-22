export default class AppCategoriesController {
  constructor($log, CategoriesService, PostService) {
    'ngInject';

    this.$ctrl = this;
    this.$log = $log;
    this.CategoriesService = CategoriesService;
    this.PostService = PostService;
    this.categories = [];
    this.posts = [];
  }

  $onInit() {
    this.getCategories();
  }

  getCategories() {
    this.CategoriesService.getCategories().then(
      ok => this.categories = ok,
      err => this.$log.error
    );
  }

  onCategoryClicked(payload) {
    this.PostService.getPosts().then(
      posts => this.posts = posts
        .filter(post => post.category == payload.name),
      err => this.$log.error
    );
  }
}
