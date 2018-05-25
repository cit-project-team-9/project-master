const app = require('./app');
const port = process.env.PORT || 3000;

/**
 * Starts a server and listens on port 3000
 */
app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
