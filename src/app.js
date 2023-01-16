const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3010
const cors = require("cors");
const corsOptions = {
    origin: "*"
  };
  
  app.use(cors(corsOptions));
  let allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', "*");
      res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
      res.header('Access-Control-Allow-Headers', "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      next();
    }
  app.use(allowCrossDomain);
  


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const apiActors = require('./routes/api/actorsRouter');
const apiGenres = require('./routes/api/genresRouter');
const apiMovies = require('./routes/api/moviesRouter');

//Aquí pueden colocar las rutas de las APIs


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/', apiActors )
app.use('/', apiGenres )
app.use('/', apiMovies )


//Activando el servidor desde express
app.listen(port, () => console.log(`servidor corriendo en http://localhost:${port}`));
