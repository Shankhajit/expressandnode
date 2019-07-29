var file=require('fs')
file.readFile('hello1.txt',function(error,data){

    if(error){
    console.log(error);
    throw error}
    var fileContent=data
   console.log(data.toString());
    file.writeFile('hello2.txt',fileContent,function(error){
        console.log(error)
    })

})