'use strict';

angular.module('movieworldbyrobinsonsApp', ['movieworldbyrobinsonsApp.auth',
    'movieworldbyrobinsonsApp.admin', 'movieworldbyrobinsonsApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
