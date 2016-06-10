import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('invitation'); 
    },
    
    actions: {
        deleteInvitation(invitation) {
            let confirmation = confirm('delete invitation?'); 
            
            if (confirmation) {
                invitation.destroyRecord()
                    .then((r)=>{
                        this.controller.set('responseMessage', 'deleted'); 
                    })
                    .catch((e)=>{
                        this.controller.set('responseMessage', 'error'); 
                    })
            }
        }
    }
});
