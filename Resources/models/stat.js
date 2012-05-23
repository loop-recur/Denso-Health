var halfAndRound = function(n) { return Math.round(n/2); };
var getMeterImage = function(n) { return '/images/health_meter/health_meter'+n+'.png'; };

Stat = function() { this.level = 0; };
Stat.prototype = {
	attention: false,
  
  reportLevel: function() { return this.level; },

  update: function(n) { 
    this.oldLevel = this.level;
    this.level = Number(n); 
  },

  needsUpdate: function(n) { return n != this.level;},

	getImageFun: compose(getMeterImage, halfAndRound),
	
	getStepFun: function() {
		var self = this;
		var incIfGreater = function(n){ if(self.level > n) return [self.getImageFun(n), n+1]; }
		var decIfLower = function(n){ if(self.level < n) return [self.getImageFun(n), n-1]; }

		return this.oldLevel > this.level ? decIfLower : incIfGreater;
	},
	
	reportImages: function() {
                        if(this.level < 0 && this.level > 100) return [];
												return unfoldr(this.getStepFun(), this.oldLevel);
                      },

  reportChassisLevel: function() {
		if(this.levelIsLow()) return "red";
		if(this.levelIsMedium()) return "yellow";
    if(this.levelIsHigh()) return "green";
  }

};


FluidStat = function() {
  
  this.measurementName = 'Volume (L): ';

  this.availableMeasurement = 8;

  this.currentMeasurement = function() { return this.availableMeasurement * (this.level/100); };

  this.thresholds = { 5: 'veryLow', 
                35: 'low', 
                80: 'good', 
                100: 'veryGood'
              };

  this.messages = { veryLow: 'Very Low', 
              low: 'Low', 
              good: 'Good', 
              veryGood: 'Very Good'
            };

  this.reportStatuses = function() {
    var msg_array = [], 
        greaterThan = (this.oldLevel > this.level);

    if (greaterThan) {
      while (this.oldLevel >= this.level) {
        var msg = this.messages[this.reportStatusLevel()];
            msg += ' ('+this.oldLevel+'%)';
            msg_array.push(msg);
            this.oldLevel -= 1;
      }
    } else {
      while (this.oldLevel <= this.level) {
        var msg = this.messages[this.reportStatusLevel()];
            msg += ' ('+this.oldLevel+'%)';
            msg_array.push(msg);
            this.oldLevel += 1;
      }
    }

    return msg_array;
  };

  this.reportStatusLevel = function() {
      for (t in this.thresholds) {
        if(this.thresholds.hasOwnProperty(t)  && +this.oldLevel <= t) {
          return this.thresholds[t];
        }
      }
  };

  this.report = function() {
            var msg = this.messages[this._reportThreshold()];

            this._setAttention(msg);

            msg += ' ('+this.reportLevel()+'%)';
            return (this.level >= 0 && this.level <= 100) ? msg : '';
          };

  this.reportStaticImage = function() {
    return (this.level >= 0 && this.level <= 100) ? ('/images/health_meter/health_meter'+Math.round(this.level/2)+'.png') : ''
  };

	this.levelIsHigh = function() { return (this.level > 68 && this.level <= 100); };
	this.levelIsMedium = function() { return (this.level > 46 && this.level <= 68); };
	this.levelIsLow = function() { return (this.level >= 0 && this.level <= 46); };

  this._setAttention = function(msg) { this.attention = (msg == "Very Low") };

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t)  && +this.reportLevel() <= t) {
                          return this.thresholds[t]
                        }
                      }
                    };
};

MechStat = function() {
  this.thresholds = { 50: 'check', 100: 'good' };

  this.messages = { check: 'Check', good: 'Good' };

  this.report = function() {
            var msg = this.messages[this._reportThreshold()];
            this._setAttention(msg);

            return (this.level) ? msg : '';
  };

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t) && +this.reportLevel() <= t) {
                          return this.thresholds[t]
                        }
                      }
                    };

  this._setAttention = function(msg) { this.attention = (msg == "Check") };

  this.reportStaticImage = function() {
    if(this.messages[this._reportThreshold()] === "Check") {
      return ['/images/health_list_red.png'];
    } else {
      return ['/images/health_list_green.png'];
    }

  };

  this.reportImages = function() {
    if(this.messages[this._reportThreshold()] === "Check") {
      return ['/images/health_list_red.png'];
    } else {
      return ['/images/health_list_green.png'];
    }
  };
};

AirStat = function() {
  this.measurementName = 'Pressure: ';

  this.availableMeasurement = 50;

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t)  && +this.reportLevel() <= t) {
                          return this.thresholds[t];
                        }
                      }
                    };

  this.currentMeasurement = function() { return this.availableMeasurement * (this.level/50); };

  this.report = function() { 
    this._setAttention();
    return (this.level >= 0 && this.level <= 50) ? (this.reportLevel() + ' psi') : ''; 
  };

  this.reportStaticImage = function() {
    return (this.level >= 0 && this.level <= 50) ? ('/images/health_meter/health_meter'+this.level+'.png') : ''
  };

  this.reportStatuses = function() {
    var msg_array = [], 
        greaterThan = (this.oldLevel > this.level);

    if (greaterThan) {
      while (this.oldLevel >= this.level) {
        var msg = ' '+this.oldLevel+' psi';
            msg_array.push(msg);
            this.oldLevel -= 1;
      }
    } else {
      while (this.oldLevel <= this.level) {
        var msg = ' '+this.oldLevel+' psi';
            msg_array.push(msg);
            this.oldLevel += 1;
      }
    }

    return msg_array;
  };

 	this.getImageFun = getMeterImage;

  this._setAttention = function() { this.attention = (this.level <= 23) };
	
	this.levelIsHigh = function(){ return (this.level > 38 && this.level <= 50); };
	this.levelIsMedium = function(){ return (this.level > 23 && this.level <= 38); };
	this.levelIsLow = function(){ return (this.level >= 0 && this.level <= 23); };

};

MechStat.prototype = new Stat();
FluidStat.prototype = new Stat();
AirStat.prototype = new Stat();

