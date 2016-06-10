import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('contact');
    },
    
    actions: {
        sendMessage(newMessage) {
            newMessage.save()
                .then(()=>{
                    this.controller.set('responseMessage', "we've got your message, thanks!"); 
                    this.controller.get('model').rollbackAttributes(); 
                })
                .catch(e => console.log(e));
        },
    }     
});
