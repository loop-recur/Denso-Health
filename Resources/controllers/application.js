Controllers.application = (function() {
  var index = function() {
    return Controllers.health.index();
    //return Controllers.health.show();
  };
   
  return {index: index};
})();

