/**
 * Created by mak on 9/4/16.
 */
(function() {

  'use strict';

  var app = angular.module('jwt', [], [

    '$httpProvider',
    function config($httpProvider) {

      $httpProvider.interceptors.push('AuthInterceptor');
  }]);

  app.constant('API_URL', 'http://localhost:3000/api');
  app.constant('TOKEN_KEY', 'jwt');

  app.controller('MainCtrl', [

    'RandomUserFactory', 'AuthFactory', 'TokenFactory',
    function MainCtrl(RandomUserFactory, AuthFactory, TokenFactory) {

      var vm = this;

      function handleError(xhr) {
        console.log(xhr.data);
      }

      function getUser() {
        RandomUserFactory.user().then(function ok(res) {
          vm.user = res.data;
        }, handleError);
      }

      function login(username, password) {
        AuthFactory.login(username, password).then(function success(res) {
          vm.user = res.data.user;
        }, handleError);
      }

      function token() {
        return TokenFactory.getToken();
      }

      function logout() {
        return AuthFactory.logout();
        vm.user = null;
      }

      vm.getUser = getUser;
      vm.token = token;
      vm.logout = logout;
      vm.login = login;
    }]);

  app.factory('RandomUserFactory', [

    '$http', 'API_URL',
    function RandomUserFactory($http, API_URL) {

      function getUser() {
        return $http.get(API_URL + '/user');
      }

      return { user: getUser };
  }]);

  app.factory('AuthFactory', [

    '$http', 'API_URL', 'TokenFactory',
    function AuthFactory($http, API_URL, TokenFactory) {

      function login(username, password) {
        return $http.post(API_URL + '/login', {
          username: username,
          password: password
        }).then(function ok(res) {
          console.log(JSON.stringify(res.data));
          TokenFactory.setToken(res.data.token);
          return res;
        });
      }

      function logout() {
        // return TokenFactory.setToken(null);
        return TokenFactory.setToken();
      }

      return {
        login: login,
        logout: logout,
      };
  }]);

  app.factory('TokenFactory', [

    '$window', 'TOKEN_KEY',
    function TokenFactory($window, TOKEN_KEY) {

      var storage = $window.localStorage;

      function setToken(token) {
        if (token) {
          storage.setItem(TOKEN_KEY, token);
        } else {
          storage.removeItem(TOKEN_KEY);
        }
      }

      function getToken() {
        return storage.getItem(TOKEN_KEY);
      }

      return {
        setToken: setToken,
        getToken: getToken,
      };
  }]);

  app.factory('AuthInterceptor', ['TokenFactory', function AuthInterceptor(TokenFactory) {

    function request(config) {

      var token = TokenFactory.getToken();

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token; // JWT spec:
      }

      return config;
    }

    return {
      request: request
    };
  }]);
})();
