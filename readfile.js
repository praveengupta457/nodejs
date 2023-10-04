var fs= require("fs");

fs.readFile('i questions.txt', function(err,data){
    if (err){
        return console.error(err);
    }else{
        console.log("the data of the file is: ",data.toString());
    }
});