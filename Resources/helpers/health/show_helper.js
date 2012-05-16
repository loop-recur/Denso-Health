var _createItemStatusView =  function(healthItem) {
  var view = Ti.UI.createView({
        top: 50,
        left: 10,
        height: 75,
        width: 150
      }),

      statusLabel = Ti.UI.createLabel({
        text: "Status: " + healthItem.stat.report(),
        top: 5,
        left: 5,
        color: 'white'
      }),

      currentLabel = Ti.UI.createLabel({
        text: "Current Volume:",
        top: 25,
        left: 5,
        color: 'white'
      }),

      availableLabel = Ti.UI.createLabel({
        text: "Available Volume:",
        top: 45,
        left: 5,
        color: 'white'
      });

  view.add(statusLabel);
  view.add(currentLabel);
  view.add(availableLabel);

  return view;
};
