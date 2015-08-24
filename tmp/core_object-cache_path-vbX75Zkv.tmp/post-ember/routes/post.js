define('post-ember/routes/post', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return { post: this.store.findRecord('post', 'vv66') };
    }
  });

});