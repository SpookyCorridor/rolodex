import Ember from 'ember';

export default Ember.Controller.extend({
    
	headerMessage: 'Coming Soon',
	responseMessage: '', 
	emailAddress: '', 
    userName: '',
	
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/), 
    isDisabled: Ember.computed.not("isValid"),  
    
    actions: {
        saveInvitation() {
            const email = this.get('emailAddress');
			
			const newInvitation = this.store.createRecord('invitation', {
				email: email 
			});
			
			newInvitation.save()
				.then(response => {
					this.set('responseMessage', `Thanks! We saved your email with the following id: 
						${response.get('id')}`); 
				})
				.catch(e => {
					console.log(`error: ${e.errrs}`); 
				}) 
											 
			this.set('emailAddress', ''); 
		}
    },
});
