Views.health.index = function() {

  var _buildHealthItemList = function() {
    var carHealthItems = [
                          {title:"Front Passenger Shock",type:"MechStat"},
                          {title:"Wiper Fluid", type:"FluidStat"},
                          {title:"Brake Fluid", type:"FluidStat"},
                          {title:"Power Steering Fluid", type:"FluidStat"},
                          {title:"Coolant", type:"FluidStat"},
                          {title:"Oil", type:"FluidStat"},
                          {title:"Transmission Fluid", type:"FluidStat"},
                          {title:"Front Driver Tire", type:"AirStat"},
                          {title:"Front Passenger Tire", type:"AirStat"},
                          {title:"Rear Driver Tire", type:"AirStat"},
                          {title:"Rear Passenger Tire", type:"AirStat"},
                          {title:"Front Driver Shock", type:"MechStat"},
                          {title:"Rear Driver Shock", type:"MechStat"}
                         ],
        rows = [];

    for (var i=0, len=carHealthItems.length; i < len; i++) {
      var row = Ti.UI.createTableViewRow({
        className: carHealthItems[i].title,
        title: carHealthItems[i].title,
        color: 'white',
        width: '95%'
      });

      row.addEventListener('click', showItem);
      rows.push(row);
    }
    return rows;
  };

  var showItem = function() {
    Layouts.application.contentView.clear();
    Layouts.application.contentView.clear();
    Controllers.health.show();  
  };

  //var index = function() {
    var carView = Ti.UI.createView({
          width: 352,
          height: 517,
          left: '10%',
          backgroundImage: '/images/health_main_content_box.png'
        });

    var carChassisView = Ti.UI.createView({
          backgroundImage: '/images/health_chassis.png',
          width: 228,
          height: 481
        });

    var overAllHealth = Ti.UI.createView({
          backgroundImage: '/images/health_overall_health_good.png',
          width: 84,
          height: 29,
          top: 5,
          left: 5
        });

    var carListView = Ti.UI.createView({
          width: 352,
          height: 517,
          right: '10%',
          backgroundImage: '/images/health_main_content_box.png'
        });

    var carListViewInner = Ti.UI.createTableView({
          width: '98%',
          height: '100%',
          separatorColor: 'gray'
        });

    var carListData = _buildHealthItemList();

    carListViewInner.setData(carListData);
    carListView.add(carListViewInner);
    carView.add(overAllHealth);
    carView.add(carChassisView);
    Layouts.application.contentView.add(carView);
    Layouts.application.contentView.add(carListView);
 // };

//  return {index: index};
};
