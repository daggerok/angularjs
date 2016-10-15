export default ($stateProvider) => {
  $stateProvider.state({
    url: '/login',
    name: 'app.login',
    template: '<app-login></app-login>',
  });
};
