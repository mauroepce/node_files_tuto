const http = require("http")

//Create server response

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to my website")
    }
    if(req.ul === "/about") {
        res.end("This is a short history about us")
    }
    res.end(
        `
        <h1>Oops!</h1>
        <p>We can´t find the page you´re looking for</p>
        <a href="/">back home</a>
        `
    )
})

server.listen(5000)