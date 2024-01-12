import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();
const { EXPLOAGRO_NODEMAILER_USER, EXPLOAGRO_NODEMAILER_PASS, DESTINATION_EMAIL } = process.env;

const postEAContact = async (req: Request, res: Response) => {
  try {
    const {name,email,subject,message} = req.body;
    // inicia la funcion de recibir el mensaje
    let transporter = nodemailer.createTransport({
      //options -- define los datos de conexión
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      // host: "smtp.mail.yahoo.com",
      // port: 465,
      // secure: true,
      auth: {
        user: EXPLOAGRO_NODEMAILER_USER,
        pass: EXPLOAGRO_NODEMAILER_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Desactiva la verificación del certificado
      },
    });
    // se fusionará en cada objeto de mensaje.
    let mailOptions = {
      from: EXPLOAGRO_NODEMAILER_USER,
      to: DESTINATION_EMAIL,
      subject,
      html: `<html>
	<head>
        <body>
        <h3 style="color:#9E7842">Datos del usuario:<h3>
        <p><b>Nombre:</b> ${name}.</p>
        <p><b>Correo electrónico:</b> ${email}</p>
        </br>
        <h3 style="color:#9E7842">Mensaje:</h3>
        <p>${message}.<p>
		</body>
	</head>
</html>`,
    };

    transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
      console.log("Error in sendMail callback:", error);
      if (error) {
        return res.status(500).send(error.message)
      } else {
       return res.status(200).send("it was sent satisfactorily")
      }
    });
  } catch (error) {
    console.log("Error in catch block:", error);
    if (error instanceof Error) {
      console.log(error.message);
     return res.status(500).send(error.message)
    } else {
      console.log("Unexpected error");
      return res.status(500).send("Unexpected error")
    }
  }
};

export default postEAContact;
















// import { Request, Response } from 'express';
// import nodemailer from 'nodemailer';
// import dotenv from "dotenv";
// dotenv.config();
// const { NODEMAILER_USER, NODEMAILER_PASS, DESTINATION_EMAIL } = process.env;

// const postContactMe = async (req: Request, res: Response) => {
//   try {
//     const { name, email, subject, message } = req.body;
//     // inicia la funcion de recibir el mensaje
//     let transporter = nodemailer.createTransport({
//       //options -- define los datos de conexión
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: NODEMAILER_USER,
//         pass: NODEMAILER_PASS,
//       },
//     });
//     // se fusionará en cada objeto de mensaje.
//     let mailOptions = {
//       from: NODEMAILER_USER,
//       to: DESTINATION_EMAIL,
//       subject,
//       html: `<html>
// 	<head>
//         <body>
//         <h3 style="color:#9E7842">Datos del usuario:<h3>
//         <p><b>Nombre:</b> ${name}.</p>
//         <p><b>Correo electrónico:</b> ${email}</p>
//         </br>
//         <h3 style="color:#9E7842">Solicitud:</h3>
//         <p>🍻 ${message}.<p>
// 		</body>
// 	</head>
// </html>`,
//     };

//     // transporter.sendMail(mailOptions, (error: Error, info:string) => {
//      transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => void {

//       if (error: any) {
//         return res.status(500).send(error.message)
//       } else {
//        return res.status(200).send("it was sent satisfactorily")
//       }
//     });
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//      return res.status(500).send(error.message)
//     } else {
//       console.log("Unexpected error");
//       return res.status(500).send("Unexpected error")
//     }
//   }
// };

// export default postContactMe;
