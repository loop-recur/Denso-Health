var SocketIp;
Ti.include('/initializers/init.js');


var win = Titanium.UI.createWindow({  
	backgroundImage: '/images/main_bg_tan_leather_ptrn_full.png',
	height:768,
	width:1024,
	top:0,
	left:0
});

PromptConnect(function(ip){
	SocketIp = ip;
	Layouts.application.build(win);
	Controllers.application.index();
	win.open();
});
