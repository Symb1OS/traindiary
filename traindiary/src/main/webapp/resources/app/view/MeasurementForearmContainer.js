Ext.define('app.view.MeasurementForearmContainer', {
    extend: 'Ext.form.Panel',
    alias: 'widget.measurement-forearm',
    requires: [
    	  	 'app.view.MeasurementForearmGrid',
    	  	 'app.view.MeasurementData',
    	  	 'app.controller.MeasurementDataForearmController'
    ],
    controller: 'measurement-forearm',
    
    title: 'Предплечье',
    layout: 'border',
	scrollable:true,
	bodyPadding: 10,
    defaults: {
    	labelWidth: 100
    },
    items:[
    	{xtype : 'measurement-grid-forearm'},
    	{xtype : 'measurement-detail'}
    ]

})