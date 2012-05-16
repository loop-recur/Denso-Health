Stat = function() {};
Stat.prototype = {
  reportLevel: function() { return this.level; },
  update: function(num) { this.level = num; },
  attention: false
};

FluidStat = function() {
  
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

  this.report = function() {
            var msg = this.messages[this._reportThreshold()];

            this._setAttention(msg);

            msg += ' ('+this.reportLevel()+'%)';
            if(this.level >= 0 && this.level <= 100) return msg;
          };

  this.reportImage =  function() {
                  return (this.level >= 0 && this.level <= 100) ? ('/images/health_meter'+Math.round(this.reportLevel()/2)+'.png') : ''
                };

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

            if(this.level) return msg;
  };

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t) && +this.reportLevel() <= t) {
                          return this.thresholds[t]
                        }
                      }
                    };

  this._setAttention = function(msg) { this.attention = (msg == "Check") };

  this.reportImage = function() {
    if(this.messages[this._reportThreshold()] === "Check") {
      return '/images/health_list_red.png';
    } else {
      return '/images/health_list_green.png';
    }
  };
};

AirStat = function() {
  this.report = function() { if(this.level >= 0 && this.level <= 50) return this.reportLevel() + ' psi'; };

  this.reportImage = function() {
    return (this.level >= 0 && this.level <= 50) ? ('/images/health_meter'+this.level+'.png') : ''
  };
};

MechStat.prototype = new Stat();
FluidStat.prototype = new Stat();
AirStat.prototype = new Stat();

