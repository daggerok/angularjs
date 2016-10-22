(() => {

  class AppCtrl {
    constructor() {
      this.message = this.message1 = 'holla!';
      this.message2 = 'holala!';
    }

    toggleMessage() {
      this.message = this.message === this.message1
        ? this.message2
        : this.message1;
    }

    static createInstance() {
      return new AppCtrl();
    }
  }

  angular.module(APP_NAME).component('app', {
    restrict: 'E',
    templateUrl: 'app/template.html',
    controller: AppCtrl.createInstance,
    controllerAs: 'ctrl',
  });

})();
