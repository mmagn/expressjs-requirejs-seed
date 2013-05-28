define(['express', 'module', 'path', 'router'],
function (express, module, path, router) {
  var filename = module.uri;
  var dirname = path.dirname(filename);

  var app = express();

  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', dirname + '/views');
    app.set('view engine', 'hjs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(require('less-middleware')({ src: dirname + '/public' }));
    app.use(express.static(path.join(dirname, 'public')));
  });

  app.configure('development', function(){
    app.use(express.errorHandler());
  });

  router.configure(app);

  return app;
});