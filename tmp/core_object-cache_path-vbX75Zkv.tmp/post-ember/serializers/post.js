define('post-ember/serializers/post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].JSONAPISerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload) {
      console.log('Payload: ' + payload);
      var post = {
        type: 'post',
        id: 'vv66',
        attributes: {
          title: payload.title,
          author: payload.author,
          content: payload.content
        }
      };
      console.log('retorno', post);
      return {
        data: post
      };
    }
  });

});