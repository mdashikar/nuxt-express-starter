const bodyParser = require('body-parser')
const logger = require('morgan'); 
const cors = require('cors');
const mongoose = require('mongoose');
const serveStatic = require('serve-static');
const config = require('./config/secret');


// mongoose.connect(config.database, function(err){
//   if(err) console.log(err);
//   console.log('Connected to DB');
// })

module.exports = function (app, express){

    app.use(cors())
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        'extended': 'false'
    }));

    // pass the instance of our app to the routes.
    require('./routes/index.js')(app);

}