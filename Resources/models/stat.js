Stat = function() { }
Stat.prototype.report = function() { return this.level; }
Stat.prototype.update = function(num) { this.level = num; }

FluidStat = function() { }
MechStat = function() { }
AirStat = function() { }

MechStat.prototype = new Stat();
FluidStat.prototype = new Stat();
AirStat.prototype = new Stat();

