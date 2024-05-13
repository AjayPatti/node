const http = require('http');
const fs = require('fs');
const url =require('url');
const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    const log = `${Date.now()} :  ${req.url}  New Req Recevied \n`;
    const myUrl =url.parse(req.url ,true);
    fs.appendFile('log.txt', log, (err) => {
      switch (myUrl.pathname) {
              case '/about':
                            const resp =myUrl.query.serach;
                            console.log(resp)
                            
                            res.end("Hello  world");

                            break;
      
              default:
                            res.end("Hello  default");
                            break;
      }
        
    });
});

myServer.listen(8000, () => console.log('Server started'));
