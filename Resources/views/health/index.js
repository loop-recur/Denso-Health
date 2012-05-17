Ti.include('../../helpers/health/index_helper.js');
Views.health.index = function() {
  var carListView = Ti.UI.createView({
        width: 352,
        height: 517,
        right: '20%',
        top: 100,
        backgroundImage: '/images/health_main_content_box.png'
      }),

      carListViewInner = Ti.UI.createTableView({
        width: '98%',
        height: '100%',
        separatorColor: 'gray'
      }),

      socketView = Ti.UI.createWebView({
        visible: false,
        url: (function() {
                return isAndroid ? "/pages/socket_connector/android_connect.html" : "/pages/socket_connector/mobileweb_connect.html"
              }())
        }),

      carListData = _buildHealthItemList(carListViewInner);

  carListViewInner.setData(carListData);
  carListView.add(carListViewInner);
  Layouts.application.contentRightView.add(carListView);
  Layouts.application.contentView.add(socketView);
};

