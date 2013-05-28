define(['controllers/homeCtrl'],
function(homeCtrl){
	var router = {};

	router.configure = function(app){
		// routes configuration

		app.get('/', homeCtrl.index);

	}

	return router;
});
