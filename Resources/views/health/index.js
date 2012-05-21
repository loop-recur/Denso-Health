Ti.include('/helpers/health/index_helper.js');
Views.health.index = function() {
  var carListView = UI.createImageView({
        width: 352,
        height: 517,
        right: '20%',
        top: 100,
        image: '/images/health_main_content_box.png'
      }),

      carListViewInner = Ti.UI.createTableView({
        width: '98%',
        height: '100%',
        separatorColor: 'gray'
      }),

      socketView = Ti.UI.createWebView({
        visible: false
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

