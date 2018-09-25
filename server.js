let http = require('http');
let path = require('path');
let fs = require('fs');
//let game = require('./scripts/server/game');

let mimeTypes = {
        '.js' : 'text/javascript',
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.png' : 'image/png',
        '.jpg' : 'image/jpeg',
        '.mp3' : 'audio/mpeg3',
        '.wav' : 'audio/wav'
    };

function handleRequest(request, response) {
    let lookup = (request.url === '/') ? '/index.html' : decodeURI(request.url);
    let file = lookup.substring(1, lookup.length);

    fs.exists(file, function(exists) {
        if (exists) {
            fs.readFile(file, function(err, data) {
                if (err) {
                    response.writeHead(500);
                    response.end('Server Error!');
                } else {
                    let headers = {'Content-type': mimeTypes[path.extname(lookup)]};
                    try {
                        response.writeHead(200, headers);
                        response.end(data);
                    } catch(error) {
                        console.log(error);
                    }
                }
            });
        } else {
            response.writeHead(404);
            response.end();
        }
    });
}

let server = http.createServer(handleRequest);
let port = 3000;
server.listen(port, function() {
    console.log('Server is listening on port:', port);
});
