carChassisHelper = function(view) {
  var chassisItems = ['washer_fluid_level', 'coolant_fluid', 'oil_pressure', 'transmission_fluid', 'tire_1_pressure', 'tire_2_pressure', 'tire_3_pressure', 'tire_4_pressure', 'brake_fluid', 'power_steering_fluid'];

  var _buildChassisItem = function(title) {
    view[title] = view.buildChassisItem();
    view.carView.add(view[title]);
  };

  map(_buildChassisItem, chassisItems);

  view.update = function(healthItem) {
    if(view[healthItem.input_name]) view[healthItem.input_name].image = healthItem.stat.reportChassisImage(healthItem.input_name);
  };  
};

