import Controller from '@ember/controller';

export default Controller.extend({
    response: false,
    actions: {
        saveTodo(){
            let title = this.get('title');
            let desc = this.get('desc');
            this.set('response', true);

            const newTodo = this.store.createRecord('todo', {title: title, desc:desc});
            newTodo.save();
        }
    }
});
