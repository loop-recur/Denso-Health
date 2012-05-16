Views.health.carChassis = function() {
  var self = {
      carView : Ti.UI.createView({
        width: 352,
        height: 517,
        left: '10%',
        backgroundImage: '/images/health_main_content_box.png'
      }),

      carChassisView : Ti.UI.createView({
        backgroundImage: '/images/health_chassis.png',
        width: 228,
        height: 481
      }),

      overAllHealth : Ti.UI.createView({
        backgroundImage: '/images/health_overall_health_good.png',
        width: 84,
        height: 29,
        top: 5,
        left: 5
      })
  };

  self.carChassisView.add(self.overAllHealth);
  self.carView.add(self.carChassisView);
  return self.carView;
};

