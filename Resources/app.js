var SocketIp;
Ti.include('/theme_name.js');
Ti.include('/initializers/init.js');
CurrentTheme = Theme(ThemeName);

var win = UI.createWindow();

PromptConnect(function(ip){
	SocketIp = ip;
	Layouts.application.build(win);
	Controllers.application.index();
	win.open();
});
