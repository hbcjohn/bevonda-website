const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8085;

// Middleware
app.use(cors());
app.use(express.json());

// Clean URL support - try .html extension before static middleware
// e.g. /products/ginger-beer serves /products/ginger-beer.html
const PROJECT_ROOT = __dirname;
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  if (req.path.startsWith('/api/') || req.path.includes('.')) return next();
  
  const htmlPath = path.join(PROJECT_ROOT, req.path + '.html');
  if (fs.existsSync(htmlPath)) {
    res.type('html').sendFile(htmlPath, (err) => {
      if (err) {
        console.error('sendFile error:', err.message);
        // Fallback: stream the file manually
        try {
          const stream = fs.createReadStream(htmlPath);
          res.type('html');
          stream.pipe(res);
        } catch(e) {
          next();
        }
      }
    });
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname)));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'ashlei@bevonda.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Bevonda server running on port ${PORT}`);
});
