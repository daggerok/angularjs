export default class SidenavController {
  constructor($state) {
    'ngInject';
    this.$ctrl = this;
    this.$state = $state;
  }

  onClick(id) {
    this.$state.transitionTo(
      'app.content',
      { id },
      { location: true }
    );
  }
}
