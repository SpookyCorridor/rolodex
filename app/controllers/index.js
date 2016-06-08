import Ember from 'ember';

export default Ember.Controller.extend({
    
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/), 
    isDisabled: Ember.computed.not("isValid"), 
    
    emailAddress: '', 
    
    userName: '', 
    
    actions: {
        saveInvitation() {
            alert(`saving of the email ${this.get('emailAddress')} is in progress}`);
            this.set('responseMessage', `Thanks! We've got your email address saved:
                ${this.get('emailAddress')}`); 
            this.set('emailAddress', '');
		}
    },
});
