require('initializers/init');

var win = Titanium.UI.createWindow({  
    backgroundImage: '/images/main_bg_tan_leather_ptrn.png'
});

Layouts.application.build(win);
Controllers.application.index();

//might be shared since it should appear all over app as a layout, but it is in the right view area so it may not be fixed depending on what is rendered there. Helper may be approriate
//
/*
var healthAutoBox = Ti.UI.createView({
      backgroundImage: '/images/health_auto_box.png',
      top: 50,
      left: 20,
      width: 194,
      height: 59
    });

//change to imageview
var carPreview = Ti.UI.createView({
      backgroundColor: 'white',
      width: 45,
      height: 45,
      top: 7,
      left: 5
    });

var carMakeModel = Ti.UI.createLabel({
      text: '2011 Cadillac XTS',
      color: 'white',
      bottom: 5,
      right: 5,
      font: {fontSize: 14}
    });

healthAutoBox.add(carPreview);
healthAutoBox.add(carMakeModel);
*/
win.open();
  
