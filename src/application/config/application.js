export default ($urlRouterProvider, $locationProvider) => {
  //$locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
