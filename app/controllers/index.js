import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        deleteTodo(todo){
            let conf = confirm('You are attempting to delete this todo?');

            if (conf) {
                todo.destroyRecord();
            }
        }
    }
});
