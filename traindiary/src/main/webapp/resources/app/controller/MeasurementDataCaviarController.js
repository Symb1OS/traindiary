Ext.define('app.controller.MeasurementDataCaviarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.measurement-caviar',
    
    onSave : function(){
	  	 var form = this.getView().getForm()
		 var rec = form.getRecord()
		 var newValues = form.getValues()	
		 
		 var keys = [];
		 for (var key in newValues) {
		     if (newValues.hasOwnProperty(key)) {
		         keys.push(key);
		     }
		 }
		
		 for (var i = 0; i < keys.length; i++) {
		     rec.set(keys[i], newValues[keys[i]]);
		 }
		  
		 var grid = Ext.getCmp('measurementCaviarGrid');
		 var store = grid.getStore()

		 store.sync({
			success: function(){
				 store.load()
			}		 	
		 })
		 	
    },
    
    onSelectToForm : function(combo, rec, idx){
    	var form = this.getView().getForm()
		form.loadRecord(rec)
    }

})