var SocketIp;
Ti.include('/initializers/init.js');
Ti.include('/theme_name.js');
CurrentTheme = Theme(ThemeName);
log(CurrentTheme);

var win = UI.createWindow();

PromptConnect(function(ip){
	SocketIp = ip;
	Layouts.application.build(win);
	Controllers.application.index();
	win.open();
});
