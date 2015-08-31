import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //The only lines we change are the two below
  this.route('todo', {path: 'todo/:todo_id'});
  this.route('todos', {path: '/'});
  this.route('new');
  this.route('edit', {path: 'edit/:todo_id'});
});

export default Router;
