Views.health.show = function() {

  //var show = function() {
    var carView = Ti.UI.createView({
          width: 352,
          height: 517,
          left: '10%',
          backgroundImage: '/images/health_main_content_box.png'
        });

    var carChassisView = Ti.UI.createImageView({
          image: '/images/health_chassis.png',
          width: '90%',
          height: '90%'
        });

    var overAllHealth = Ti.UI.createImageView({
          image: '/images/health_overall_health_good.png',
          top: 5,
          left: 5
        });

    var wiperFluidFocus = Ti.UI.createView({
          backgroundImage: '/images/health_wiper_focus_top_bg.png',
          height: 278,
          width: 352,
          right: 25,
          top: 60
        });

    var wiperFluidFocusAll = Ti.UI.createView({
          backgroundImage: '/images/health_wiper_focus_top_section_all.png',
          height: 265,
          width: 324
        });

    var wiperFluidPoi = Ti.UI.createView({
          backgroundImage: '/images/health_wiper_focus_poi_bg.png',
          height: 222,
          width: 352,
          right: 25,
          top: 368
        });

    var wiperFluidPoiInner = Ti.UI.createView({
          backgroundImage: '/images/health_wiper_focus_poi_section_all.png',
          height: 199,
          width: 324
        });

    carView.add(overAllHealth);
    carView.add(carChassisView);

    wiperFluidFocus.add(wiperFluidFocusAll);
    wiperFluidPoi.add(wiperFluidPoiInner);

    Layouts.application.contentView.add(wiperFluidFocus);
    Layouts.application.contentView.add(wiperFluidPoi);
    Layouts.application.contentView.add(carView);
//  };

 // return {show: show};
};

