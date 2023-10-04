 var fs= require('fs')
// creating  a new file
fs.appendFile('new.txt','this is a new file',function(err){
    if (err){
        console.error(err);
        console.log('file is created');
    }
})

// writing the text to the file (this method also replaces the specific content form the file)

// fs.writeFile('new.txt','this is writtten text \n',function(err){
//     console.error(err)
//     console.log("content written")
// })

//this method uses to update the new text to the file (this does not replaces the pre-text)

// fs.appendFile('new.txt','this is updated text 2 \n',function(err){
//     if (err) throw err;
//     console.log('updated')
// })


fs.appendFile('new2.txt','this is a new file',function(err){
    if (err){
        console.error(err);
        console.log('file is created');
    }
})
// the unlink method is use to delete the file

fs.unlink('new2.txt',function(err){
    if(err) throw err;
    console.log("file is dele")
})

