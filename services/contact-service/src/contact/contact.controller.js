import nodemailer from 'nodemailer'

export const sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Todos los campos son obligatorios',
      })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portafolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `[Portafolio] ${subject}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    res.json({ success: true, message: 'Mensaje enviado correctamente' })
  } catch (error) {
    next(error)
  }
}
