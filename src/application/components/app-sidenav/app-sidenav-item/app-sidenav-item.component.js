// import controller from './app-sidenav-item.component.controller';

export default {
  type: 'E',
  bindings: {
    title: '<',
  },
  // controller,
  template: `
    <md-button>
      <md-icon class="avatar" md-svg-src="./icons/businessman.svg"></md-icon>
      {{ $ctrl.title }}
    </md-button>
  `,
};
