import Ember from 'ember';

export default Ember.Route.extend({
        model: function () {
                return this.store.findAll('todo');
        },
       actions: {
               checkOff: function (todo) {
                       todo.toggleProperty('checked');
                       todo.save();
               },
       deleteTodos: function () {
               this.store.find('todo').then(function (items) {
                       console.log(items);
                       items.forEach(function (item) {
                               if(item.get('checked')) {
                                       item.deleteRecord();
                                       item.save();
                               }
                       });
               });
       }
       }
});
