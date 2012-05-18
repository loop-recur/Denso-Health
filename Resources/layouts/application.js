Layouts.application = (function() {
  var win;

  var _registerContentView = function() {
    Layouts.application.contentView = Ti.UI.createView({
      width: '75%',
      left: '25%'
    });

    Layouts.application.contentLeftView = Ti.UI.createView({
      width: '50%',
      left: 0,
      clear: function() {
        map(function(c) { Layouts.application.contentLeftView.remove(c) }, Layouts.application.contentLeftView.children);
      }
    });

    Layouts.application.contentRightView = Ti.UI.createView({
      width: '50%',
      right: 0,
      clear: function() {
        map(function(c) { Layouts.application.contentRightView.remove(c) }, Layouts.application.contentRightView.children);
      }
    });

    Layouts.application.contentLeftView.add(Views.health.carChassis.init());
    Layouts.application.contentView.add(Layouts.application.contentLeftView);
    Layouts.application.contentView.add(Layouts.application.contentRightView);
    win.add(Layouts.application.contentView);
  };

  var _buildTopBar = function() {
    var topBar = Ti.UI.createView({
          width: '100%',
          top: 0,
          left: 0,
          backgroundImage: '/images/top_bar_bg.png',
          height: 40,
          zIndex: 15
        }),

        carIcon = Ti.UI.createImageView({
          image: '/images/topbar_car_icon.png',
          height: 36,
          width: 36,
          right: 160
        }),

        time = Ti.UI.createLabel({
          text: DateFormatter.time(),
          font: {fontSize: 25},
          color: 'white',
          top: 5
        }),

        date = Ti.UI.createLabel({
          text: DateFormatter.date(),
          font: {fontSize: 16},
          color: 'white',
          top: 12,
          left: 50
        }),
  
        powerButton = Ti.UI.createButton({
          backgroundImage: '/images/topbar_on_btn.png',
          width: 20,
          height: 20,
          top: 10,
          right: 210
        }),

        emergencyButton = Ti.UI.createButton({
          backgroundImage: '/images/top_bar_emergency_btn.png',
          backgroundSelectedImage: '/images/top_bar_emergency_btn_a.png',
          width: 35,
          height: 35,
          left: 5
        }),

        caddyLogo = Ti.UI.createImageView({
          image: '/images/top_bar_cadillac_logo.png',
          right: 0
        });

    topBar.add(emergencyButton);
    topBar.add(powerButton);
    topBar.add(carIcon);
    topBar.add(time);
    topBar.add(date);
    topBar.add(caddyLogo);
    win.add(topBar);
  };

  var _buildMediaBar = function() {
    var mediaPlayer = Ti.UI.createView({
          width: '100%',
          height: 80,
          bottom: 0,
          backgroundImage: '/images/media_bar_bg.png',
          zIndex: 15
        }),

        coverArt = Ti.UI.createImageView({
          image: '/images/Media-Bar1-_31.png',
          left: 30
        }),

        nowPlaying = Ti.UI.createLabel({
          text: 'Now Playing',
          top: 15,
          left: 100,
          color: 'gray',
          font: {fontSize: 14}
        }),

        songTitle = Ti.UI.createLabel({
          text: "Moment's Notice",
          top: 30,
          left: 100,
          color: 'white'
        }),

        artist = Ti.UI.createLabel({
          text: 'John Coltrane',
          top: 48,
          left: 100,
          color: 'gray',
          font: {fontSize: 14}
        }),

        mediaBack = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_back.png',
          backgroundSelectedImage: '/images/media_bar_back_p.png',
          left: '35%',
          width: 68,
          height: 68,
          top: 10
        }),

        mediaForward = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_fwd.png',
          backgroundSelectedImage: '/images/media_bar_fwd_p.png',
          left: '54%',
          zIndex: 10,
          width: 68,
          height: 68,
          top: 10
        }),

        mediaPlay = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_play.png',
          backgroundSelectedImage: '/images/media_bar_play_p.png',
          left: '44%',
          width: 87,
          height: 87,
          top: 5
        }),

        mediaRepeat = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_repeat.png',
          backgroundSelectedImage: '/images/media_bar_repeat_p.png',
          left: '20%',
          width: 44,
          height: 40
        }),

        mediaShuffle = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_shuffle.png',
          backgroundSelectedImage: '/images/media_bar_shuffle_p.png',
          left: '25%',
          width: 44,
          height: 40,
          enabled: true
        }),

        volumeSlider = Ti.UI.createSlider({
          right: 25,
          width: 200,
          height: 20
        }),

        smallVolume = Ti.UI.createImageView({
          image: '/images/media_bar_low_vol.png',
          height: 25,
          width: 25,
          right: 220
        }),

        largeVolume = Ti.UI.createImageView({
          image: '/images/media_bar_hi_vol.png',
          height: 25,
          width: 25,
          right: 2
        });

    mediaPlayer.add(smallVolume);
    mediaPlayer.add(largeVolume);
    mediaPlayer.add(nowPlaying);
    mediaPlayer.add(songTitle);
    mediaPlayer.add(artist);
    mediaPlayer.add(coverArt);
    mediaPlayer.add(mediaBack);
    mediaPlayer.add(mediaForward);
    mediaPlayer.add(mediaPlay);
    mediaPlayer.add(mediaRepeat);
    mediaPlayer.add(mediaShuffle);
    mediaPlayer.add(volumeSlider);
    win.add(mediaPlayer);
  };

  var _buildSideBar = function() {
    var sideBar = Ti.UI.createView({
          width: '25%',
          left: 0,
          backgroundImage: '/images/health_sidebar_repeat.png'
        }),

        underTheHood = Ti.UI.createImageView({
          image: '/images/sidebar_under_the_hood_heading.png',
          left: 75,
          top: 125,
          zIndex: 15
        }),

        sideBarBack = Ti.UI.createImageView({
          image: '/images/sidebar_backhome.png',
          top: 95,
          left: 10,
          height: 19,
          width: 63,
          zIndex: 15
        }),

        sideBarInner = Ti.UI.createTableView({
          top: 175,
          width: '100%',
          separatorColor: 'gray'
        }),

        sidePanelData = [
                          {title: 'Health', icon: '../images/sidebar_health_icon.png', color: 'images/sidebar_yellow.png'},
                          {title: 'Stats', icon: '../images/sidebar_stats_icon.png', color: 'images/sidebar_rouge.png'}, 
                          {title: 'Scheduled Maintenance', icon: '../images/sidebar_maitnence_icon.png', color: '../images/sidebar_aqua.png'}, 
                          {title: 'Guide', icon: '../images/sidebar_guide_icon.png', color: '../images/sidebar_tan.png'} 
                        ],

        rows = [];

    for (var i=0, len=sidePanelData.length; i < len; i++) {
      var data = sidePanelData[i],
          row = Ti.UI.createTableViewRow({
            width: '100%',
            height: 80,
            backgroundImage: ((sidePanelData[i].title == "Health") ? '/images/health_background.png' : ''),
          }),

          icon = Ti.UI.createView({
            backgroundImage: data.icon,
            left: 35,
            height: 40,
            width: 40,
            zIndex: 16
          }),

          color = Ti.UI.createView({
            backgroundImage: data.color,
            left: 0,
            width: 19,
            zIndex: 16
          }),

          label = Ti.UI.createLabel({
            text: data.title,
            color: 'white',
            left: 95
          });

      row.add(icon);
      row.add(color);
      row.add(label);
      rows.push(row);
    }

    sideBarInner.setData(rows);
    sideBar.add(sideBarInner);
    win.add(sideBarBack);

    sideBarBack.addEventListener('click', function() {
      Layouts.application.contentRightView.clear();  
      Layouts.application.contentRightView.clear();  
      Controllers.health.index();
    });

    win.add(underTheHood);
    win.add(sideBar);
  };

  var _buildCarSummary = function() {
    var healthAutoBox = Ti.UI.createView({
          backgroundImage: '/images/health_auto_box.png',
          top: 50,
          left: '32%',
          width: 194,
          height: 59
        });

    var carPreview = Ti.UI.createImageView({
          image: '/images/cadillac_xts_avatar.png',
          width: 40,
          height: 40,
          top: 7,
          left: 5
        });

    var carMakeModel = Ti.UI.createLabel({
          text: '2011 Cadillac XTS',
          color: 'white',
          bottom: 5,
          right: 5,
          font: {fontSize: 14}
        });

    healthAutoBox.add(carPreview);
    healthAutoBox.add(carMakeModel);
    win.add(healthAutoBox);
  };

  var build = function(w) {
    win = w; 
    _registerContentView();
    _buildTopBar();
    _buildMediaBar();
    _buildSideBar();
    _buildCarSummary();
  };

  return {build: build}
})();
