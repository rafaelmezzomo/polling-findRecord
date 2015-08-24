import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  pathForType: function() {
    return '';
  },
  host: 'http://api.myjson.com/bins',
  // In ember 2.0 shouldBackgroundReloadRecord will return true automatically.
  shouldBackgroundReloadRecord: function () {return true;}
});
