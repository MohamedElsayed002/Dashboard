import nodemailer from 'nodemailer'


export const sendEmail = async (req,res) => {



    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mohamedelsayed20258@gmail.com',
            pass: 'bchympwvqgqfxjgq'
        }
    });

    let info = await transporter.sendMail({
        from: '"Mohamed Elsayed 👻" <mohamedelsayed20258@gmail.com>', // sender address
        to: "mohamedelsayed20258@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

}