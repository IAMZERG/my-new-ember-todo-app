import Ember from 'ember';

export default Ember.Route.extend({
        renderTemplate: function () {
                this.render('new');
        },
        actions: {

                save: function (todo) {
                       var name = $('input').val();
                       var details = $('textarea').val();
                       var model = this.get('model');
                       todo.set('name', name);
                       todo.set('details', details);
                       todo.save();
                       this.transitionTo('todo', todo);
                }
        }
});
