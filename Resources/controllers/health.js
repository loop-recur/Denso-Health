Controllers.health = (function() {

  var index = function() {
    return Views.health.index();
  };
   
  var show = function() {
    return Views.health.show();
  };

  return {index: index, show: show};
})();
