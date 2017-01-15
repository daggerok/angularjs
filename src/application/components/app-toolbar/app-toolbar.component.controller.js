export default class ToolbarController {
  constructor() {
    'ngInject';
    this.$ctrl = this;
  }

  $onInit() {
    this.content = 'app toolbar';
  }
}
