import DS from 'ember-data';

export default DS.Model.extend({
       name: DS.attr('string'),
       details: DS.attr('string'),
       checked: DS.attr('boolean'),
       isEditing: DS.attr('boolean')
  
});
