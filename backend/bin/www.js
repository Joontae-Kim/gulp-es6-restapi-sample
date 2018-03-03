const app = require('../app');
const port = 3000;

var server = app.listen(3030, () => {
	console.log('NPM Start')
	console.log('Example app listening on port 3030!');
});

module.exports = server;
