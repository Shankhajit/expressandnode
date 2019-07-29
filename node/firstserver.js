var httpServer = require('http')
var url=require('url')


var myServer=httpServer.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('<h1>Hello from node http!!!!</h1>')
    response.write('<br><br>')
    response.write('new line')
    console.log('##########################################')
   var myUrl=url.parse(request.url,true).query
   
   var receivedName=myUrl.name
   var receivedLocation=myUrl.location
   console.log(receivedName+" from "+receivedLocation)
   // console.log(response)
    //console.log(request)
    console.log('##########################################')
    response.write('<br><br>')
    response.write("NAME: "+receivedName)
    response.write('<br><br>')
    response.write("LOCATION: "+receivedLocation)

    response.end()
})
myServer.listen(1234)
