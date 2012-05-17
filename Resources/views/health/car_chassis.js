Views.health.carChassis = function() {
  var self = {
      carView : Ti.UI.createView({
        width: 352,
        height: 517,
        left: '20%',
        top: 100,
        backgroundImage: '/images/health_main_content_box.png'
      }),

      carChassisView : Ti.UI.createView({
        backgroundImage: '/images/chassis/chassis_base.png',
        width: 320,
        height: 420
      }),

      overAllHealth : Ti.UI.createView({
        backgroundImage: '/images/health_overall_health_good.png',
        width: 84,
        height: 29,
        top: 5,
        left: 5
      })
  };

  self.carView.add(self.overAllHealth);
  self.carView.add(self.carChassisView);
  return self.carView;
};

