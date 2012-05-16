HealthItem = function(opts) {
  this.title = opts.title;
  this.stat = eval('new ' + opts.type);
  this.image = opts.image;
};

