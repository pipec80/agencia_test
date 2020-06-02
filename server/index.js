const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const configs = require('./config');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));

const config = configs[app.get('env')];
app.locals.titulo = config.nombresitio;

app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
});
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes());

/**puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
    console.log('server up');
});