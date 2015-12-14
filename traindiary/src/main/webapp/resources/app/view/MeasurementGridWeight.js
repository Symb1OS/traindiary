Ext.define('app.view.MeasurementGridWeight', {
    extend: 'app.view.MeasurementGrid',
    alias: 'widget.measurement-grid-weight',
    requires: [
   	 'app.store.MeasurementWeightStore'   
   	,'app.controller.MeasurementGridController'
    ],
    
    controller: 'measurement-grid',
    
    id: 'measurementWeightGrid',
    store: {
    	type: 'measurement-weight'
    }
})