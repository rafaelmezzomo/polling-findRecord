define('post-ember/adapters/post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({
    pathForType: function pathForType() {
      return '';
    },

    host: 'http://api.myjson.com/bins'
  });

});