export default ($urlRouterProvider, $locationProvider, $stateProvider) => {

  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('!');

  [
    {
      // url: '',
      name: 'bm',
      abstract: true,
      template: '<bm.app></bm.app>',
    },

    {
      url: '/',
      name: 'bm.home',
      template: '<bm.home></bm.home>',
    },

  ].forEach($stateProvider.state);
}
