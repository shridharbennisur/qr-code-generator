const express = require('express');
const qr = require('qr-image');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/healthcheck', (req, res) => {
    console.log("here her")
    return res.send("sucess");
});

app.post('/generateWhatsappQR', async (req, res) => {
    try {
      const {
          message, 
          phoneNumber
      } = req.body;
  
      const formattedMessage = encodeURIComponent(message || "Hello!");
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
      const qr_png = qr.image(whatsappUrl, { type: 'png' });
        res.type('png');
        qr_png.pipe(res);

    } catch (err) {
      console.error('Error generating QR code:', err);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});