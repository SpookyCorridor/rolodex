import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('library');
    },
    
    actions: {
        saveLibrary(newLibrary) {
            newLibrary.save()
                .then(r => this.transitionTo('libraries'))
                .catch(e => console.log(e));
        },
        
        /**
         * built-in Ember.js action (event) called willTransition that is 
         * called when you leave a page (route)
         */
        
        willTransition() {
            
            /**
             * rollbackAttributes() removes the record from the store
             * if the model 'isNew' 
             */
            
            this.controller.get('model').rollbackAttributes(); 
        }
    }
}); 