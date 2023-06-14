const express = require('express');
const html_to_pdf = require('html-pdf-node');

const port = process.env.PORT || 3000;

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    return res.json({usuario: 'Cleber Leonardo'})
});

server.post('/conversor', async (req,res) => {
    const html = req.body.html;

    let options = { format: 'A4' };

    let file = { content: "<h1>Welcome to html-pdf-node</h1>" };

    try {
        html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
            return res.json({ConvertedString: pdfBuffer.toString('base64')});
          });
    
        //res.set('Content-Disposition', 'attachment;filename="converted.pdf"');
        //res.set('Content-Type', 'application/pdf');
        //console.log(pdfBuffer.toString('base64'));
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to convert HTML to PDF' });
      }

});


server.listen(port, () => {
    console.log('Servidor funcionando...')
});