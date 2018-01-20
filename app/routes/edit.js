import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        this.get('store').findRecord(params.todo_id)
    },
    actions: {
        
    }
});
