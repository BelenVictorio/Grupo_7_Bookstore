require("dotenv").config();
const sgmail = require("@sendgrid/mail");

sgmail.setApiKey(process.env.SENDGRID_API_KEY);


const sendMail = async(msg) =>{

try{
   await sgmail.send(msg);
   console.log("Message sent successfully");
    }catch(error){
        console.error(error);
        if(error.response){
        console.error(error.response.body)
    }
}
};
sendMail({
    to
})
