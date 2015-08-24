import Ember from 'ember';

export default Ember.Route.extend({
  model: function model() {
    return { post: this.store.findRecord('post', 'vv66') };
  }
});