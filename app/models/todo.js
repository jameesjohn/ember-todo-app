import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    desc: DS.attr('string'),
    started: DS.attr('boolean'),
    compl: DS.attr('boolean')
});
