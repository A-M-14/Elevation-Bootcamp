const http = require('http');

const PORT = 3000;

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

function sendJSON(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/api/users' && req.method === 'GET') {
    sendJSON(res, 200, users);
    return;
  }

  const userIdMatch = req.url.match(/^\/api\/users\/(\d+)$/);
  if (userIdMatch && req.method === 'GET') {
    const id = parseInt(userIdMatch[1]);
    const user = users.find(u => u.id === id);
    if (user) {
      sendJSON(res, 200, user);
    } else {
      sendJSON(res, 404, { error: 'User not found' });
    }
    return;
  }

  if (req.url === '/api/users' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      let userData;
      try {
        userData = JSON.parse(body);
      } catch (err) {
        sendJSON(res, 400, { error: 'Invalid JSON' });
        return;
      }
      if (!userData.name || !userData.email) {
        sendJSON(res, 400, { error: 'Missing name or email' });
        return;
      }
      const newId = users[users.length - 1].id + 1;
      const newUser = { id: newId, name: userData.name, email: userData.email };
      users.push(newUser);
      sendJSON(res, 201, newUser);
    });
    return;
  }

  // Not found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`REST API server is listening on port ${PORT}`);
});
