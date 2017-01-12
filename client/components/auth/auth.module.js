'use strict';

angular.module('movieworldbyrobinsonsApp.auth', ['movieworldbyrobinsonsApp.constants',
    'movieworldbyrobinsonsApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
