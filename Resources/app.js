Ti.include('initializers/init.js');

var win = Titanium.UI.createWindow({  
      backgroundImage: '/images/main_bg_tan_leather_ptrn.png'
    });

Layouts.application.build(win);
Controllers.application.index();

win.open();
  
