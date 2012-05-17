Ti.include('initializers/init.js');
Ti.App.socket_ip = "10.0.1.2:4000";

var win = Titanium.UI.createWindow({  
      backgroundImage: '/images/main_bg_tan_leather_ptrn.png'
    });

Layouts.application.build(win);
Controllers.application.index();

win.open();
  
