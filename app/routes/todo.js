import Ember from 'ember';

export default Ember.Route.extend({
        model: function (params) {
                this.store.find('todo', params.todo_id);
        },
       actions: {
               edit: function (todo) {
                       this.transitionTo('edit', todo);
               }
       }
});
