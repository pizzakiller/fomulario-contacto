const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoute = require('./routes/apiRoute')
//const contactoModel =
require('./database')
//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
 app.use('/api', apiRoute)

//inicianado el servidor
app.listen(app.get('port'), () => {
  console.log('servidor en el puerto', app.get('port'))
})