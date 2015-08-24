import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse: function(store, primaryModelClass, payload) {
    console.log('enter serializer');
    var post = {
      type: 'post',
      id: 'vv66',
      attributes: {
        title: Math.random(),
        author: Math.random(),
        content: Math.random()
      }
    };

    return {
      data: post
    };
  },
});
