import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('contact');
	},
	
	actions: {
		deleteContact(contact) {
			let confirmation = confirm('Delete this contact?');
			
			if (confirmation) {
				contact.destroyRecord()
					.then((r)=>{
						this.controller.set('responseMessage', `The contact ${r.email} has been deleted`);   
					})
					.catch((e)=>{
						this.controller.set('responseMessage', 'there was an error saving :(');
					}); 
			}
		}
	}
});
