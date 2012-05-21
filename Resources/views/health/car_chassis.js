Ti.include('/helpers/health/car_chassis_helper.js');

Views.health.carChassis = (function() {
  var self = {
        carView : UI.createImageView({
          width: 352,
          height: 517,
          left: '20%',
          top: 100,
          image: '/images/health_main_content_box.png'
        }),

        carChassisView : UI.createImageView({
          image: '/images/chassis/chassis_base.png',
          width: 320,
          height: 520
        }),

        overAllHealth : UI.createImageView({
          image: '/images/health_overall_health_good.png',
          width: 84,
          height: 29,
          top: 5,
          left: 5
        })
      };

    self.buildChassisItem = function() {
      return UI.createImageView({
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

