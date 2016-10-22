export default ($urlRouterProvider, $locationProvider, $stateProvider) => {

  $urlRouterProvider.otherwise('/');

  $locationProvider.hashPrefix('!');

  [
    {
      // url: '',
      name: 'app',
      abstract: true,
      template: '<app></app>',
    },

    {
      url: '/',
      name: 'app.home',
      template: '<app.home></app.home>',
    },

    {
      url: '/users',
      name: 'app.users',
      template: '<app.users></app.users>',
    },

    {
      url: '/categories',
      name: 'app.categories',
      template: '<app.categories></app.categories>',
    },

    {
      url: '/lifecycle',
      name: 'app.lifecycle',
      template: '<app.lifecycle></app.lifecycle>',
    }

  ].forEach($stateProvider.state);
}
