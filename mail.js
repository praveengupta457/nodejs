var nodemailer = require('nodemailer');
// const emails=['praveengupta221715@gmail.com','raveengupta221716@gmail.com','praveen.gupta.dypimr@gmail.com','impraveen540@gmail.com']
var transport= nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:true,
    // requireTLS:true,
    auth:{
        user:'praveengupta221715@gmail.com',
        pass:''
    }
});

var mailOption={
    from:'praveengupta221715@gmail.com',
    to:'praveengupta221715@gmail.com',
    subject:'demo',
    text:'helllo from some where'
}
const info=transport.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log("email sent",info.response)
    }
})