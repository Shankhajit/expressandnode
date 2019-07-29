var httpServer = require('http')
var file=require('fs')
var myServer=httpServer.createServer((request,response)=>{

    file.readFile('hello1.txt',function(error,data){

        if(error){
        console.log(error);
        throw error}
        var fileContent=data
       console.log(data.toString());
        file.writeFile('hello3.txt',fileContent,function(error){
            console.log(error)
        })
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write('<h1>copy done</h1>')
        response.write('<h3><p>'+data+'</p></h3>')
        response.end();
    })
    
}).listen(1111)