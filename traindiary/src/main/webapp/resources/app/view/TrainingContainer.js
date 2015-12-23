Ext.define('app.view.TrainingContainer', {
    extend: 'Ext.form.Panel',
    alias: 'widget.training',
    requires:[
    	'app.view.TrainingGrid',
    	'app.view.TrainExerciseContainer'
    ],
    
    title: 'Журнал тренировок',
    scrollable: true,
    layout: 'border',
    bodyPadding: 0,
    items:[
		{xtype: 'training-grid'},
		{xtype: 'training-exercise-container'}

	
	]	
})