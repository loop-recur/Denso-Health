var SocketIp;
Ti.include('/initializers/init.js');


var win = Titanium.UI.createWindow({  
      backgroundImage: '/images/main_bg_tan_leather_ptrn.png'
    });

PromptConnect(function(ip){
	SocketIp = ip;
	Layouts.application.build(win);
	Controllers.application.index();
	win.open();
});