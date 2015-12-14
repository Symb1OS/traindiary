Ext.define('app.view.MeasurementHipContainer', {
    extend: 'Ext.form.Panel',
    alias: 'widget.measurement-hip',
    requires: [
    	  	 'app.view.MeasurementHipGrid',
    	  	 'app.view.MeasurementData',
    	  	 'app.controller.MeasurementDataHipController'
    ],
    controller: 'measurement-hip',
    
    title: 'Бедро',
    layout: 'border',
	scrollable:true,
	bodyPadding: 10,
    defaults: {
    	labelWidth: 100
    },
    items:[
    	{xtype : 'measurement-grid-hip'},
    	{xtype : 'measurement-detail'}
    ]

})