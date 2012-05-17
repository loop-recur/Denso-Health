Ti.include('../../helpers/health/show_helper.js');

Views.health.show = function(healthItem) {

    var itemFocus = Ti.UI.createView({
        backgroundImage: '/images/health_wiper_focus_top_bg.png',
        height: 278,
        width: 352,
        right: '20%',
        top: 100
      }),
        
      itemLabel = Ti.UI.createLabel({
        text: healthItem.title,
        top: 15,
        left: 10,
        color: 'white'
      }),

      itemSeparator = Ti.UI.createImageView({
        image: '/images/health_wiper_focus_separator.png',
        height: 10,
        width: 324,
        top: 40,
        left: 10
      }),
     
/*      itemImage = Ti.UI.createImageView({
        image: healthItem.image,
        top: 0,
        height: 30,
        width: 36
      }),*/

      itemStatus = _createItemStatusView(healthItem),
     
      itemGuide = Ti.UI.createView({
        backgroundImage: '/images/wiperfocus_view_in_guide_btn.png',
        backgroundSelectedImage: '/images/wiperfocus_view_in_guide_btn_p.png',
        top: 60,
        left: 190,
        width: 150,
        height: 55
      }),

      itemVideo = Ti.UI.createImageView({
        image: '/images/health_wiper_focus_top_section_all_bottom.png',
        height: 144,
        width: 324,
        top: 130,
        left: 10
      }),

      wiperFluidPoi = Ti.UI.createView({
        backgroundImage: '/images/health_wiper_focus_poi_bg.png',
        height: 222,
        width: 352,
        right: '20%',
        top: 408
      }),

      wiperFluidPoiInner = Ti.UI.createView({
        backgroundImage: '/images/health_wiper_focus_poi_section_all.png',
        height: 199,
        width: 324
      });
     
  itemFocus.add(itemLabel);
  itemFocus.add(itemSeparator);
  //itemFocus.add(itemImage);
  itemFocus.add(itemGuide);
  itemFocus.add(itemStatus);
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

