const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../../database/models');
let moment = require('moment');
const nodemailer = require("nodemailer");
const {google}= require('googleapis');
const { transporter } = require("../../helpers/transporter");
/* Credenciales */
const CLIENTD_ID ="613236988247-neqcmf25pga52s7trqj8mns3486nfv34.apps.googleusercontent.com";
const CLIENT_SECRET="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";
const CLIENT_URI ="https://developers.google.com/oauthplayground";
const REFRESH_TOKEN="1//04tUpz9zcgex2CgYIARAAGAQSNwF-L9IrRUA8NeQ5g1QYVsvs5PuSNOzQ_33_iGtNajK4EdF4kVkK_Rp-hotsMgDnnR7lYhdTQjc";
 
const oAuth2Client = new google.auth.OAuth2(
  CLIENTD_ID,
  CLIENT_SECRET,
  CLIENT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  
}
        


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
    try {
      const accessToken = await oAuth2Client.getAccessToken()
      const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              type: "OAuth2",
              user: "damian.fernandez.dev@gmail.com",
              clientId: CLIENTD_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken
          },
      });
      const mailOptions = {
          from: "Bienvenidos A Paginas Bellas <damian.fernandez.dev@gmail.com>",
          to:"",// poner el email  que vas a registrar 
          subject: "Te Registraste con exito",
          html: "contentHtml"
      };

      const result = await transporter.sendMail(mailOptions);
      return result;
  } catch (error) {
      console.log(error)
  }
  sendMail()
      .catch((error) => console.log(error.message));
}}