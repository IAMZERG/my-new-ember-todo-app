import Ember from 'ember';

export default Ember.Route.extend({
       actions: {
               save: function () {
                       var newtodo = this.store.createRecord('todo', 
                               {
                                       name: $("input").val(),
                                       details: $("textarea").val()
                               });
                       newtodo.save();
                       $("textarea").val("");
                       $("input").val("").focus();

               }
       }
});
