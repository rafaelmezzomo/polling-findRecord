import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  pathForType: function() {
    return '';
  },

  host: 'http://api.myjson.com/bins'
});
