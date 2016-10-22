export default class AppHomeController {
  constructor() {
    this.$ctrl = this;
  }

  $onInit() {
    this.greeting = this.first = 'hi';
    this.second = 'yay!';
  }

  toggleGreeting() {
    this.greeting = this.greeting === this.first ? this.second : this.first;
  }
}

/*

// factories / services declaration with ngInject from ng-annotate:
export default class AppService {
  constructor($q, $http) {
    'ngInject';
    this.$q = $q;
    this.$http = $http;
  }

  getSomeHttpCall() {
    return this.$http.get('/some/uri').then(
      ok => { console.info(ok); return ok.data; },
      err => console.error
    );
  }
}

// register service:
angular.module('application').service('AppService', AppService);

// factories / services declaration without ngInject:
export default class AppService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  getSomeHttpCall() {
    return this.$http.get('/some/uri').then(
      ok => { console.info(ok); return ok.data; },
      err => console.error
    );
  }

  static factory($q, $http) {
    return new AppService($q, $http);
  }
}

AppService.factory.$inject = ['$q'. '$http'];

// register service:
angular.module('application').service('AppService', AppService.factory);

*/
