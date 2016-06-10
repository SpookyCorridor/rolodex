import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('library');
    },
    
    setupController(controller, model) {
        this._super(controller, model); 
        
        controller.set('title', 'Create new library');
        controller.set('buttonLabel', 'Create'); 
    },
    
    renderTemplate() {
        this.render('libraries/form'); 
    },
    
    actions: {
        saveLibrary(newLibrary) {
            newLibrary.save()
                .then(() => {
                    this.transitionTo('libraries')
                })
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
            
            let model = this.controller.get('model');
            
            if (model.get('isNew')) {
                model.destroyRecord(); 
            } 
        }
    }
}); 