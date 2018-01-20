import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.get('store').findRecord('todo', params.todo_id)
    }, 
    actions: {
        saveChanges(task){
            task.save().then(function () {
                alert('Saved changes');
            });
        }
    }
});
