var _createItemStatusView =  function(healthItem) {
  var stat = healthItem.stat,
      view = UI.createImageView({
        top: 50,
        left: 10,
        height: 75,
        width: 200,
      }),

      statusLabel = Ti.UI.createLabel({
        text: "Status: " + (stat.report() || 'unreported'),
        top: 5,
        left: 5,
        color: 'white',
        font: {fontSize: 14}
      }),

      statusImage = UI.createImageView({
        repeatCount: 1,
        duration: 20,
        top: 10,
        left: 155
      }),

      currentLabel = Ti.UI.createLabel({
        text: (stat.measurementName) ? ('Current '+stat.measurementName+stat.currentMeasurement()) : '',
        top: 25,
        left: 5,
        color: 'white',
        font: {fontSize: 14}
      }),

      availableLabel = Ti.UI.createLabel({
        text: (stat.measurementName) ? ('Available '+stat.measurementName+stat.availableMeasurement) : '',
        top: 45,
        left: 5,
        color: 'white',
        font: {fontSize: 14}
      });

  view.add(statusLabel);
  view.add(statusImage);
  view.add(currentLabel);
  view.add(availableLabel);

  var clearImages = function() {
    if(statusImage.images) statusImage.image = last(statusImage.images);
    statusImage.removeEventListener('stop', clearImages);
    if(isAndroid) statusImage.images = null;
  }

  var updateStat = function(e) {
    var updatedData = filterByProperty('input_name', healthItem.input_name, e.data);

    if(updatedData && stat.needsUpdate(updatedData.input_value)) {
      stat.update(updatedData.input_value); 
      Views.health.carChassis.update(healthItem);
      statusImage.images = null;
      var imgs = stat.reportImages();
      statusLabel.text = "Status: " + stat.report();
      currentLabel.text = (stat.measurementName) ? ('Current '+stat.measurementName+stat.currentMeasurement()) : '';
      statusImage.images = imgs;
      statusImage.addEventListener('stop', clearImages);
      statusImage.start();
      if(!isAndroid) statusImage.addEventListener('stop', clearImages);
    }
  };

  Ti.App.addEventListener('car_stats_received', updateStat);

  return view;
};

