const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../../database/models');
let moment = require('moment');
const nodemailer = require("nodemailer");
const { transporter } = require("../../helpers/transporter");



module.exports={

check: async (req, res) => {
    console.log(req.body)
    try {
      let login = await db.User.findOne({
          where : {
            email : req.body.email
          }
      })
      let response ;
            if(login){
                response = {
                    ok: true,
                    data : true,
                    msg: "El mail es valido"
                  }
                  return res.status(200).json(response)
                }else{
                    response ={
                    ok: true,
                    data: false,
                    msg: "El mail no es valido"
                    }
                    return res.status(200).json(response)
                }
           
    } catch (error) {
      console.log(error)
      return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || 'Comuníquese con el administrador del sitio'
      })
    }
  },
  sendMail: async (req, res) => {
    // create reusable transporter object using the default SMTP transport
    try {
      let { email, num } = req.body
      // send mail with defined transport object
       await transporter.sendMail({
        from: '<damian.fernandez.dev@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Verificacion de mail", // Subject line
        html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
         <tr>
           <td>
                   <h2>Bienvenido a Paginas Bellas</h2>
                   <h5>Tu codigo de Validacion es:</h5>
           </td>
         </tr>
         <tr style="width: 150px;
         height: 60px;
         background: green;
         display: flex;
         align-items: center;
         margin: auto;
         color: white;
         border-radius: 10px;
         border: 1px solid gray;">
           <td style="margin:0 auto;">
               <h1 >${num}</h1>
           </td>
         </tr>
       </table>`, // html body
      });
      let response = {
        ok:true,
        meta : {
          status : 500,
        },
        url : getUrl(req),
        msg : `el mail se envio correctamente a ${email}`
      }
      return res.status(200).json(response);
    } catch (error) {
      let response = {
        ok: false,
        meta: {
            status: 500,
        },
        url: getUrl(req),
        msg: error.messaje ? error.messaje : "comuniquese con el administrador"
    }
    return res.status(500).json(response);    }
  }
}