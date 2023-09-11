const port = process.env.PORT || 3000

const server = http.createServer( (req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLocaleLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type' : 'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, { 'Content-Type' : 'text/plain'})
            res.end('About')
            break
        default:
            res.writeHead(404, { 'Content-Type' : 'text/plain'})
            res.end('Not Found')
            break
        }
})