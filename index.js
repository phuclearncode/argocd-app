const http = require('http');
const port = process.env.PORT || 3000;
// const customHeader = process.env.CUSTOM_HEADER || 'Default Header Value';
const server = http.createServer((req, res) => {
const customHeader = process.env.CUSTOM_HEADER || 'Default Header Value';
const msg = 'Fresher DevOps FHN.NGT!, Happy Coding Vibe\n'

  res.statusCode = 200;

  res.setHeader('X-Custom-Header', customHeader); // Set the custom header
  res.end(`Welcome to My App!\n\n${msg}\nCustom Header: ${customHeader}\n`);
  // res.end(`Welcome to My Node.js App!\nCustom Header: ${customHeader}\n`);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
