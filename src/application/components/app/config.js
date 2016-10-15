export default ($urlRouterProvider, $locationProvider, $stateProvider) => {

  $urlRouterProvider.otherwise('/');
  $locationProvider.hashPrefix('!');

  [
    {
      // url: '',
      name: 'app',
      abstract: true,
      template: '<app></app>',
    }
  ].forEach($stateProvider.state);
}
