var _buildHealthItemList = function(carListViewInner) {
  var carHealthItems = [
												{title:"Gas Level", type:"FluidStat", input_name: 'gas_level'},
                        {title:"Wiper Fluid", type:"FluidStat", input_name: 'washer_fluid_level'},
                        {title:"Oil", type:"FluidStat", input_name: "oil_pressure"},
                        {title:"Transmission Fluid", type:"FluidStat", input_name: "transmission_fluid"},
                        {title:"Front Driver Tire", type:"AirStat", input_name: "tire_1_pressure"},
                        {title:"Front Passenger Tire", type:"AirStat", input_name: "tire_2_pressure"},
                        {title:"Rear Driver Tire", type:"AirStat", input_name: "tire_3_pressure"},
                        {title:"Rear Passenger Tire", type:"AirStat", input_name: "tire_4_pressure"}
                        /*{title:"Front Driver Shock", type:"MechStat", input_name: ""},
                        {title:"Front Passenger Shock", type:"MechStat", input_name: ""},
                        {title:"Rear Driver Shock", type:"MechStat", input_name: ""},
                        {title:"Rear Passenger Shock", type:"MechStat", input_name: ""}*/
                       ];

    var makeRow = function(i) {
      var hi = new HealthItem(i),

          stat = hi.stat,

          row = Ti.UI.createTableViewRow({
            color: 'white',
            width: '95%',
            healthItem: hi,
            attention: hi.stat.attention,
            input_name: i.input_name
          }),

          titleLabel = UI.createLabel({
            text: i.title,
            left: 20
          }),

          statusLabel = UI.createLabel({
            text: stat.report(),
            right: 35 
          }),

          statusImage = UI.createImageView({
            repeatCount: 1,
						duration: 20,
            right: 5,
            height: 20,
            width: 20
          }), 
          
          alertImage = UI.createImageView({
            image: '',
            left: 0,
            height: 20,
            width: 20
          });

			var clearImages = function() {
				if(statusImage.images) statusImage.image = last(statusImage.images);
				statusImage.removeEventListener('stop', clearImages);
				if(isAndroid) statusImage.images = null;
			}

      row.add(titleLabel);
      row.add(statusLabel);
      row.add(statusImage);
      row.add(alertImage);
      row.addEventListener('click', showItem);
      row.refresh = function() {
				statusImage.images = null;
				var imgs = hi.stat.reportImages();
        statusLabel.text = hi.stat.report();
        statusImage.images = imgs;
				log(imgs);
				statusImage.addEventListener('stop', clearImages);
        statusImage.start();
				if(!isAndroid) statusImage.addEventListener('stop', clearImages);
        this.attention = hi.stat.attention;
        if(hi.stat.attention) {
         alertImage.image = '/images/health_list_alert.png';
        }
      };
      return row;
    };


    var showItem = function() {
          Layouts.application.contentRightView.clear();
          Ti.App.removeEventListener('car_stats_received', updateStats);
          Ti.App.fireEvent('onShow');
          Controllers.health.show(this.healthItem);  
        };

  var sortAttention = function(a,b) {
    if(a.attention > b.attention)
      return -1;
    if(a.attention < b.attention)
      return 1;
    return 0;
  };

  var updateStat = defn(function(data, row) {
    var healthItem = row.healthItem, 
        updatedData = filterByProperty('input_name', row.input_name, data);

    if(updatedData && healthItem.stat.needsUpdate(updatedData.input_value)) {
      healthItem.stat.update(updatedData.input_value); 
			Views.health.carChassis.update(healthItem);
      row.refresh();
    }
  });

  var updateStats = function(e) {
    var data = e.data,
        children = carListViewInner.data[0].rows;
		// children.sort(sortAttention);
		// carListViewInner.setData(children);
    map(updateStat(data), children);

  };

  var rows = map(makeRow, carHealthItems);

  Ti.App.addEventListener('car_stats_received', updateStats);
        
  return rows;
};

