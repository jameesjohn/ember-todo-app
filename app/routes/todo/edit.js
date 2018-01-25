import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.get('store').findRecord('todo', params.todo_id)
    }, 
    
    actions: {
        saveChanges(task){
            let that= this;
            task.save().then(function () {
                
                that.transitionTo('index');
            });
        }
    }
});
