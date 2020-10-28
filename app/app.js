const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: says hello!`));

app.get("/app1", (req,res) => 
res.send(`appid: ${appid} app1 page: says hello!`));
 
app.get("/app2", (req,res) => 
res.send(`appid: ${appid} app2 page: says hello!`));
 
app.get("/admin", (req,res) => 
res.send(`appid: ${appid} ADMIN page: very few people should see this`));
 
app.listen(9999, ()=>console.log(`${appid} is listening on 9999`));
const http = require('http');

const hostname = '127.0.0.1';
const port = 9999;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
