Ext.define('app.view.TrainingGrid', {
    extend: 'Ext.grid.Panel',
  
    alias: 'widget.training-grid',
    requires:[
    	'app.model.TrainingModel'
    ],

    title: 'Тренировки',
    id: 'test',
    frame: true,
    region:'west',
    width: 450,
    height: 400,
    store:{
    	model:'app.model.TrainingModel',
    	data:[
    [1,  'dxeqtr@gmail.com', '2015-12-01', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [2,  'dxeqtr@gmail.com', '2015-09-02', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [3,  'dxeqtr@gmail.com', '2015-09-03', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [4,  'dxeqtr@gmail.com', '2015-09-04', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [5,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [6,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [7,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [8,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [9,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x124 0x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [10,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [11,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [12,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [13,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [14,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [15,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [16,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [17,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [18,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [19,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [20,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [21,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [22,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [23,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [24,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [25,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [26,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [27,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [28,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [29,  'dxeqtr@gmail.com', '2015-09-05', '<P><b> Приседания: </b> 40x12 40x12 40x12 40x12 40x12 <P> <B>Жим ногами</B> 40x12 40x12 40x12 40x12 40x12' , 'Присед',  15, 120, 'Хорошо пошло'],
    [30,  'dxeqtr@gmail.com', '2015-09-05', '', 'Присед',  15, 120, '']
        ],
    listeners: [{
    	load: function(){
    		
			var grid =	Ext.getCmp('test')
    		var expander = grid.getPlugin('expander')
    
    	 	for (i = 0; i < grid.getStore().getCount(); i++) {
         	    expander.toggleRow(i, grid.getStore().getAt(i));
        	 }
         
    	}
    
    }]
    },

    
    columns: [{
        text: 'trainingId',
        dataIndex: 'trainingId',
        hidden: true
    },{
        text: 'username',
        dataIndex: 'username',
        flex: 1,
        hidden: true
    },{
        width: 140,
        text: 'Дата',
        dataIndex: 'date',
        renderer: Ext.util.Format.dateRenderer('d.m.Y')
    },{
    	width: 140,
    	dataIndex: 'description',
    	text: 'Описание',
        hidden: true
    },{
        flex:1,
        text: 'Комментарий',
        dataIndex: 'comment'
    }],
    
    plugins: [{
        ptype: 'rowexpander',
        pluginId:'expander',
        rowBodyTpl : new Ext.XTemplate(
        	'{description}'
        )
    }],

    
    tbar: [
	{
		xtype: 'datefield',
        text: 'Месяц',
        value: new Date(),
        format: 'F Y',
        scale: 'small',
        listeners: [
        {
        	change: function(){
        		//TODO перегружаем стор с полученным месяцем и датой
        	}
    	}
        ]
    },{
        text: 'Скрыть пустые',
        enableToggle: true,
        itemId:'hidden',
        scale: 'small',
        toggleHandler : function(button, pressed) {
			if(pressed == true){
				//TODO  загружаем стор только с заполненными тренировочными днями
			}else{
				//TODO  загружаем все
			}
    	}
    },{
    	xtype: 'button',
    	text:'Скрыть/раскрыть',
    	handler: function(){
    		this.up('panel').getStore().load()
    	}
    }]

})