Ti.include('/helpers/health/car_chassis_helper.js');
Views.health.carChassis = (function() {
  var self = {
        carView: Ti.UI.createView({
          width: 337,
          height: 517,
          left: 31,
          top: 147,
          backgroundImage: '/images/health_main_content_box.png'
        }),

        carChassisView: Ti.UI.createView({
          backgroundImage: '/images/chassis/chassis_base.png',
          width: '100%'
        }),

        overAllHealth: Ti.UI.createView({
          backgroundImage: '/images/health_overall_health_good.png',
          width: 84,
          height: 29,
          top: 5,
          left: 5
        })
      };

    self.buildChassisItem = function() {
      return Ti.UI.createImageView({
        width: 320,
        height: 520
      });
    };

    self.init = function() {
      carChassisHelper(self);
      self.carView.add(self.overAllHealth);
      self.carView.add(self.carChassisView);
      return self.carView;
    };

  return self;
})();

