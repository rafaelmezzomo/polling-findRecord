import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      post: this.store.findRecord('post', 'vv66')
    }
  },
  setupController: function(controller, model){
    this._super(controller, model);
    this.setupLongPolling();
  },
  setupLongPolling: function(){
    this.set('iceBlockMetricTimer', Em.run.later(this, this.refreshPostData, 1000));
  },
  refreshPostData: function(){
    console.log('enter refreshPostData');
    this.store.findRecord('post', 'vv66');
    this.setupLongPolling();
  }
});
