const nodemailer  = require('nodemailer')
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,USER_GOOGLE,TYPESEND}=process.env



const sendMail = async (email,code)=>{
    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
        client.setCredentials({
            refresh_token : GOOGLE_REFRESH
        })

       const accesToken = client.getAccessToken()

       const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:USER_GOOGLE,
                type:TYPESEND,
                clientId:GOOGLE_ID,
                clientSecret:GOOGLE_SECRET,
                refreshToken: GOOGLE_REFRESH,
                accesToken:accesToken

            },
            tls : {
                rejectUnauthorized : false
            }
       })

       const mailOptions = {
        from:USER_GOOGLE,
        to: email,
        subject : 'Verify itineray Jonas account',
        html : `<div></div>`
       }

       await transport.sendMail(mailOptions,(err,res)=>{
        if(err){
            console.log(err)

        }else{
            console.log(`checked mail`)
        }
       })

}

module.exports = sendMail