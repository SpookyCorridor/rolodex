import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('contact');
    },
    
    actions: {
        sendMessage(newMessage) {
            newMessage.save()
                .then(r => console.log(r))
                .catch(e => console.log(e));
        },
        
        willTransition() {
            this.controller.get('model').rollbackAttributes(); 
        }
    }
    
    /*
      
    
    actions: {
        sendMessage() {
            this.set('responseMessage', `we've got your message, thanks!`); 
            this.setProperties({
                emailAddress: '',
                message: ''   
            }); 
        }, 
    } */ 
});
