import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '', 
    message: '', 
    
    validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/i),
    validMessage: Ember.computed.gte('message', 5), 
    validFields: Ember.computed.and('validEmail', 'validMessage'),
    isDisabled: Ember.computed.not('validFields'),  
    
    actions: {
        sendMessage() {
            this.set('responseMessage', `we've got your message, thanks!`); 
            this.setProperties({
                emailAddress: '',
                message: ''   
            }); 
        }, 
    }
});
