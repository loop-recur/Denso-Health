Ti.include('../../helpers/health/show_helper.js');

Views.health.show = function(healthItem) {

    var itemFocus = Ti.UI.createView({
        backgroundImage: '/images/health_wiper_focus_top_bg.png',
        height: 278,
        width: 352,
        right: 25,
        top: 60
      }),
        
      itemLabel = Ti.UI.createLabel({
        text: healthItem.title,
        top: 5,
        left: 10,
        color: 'white'
      }),
     
      itemImage = Ti.UI.createImageView({
        image: healthItem.image,
        top: 5,
        left: 100,
        height: 30,
        width: 30
      }),
     
      itemStatus = _createItemStatusView(healthItem),
     
      itemGuide = Ti.UI.createView({
        backgroundColor: 'white',
        top: 50,
        left: 175,
        width: 125,
        height: 75
      }),

      itemGuideLabel = Ti.UI.createLabel({
        text: "View\nin Guide",
        color: 'black'
      }),
     
      itemVideo = Ti.UI.createView({
        height: 100,
        width: 200,
        backgroundColor: 'white',
        top: 150,
        left: 10
      }),

      wiperFluidPoi = Ti.UI.createView({
        backgroundImage: '/images/health_wiper_focus_poi_bg.png',
        height: 222,
        width: 352,
        right: 25,
        top: 368
      }),

      wiperFluidPoiInner = Ti.UI.createView({
        backgroundImage: '/images/health_wiper_focus_poi_section_all.png',
        height: 199,
        width: 324
      });
     

  itemGuide.add(itemGuideLabel);
  itemFocus.add(itemLabel);
  itemFocus.add(itemImage);
  itemFocus.add(itemStatus);
  itemFocus.add(itemGuide);
  itemFocus.add(itemVideo);

  itemLabel.addEventListener('click', function() {
    Layouts.application.contentRightView.clear();  
    Layouts.application.contentRightView.clear();  
    Controllers.health.index();
  });
       
  wiperFluidPoi.add(wiperFluidPoiInner);
  Layouts.application.contentRightView.add(wiperFluidPoi);
  Layouts.application.contentRightView.add(itemFocus);
};

