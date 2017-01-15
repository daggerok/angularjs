export default class SidenavController {
  constructor($state, $log) {
    'ngInject';
    this.$ctrl = this;
    this.$log = $log;
    this.$state = $state;
  }

  onSelect($event) {
    this.$state.transitionTo(
      'app.content',
      { id: $event.name || '' },
      { location: true }
    );
  }
}
