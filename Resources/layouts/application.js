Layouts.application = (function() {
  var win;

  var _registerContentView = function(win) {
    Layouts.application.contentView = Ti.UI.createView({
      width: '75%',
      left: '25%',
      clear: function() {
        for(var i in this.children) {
          this.remove(this.children[i]);
        }
      }
    });
    win.add(Layouts.application.contentView);
  };

  var _buildTopBar = function(win) {
    var topBar = Ti.UI.createView({
          width: '100%',
          top: 0,
          left: 0,
          backgroundImage: '/images/top_bar_bg.png',
          height: 40,
          zIndex: 15
        });

    // change to button
    var carIcon = Ti.UI.createView({
          backgroundColor: 'white',
          height: 20,
          width: 40,
          top: 10,
          right: 160
        });

    var time = Ti.UI.createLabel({
          text: DateFormatter.time(),
          font: {fontSize: 25},
          color: 'white',
          top: 5
        });

    var date = Ti.UI.createLabel({
          text: DateFormatter.date(),
          font: {fontSize: 16},
          color: 'white',
          top: 12,
          left: 50
        });

    var powerButton = Ti.UI.createButton({
          backgroundImage: 'images/topbar_on_btn.png',
          width: 20,
          height: 20,
          top: 10,
          right: 210
        });

    var emergencyButton = Ti.UI.createButton({
          backgroundImage: 'images/top_bar_emergency_btn.png',
          backgroundSelectedImage: 'images/top_bar_emergency_btn_a.png',
          width: 35,
          height: 35,
          left: 5
        });

    var caddyLogo = Ti.UI.createImageView({
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

  var _buildMediaBar = function(win) {
    var mediaPlayer = Ti.UI.createView({
          width: '100%',
          height: 80,
          bottom: 0,
          backgroundImage: '/images/media_bar_bg.png',
          zIndex: 15
        });

    var coverArt = Ti.UI.createImageView({
          image: '/images/Media-Bar1-_31.png',
          left: 30
        });

    var nowPlaying = Ti.UI.createLabel({
          text: 'Now Playing',
          top: 15,
          left: 100,
          color: 'gray',
          font: {fontSize: 14}
        });

    var songTitle = Ti.UI.createLabel({
          text: "Moment's Notice",
          top: 30,
          left: 100,
          color: 'white'
        });

    var artist = Ti.UI.createLabel({
          text: 'John Coltrane',
          top: 48,
          left: 100,
          color: 'gray',
          font: {fontSize: 14}
        });

    var mediaBack = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_back.png',
          backgroundSelectedImage: '/images/media_bar_back_p.png',
          left: '35%',
          width: 68,
          height: 68,
          top: 10
        });

    var mediaForward = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_fwd.png',
          backgroundSelectedImage: '/images/media_bar_fwd_p.png',
          left: '54%',
          zIndex: 10,
          width: 68,
          height: 68,
          top: 10
        });

    var mediaPlay = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_play.png',
          backgroundSelectedImage: '/images/media_bar_play_p.png',
          left: '44%',
          width: 87,
          height: 87,
          top: 5
        });

    var mediaRepeat = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_repeat.png',
          //backgroundFocusedImage: '/images/media_bar_repeat_a.png',
          backgroundSelectedImage: '/images/media_bar_repeat_p.png',
          left: '20%',
          width: 44,
          height: 40
        });

    var mediaShuffle = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_shuffle.png',
          //backgroundFocusedImage: '/images/media_bar_shuffle_a.png',
          backgroundSelectedImage: '/images/media_bar_shuffle_p.png',
          left: '25%',
          width: 44,
          height: 40,
          enabled: true
        });

    var volumeSlider = Ti.UI.createSlider({
          right: 25,
          width: 200,
          height: 20
        });

    // make image view
    var smallVolume = Ti.UI.createView({
          backgroundColor: 'white',
          height: 10,
          width: 10,
          right: 230
        });

    // make image view
    var largeVolume = Ti.UI.createView({
          backgroundColor: 'white',
          height: 10,
          width: 10,
          right: 10
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
  }

  var _buildSideBar = function(win) {
    var sideBar = Ti.UI.createView({
          width: '25%',
          left: 0,
          backgroundImage: '/images/health_sidebar_repeat.png'
        });

    var underTheHood = Ti.UI.createImageView({
          image: '/images/sidebar_under_the_hood_heading.png',
          left: 75,
          top: 125,
          zIndex: 15
        });

    var sideBarBack = Ti.UI.createLabel({
          text: '< Home',
          top: 100,
          left: 10,
          color: 'white',
          zIndex: 15
        });

    var sideBarInner = Ti.UI.createTableView({
          top: 175,
          width: '100%',
          separatorColor: 'gray'
        });

    var sidePanelData = [{title: 'Health', icon: '../images/sidebar_health_icon.png', color: 'images/sidebar_yellow.png'},
                         {title: 'Stats', icon: '../images/sidebar_stats_icon.png', color: 'images/sidebar_rouge.png'}, 
                         {title: 'Scheduled Maintenance', icon: '../images/sidebar_maitnence_icon.png', color: '../images/sidebar_aqua.png'}, 
                         {title: 'Guide', icon: 'images/sidebar_guide_icon.png', color: 'images/sidebar_tan.png'} 
                        ];

    var rows = [];
    for (var i=0, len=sidePanelData.length; i < len; i++) {
      var data = sidePanelData[i];
      var row = Ti.UI.createTableViewRow({
        color: 'white',
        width: '100%',
        height: 80
      });

      var icon = Ti.UI.createView({
            backgroundImage: data.icon,
            left: 35,
            height: 40,
            width: 40,
            zIndex: 16
          });

      var color = Ti.UI.createView({
            backgroundImage: data.color,
            left: 0,
            width: 19,
            zIndex: 16
          });

      var label = Ti.UI.createLabel({
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
    win.add(underTheHood);
    win.add(sideBar);
  }

  var build = function(win) {
    _registerContentView(win);
    _buildTopBar(win);
    _buildMediaBar(win);
    _buildSideBar(win);
  };

  return {build: build}
})();
