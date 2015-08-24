define('post-ember/router', ['exports', 'ember', 'post-ember/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('post', { path: '/' });
  });

  exports['default'] = Router;

});