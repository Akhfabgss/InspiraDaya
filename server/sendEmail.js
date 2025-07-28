import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Karena __dirname tidak tersedia di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-pdf', async (req, res) => {
  const { email } = req.body;
  console.log('Menerima request dari:', email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bagasakhfa02@gmail.com',
      pass: 'arez pryv hbpj vxen',
    },
  });

  // ubah dibagian sini
  const mailOptions = {
    from: 'bagasakhfa02@gmail.com',
    to: email,
    subject: 'Terima kasih telah subscribe!',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #00359C;">Halo!</h2>
        <p>Terima kasih telah subscribe ke <strong>Inspira Daya</strong> 🎉</p>
        <p>Berikut kami kirimkan file pricelist dalam bentuk PDF:</p>
        <br>
        <p>Salam hangat,<br><strong>Tim Inspira Daya</strong></p>
      </div>
    `,
    attachments: [
      {
        filename: 'pricelist.pdf',
        path: path.join(__dirname, 'pdf', 'pricelist.pdf'),
        contentType: 'application/pdf',
        contentDisposition: 'inline' 
      },
    ],
  };


  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
