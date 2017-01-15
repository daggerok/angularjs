export default class ToolbarController {
  constructor($state) {
    'ngInject';
    this.$ctrl = this;
    this.$state = $state;
  }

  goHome() {
    this.$state.transitionTo(
      'app.content',
      { id: '' },
      true
    );
  }
}
