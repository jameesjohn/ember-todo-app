import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        deleteTodo(todo){
            let conf = confirm('You are attempting to delete this todo?');

            if (conf) {
                todo.destroyRecord();
            }
        },
        startTodo(task){
            let id = task.get('id')
            this.get('store').findRecord('todo', id).then(function(e){
                e.set('started', true);
                e.save();
            })
        }
    }
});
