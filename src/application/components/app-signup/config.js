export default ($stateProvider) => {
  $stateProvider.state({
    url: '/signup',
    name: 'app.signup',
    template: '<app-signup></app-signup>',
  });
};
