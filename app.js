express = require ('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users-routes')
const HttpError = require ( './models/http-error');
const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes)
app.use((error, req, res, next) => {
    // Check that Have the res been sent ?
    if(res.headerSent) {
        return next(error);
    }
    // Check the status and set it 
    res.status(error.code || 500);
    // Leave the message 
    res.json({message : error.message || "There some errors occured "});
})

app.listen(5000)