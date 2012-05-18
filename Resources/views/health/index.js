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
        visible: true,
				width: 100,
				height: 100,
				zIndex:999
       }),

      carListData = _buildHealthItemList(carListViewInner);
			
			if(isAndroid) {
				socketView.html = SocketPage(SocketIp);
			} else {
				socketView.url = "/pages/socket_page.html";
			}

  carListViewInner.setData(carListData);
  carListView.add(carListViewInner);
  Layouts.application.contentRightView.add(carListView);
  Layouts.application.contentView.add(socketView);
};

