const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse URL and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle GET requests
  if (req.method === 'GET') {

    // Route: /
    if (pathname === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the Node.js HTTP Server');
    }

    // Route: /about
    else if (pathname === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>About Page</h1><p>This is a simple Node.js HTTP server.</p>');
    }

    // Route: /user
    else if (pathname === '/user') {
      const { name, age } = parsedUrl.query;

      const userData = {
        name: name || 'Unknown',
        age: age || 'Not provided'
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(userData));
    }

    // Invalid route
    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Page Not Found');
    }
  }
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

