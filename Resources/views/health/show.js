Ti.include('/helpers/health/show_helper.js');

Views.health.show = function(healthItem) {

    var itemFocus = UI.createView({
        backgroundImage: '/images/health_wiper_focus_top_bg.png',
        height: 278,
        width: 337,
        left: 14,
        top: 147
      }),

      itemFocusLabelView = Ti.UI.createView({
        layout: 'horizontal',
       	width: '100%',
      }),
        
      itemLabel = Ti.UI.createLabel({
        text: healthItem.title,
        top: 15,
        left: 10,
        color: 'white'
      }),

      itemImage = UI.createImageView({
        image: healthItem.image,
        height: 30,
        width: 36,
        left: 5,
        top: 5
      }),

      itemSeparator = UI.createImageView({
        image: '/images/health_wiper_focus_separator.png',
        height: 10,
        width: 324,
        top: 40,
        left: 10
      }),
     
/*      itemImage = UI.createImageView({
        image: healthItem.image,
        top: 0,
        height: 30,
        width: 36
      }),*/

      itemStatus = _createItemStatusView(healthItem),
     
      itemGuide = UI.createImageView({
        image: '/images/wiperfocus_view_in_guide_btn.png',
        backgroundSelectedImage: '/images/wiperfocus_view_in_guide_btn_p.png',
        top: 60,
        left: 175,
        width: 150,
        height: 55
      }),

      /*itemVideo = UI.createImageView({
        image: '/images/health_wiper_focus_top_section_all_bottom.png',
        height: 144,
        width: 324,
        top: 130,
        left: 10
      }),*/

      /*itemVideo = Ti.UI.createWebView({
        height: 150,
        width: '100%',
        top: 130,
        left: 10
      }),*/

      itemVideoView = Ti.UI.createView({
        width: '100%',
        height: 150,
        top: 130,
        layout: 'vertical'
      }),

      itemVideoTitle = Ti.UI.createLabel({
        color: 'white',
        right: 5
      }),

      itemVideoAuthor = Ti.UI.createLabel({
        color: 'white',
        right: 5
      }),

      itemVideoDuration = Ti.UI.createLabel({
        color: 'white',
        right: 5
      }),

      wiperFluidPoi = UI.createImageView({
        image: '/images/health_wiper_focus_poi_bg.png',
        height: 222,
        width: 337,
        left: 12,
        top: 442
      }),

      wiperFluidPoiInner = UI.createImageView({
        image: '/images/health_wiper_focus_poi_section_all.png',
        height: 199,
        width: 324
      }),
    
      backButton = Ti.UI.createButton({
        width: 75,
        height: 25,
        backgroundColor: 'white',
        top: 117,
        right: 33,
        zIndex: 100
      }),
      
      searchTerms = {
       "gas_level": 'how to pump gas',
       "washer_fluid_level": 'how to change washer fluid',
       "oil_pressure": 'how to change oil',
       "transmission_fluid": 'how to change transmission fluid',
       "tire_1_pressure": 'how to check air in tire',
       "tire_2_pressure": 'how to check air in tire',
       "tire_3_pressure": 'how to check air in tire',
       "tire_4_pressure": 'how to check air in tire'
      };

  var getVid = function() {
    var xhr = Ti.Network.createHTTPClient({
          onload: function(e) {
            var data = JSON.parse(this.responseText),
                entry = data.feed.entry[0],
                title = entry.title.$t,
                author = entry.author[0].name.$t,
                duration = entry.media$group.yt$duration.seconds,
                minutes = Math.floor(duration/60),
                seconds = duration % 60,
                durationOutput = String(minutes) + ':' + String(seconds);
               /* link = first(first(data.feed.entry).link).href;
                itemVideo.url = link;*/
                itemVideoTitle.text = title;
                itemVideoAuthor.text = 'by ' + author; 
                itemVideoDuration.text = durationOutput;
          },
          onerror: function(e) {
          }
        }),
        
        url = 'http://gdata.youtube.com/feeds/api/videos?q='+searchTerms[healthItem.input_name]+'&alt=json&max-results=1&start-index=1';
        xhr.open("GET", url);
        xhr.send();
   };

  getVid();
     
  itemVideoView.add(itemVideoTitle);
  itemVideoView.add(itemVideoAuthor);
  itemVideoView.add(itemVideoDuration);

  itemFocusLabelView.add(itemLabel);
  itemFocusLabelView.add(itemImage);

  itemFocus.add(itemVideoView);
  itemFocus.add(itemFocusLabelView);
  itemFocus.add(itemSeparator);
  itemFocus.add(itemGuide);
  itemFocus.add(itemStatus);
  //itemFocus.add(itemVideo);

  itemLabel.addEventListener('click', function() {
    Layouts.application.contentRightView.clear();  
    Layouts.application.contentRightView.clear();  
    Ti.App.fireEvent('onBack');
    Controllers.health.index();
  });

  itemGuide.addEventListener('click', function() {
    Ti.UI.createAlertDialog({
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat lorem id diam molestie non tincidunt nulla blandit. Fusce et dui ante. Sed velit eros, adipiscing vel viverra eget, tincidunt ut metus. Sed in fringilla libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris blandit aliquam ante sed laoreet. Duis quis urna lacus. Phasellus vehicula suscipit commodo. Donec rutrum, urna sed egestas rutrum, nunc diam tempus felis, at rutrum sem urna ac metus. Nunc pretium cursus nulla in luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quis erat mi. Aliquam erat volutpat. Sed vel diam vel ipsum aliquet ullamcorper ut semper libero."}).show();
  });
       
  backButton.addEventListener('click', function() {
    Layouts.application.contentRightView.clear();
    Layouts.application.contentRightView.clear();
    Ti.App.fireEvent('onBack');
    Controllers.health.index();
  });


  wiperFluidPoi.add(wiperFluidPoiInner);
  Layouts.application.contentRightView.add(backButton);
  Layouts.application.contentRightView.add(wiperFluidPoi);
  Layouts.application.contentRightView.add(itemFocus);
};

