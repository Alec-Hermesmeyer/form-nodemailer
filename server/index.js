const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "*******",
        pass: "*******"
    }
})

let details = {
    from: "ahrmsmyr@gmail.com",
    to: "ahrmsmyr@gmail.com",
    subject: "test",
    text: "testing first sender"
}

mailTransporter.sendMail(details, (err)=>{
    if(err){
        console.log(err, "it has an error")
    } else{
        console.log("no error")
    }
})
