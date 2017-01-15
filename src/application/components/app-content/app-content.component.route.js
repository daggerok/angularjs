export default ($stateProvider) => $stateProvider.state({
  url: '/:id',
  name: 'app.content',
  template: '<app-content></app-content>',
});
