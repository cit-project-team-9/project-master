const app = require('./app');
const port = process.env.PORT || 3000;

/**
 * Starts a server and listens on port 8080
 */
app.listen(port, () => {
    console.log('Server is up on port ' + app.get('port'));
});
