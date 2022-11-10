const nodemailer = require("nodemailer")

const sendEmail= async options=>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f418fdead66a24",
          pass: "9a648f95fe0570"
        }
      });
      const mensaje={
        from: "Comfort Life Store <conforlife@conforlife.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;