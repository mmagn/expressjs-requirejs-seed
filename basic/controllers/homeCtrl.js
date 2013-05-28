define([], function(){
  var homeCtrl = {};

  homeCtrl.index = function(req, res){
    res.render('index', { title: 'Welcome' });
  };

  return homeCtrl;
});
