const http =require("node:http");
const server=http.createServer((request, response)=>{
response.writeHead(200);
response.end("hiiiiiiiiiiiiiiiiiiiiiiiiii ");
console.log(request,"request")

})
server.listen(3000, ()=>{
    console.log("server running")
});
