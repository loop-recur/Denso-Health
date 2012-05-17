var _createItemStatusView =  function(healthItem) {
  var stat = healthItem.stat,
      view = Ti.UI.createView({
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

      statusImage = Ti.UI.createImageView({
        image: stat.reportStaticImage(),
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

  return view;
};

