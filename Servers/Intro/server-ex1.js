
const http = require('http');

const PORT = 3000;


const server = http.createServer((req, res) => {
	console.log(`${req.method} ${req.url}`);

	let status = 200;
	let message = '';

	if (req.method === 'GET') {
		if (req.url === '/') {
			message = 'Welcome to my server!';
		} else if (req.url === '/about') {
			message = 'This is the about page';
		} else if (req.url === '/contact') {
			message = 'Contact: asihagever@gmail.com';
		} else {
			status = 404;
			message = '404 - Page not found';
		}
		res.writeHead(status, { 'Content-Type': 'text/plain' });
		res.end(message);
	}
});

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});



