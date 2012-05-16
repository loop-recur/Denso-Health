var _buildHealthItemList = function(carListViewInner) {
  var carHealthItems = [
                        {title:"Wiper Fluid", type:"FluidStat", input_name: 'washer_fluid_level'},
                        {title:"Brake Fluid", type:"FluidStat", input_name: "brake_fluid"},
                        {title:"Power Steering Fluid", type:"FluidStat"},
                        {title:"Coolant", type:"FluidStat", input_name: "coolant_fluid"},
                        {title:"Oil", type:"FluidStat", input_name: "oil_pressure"},
                        {title:"Transmission Fluid", type:"FluidStat", input_name: "transmission_fluid"},
                        {title:"Front Driver Tire", type:"AirStat", input_name: "tire_1_pressure"},
                        {title:"Front Passenger Tire", type:"AirStat", input_name: "tire_2_pressure"},
                        {title:"Rear Driver Tire", type:"AirStat", input_name: "tire_3_pressure"},
                        {title:"Rear Passenger Tire", type:"AirStat", input_name: "tire_4_pressure"},
                        {title:"Front Driver Shock", type:"MechStat", input_name: ""},
                        {title:"Front Passenger Shock", type:"MechStat", input_name: ""},
                        {title:"Rear Driver Shock", type:"MechStat", input_name: ""},
                        {title:"Rear Passenger Shock", type:"MechStat", input_name: ""}
                       ];

    var makeRow = function(i) {
      var hi = new HealthItem(i),

          stat = hi.stat,

          row = Ti.UI.createTableViewRow({
            className: i.title,
            color: 'white',
            width: '95%',
            healthItem: hi,
            attention: hi.stat.attention,
            input_name: i.input_name
          }),

          titleLabel = Ti.UI.createLabel({
            text: i.title,
            color: 'white',
            left: 20
          }),

          statusLabel = Ti.UI.createLabel({
            text: stat.report(),
            color: 'white',
            right: 35 
          }),

          statusImage = Ti.UI.createImageView({
            image: '',
            right: 5,
            height: 20,
            width: 20
          }), 
          
          alertImage = Ti.UI.createImageView({
            image: '',
            left: 0,
            height: 20,
            width: 20
          });

      row.add(titleLabel);
      row.add(statusLabel);
      row.add(statusImage);
      row.add(alertImage);
      row.addEventListener('click', showItem);
      row.refresh = function() { 
        statusLabel.text = hi.stat.report(); 
        statusImage.image = hi.stat.reportImage();
        this.attention = hi.stat.attention;
        if(hi.stat.attention) {
          alertImage.image = '/images/health_list_alert.png';
        }
      };
      return row;
    };

    var showItem = function() {
          Layouts.application.contentRightView.clear();
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

    if(updatedData) {
      healthItem.stat.update(updatedData.input_value); 
      row.refresh();
    }
  });

  var updateStats = function(e) {
    var data = e.data,
        children = carListViewInner.data[0].rows;

    map(updateStat(data), children);
    children.sort(sortAttention);
    carListViewInner.setData(children);
  };

  var rows = map(makeRow, carHealthItems);

  Ti.App.addEventListener('car_stats_received', updateStats);
        
  return rows;
};

