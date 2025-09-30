const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Blog Jenkins CI/CD</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: #f4f4f9;
          color: #333;
        }
        header {
          background: #0078d7;
          color: white;
          padding: 20px;
          text-align: center;
        }
        header h1 {
          margin: 0;
          font-size: 2.5rem;
        }
        main {
          padding: 30px;
          max-width: 800px;
          margin: auto;
        }
        article {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        article h2 {
          color: #0078d7;
        }
        footer {
          margin-top: 40px;
          text-align: center;
          padding: 15px;
          background: #333;
          color: #f4f4f9;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Blog của Lê Văn Khải</h1>
      </header>
      <main>
        
      </main>
      <footer>
        <p>Xin chào Jenkins CI/CD ❤️</p>
      </footer>
    </body>
    </html>
  `);
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
