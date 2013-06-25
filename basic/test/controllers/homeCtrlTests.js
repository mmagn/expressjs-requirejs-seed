define(['should', 'controllers/homeCtrl'],
function (should, homeCtrl) {

	describe('home controller', function(){
		it('index action should return a title', function(done){

      var res = { render: function(view, model){
        model.title.should.equal('Welcome');
        done();
      }};

      homeCtrl.index({}, res);

		});
	});

});