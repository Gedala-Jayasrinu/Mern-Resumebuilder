import PDFDocument from 'pdfkit';

export const createResume = (req, res) => {
  const { name, email, phone, education, experience, skills } = req.body;

  const doc = new PDFDocument();

  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    let pdfData = Buffer.concat(buffers);
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(pdfData),
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment;filename=resume.pdf',
    }).end(pdfData);
  });

  doc.fontSize(20).text('Resume', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`Name: ${name}`);
  doc.moveDown();
  doc.fontSize(16).text(`Email: ${email}`);
  doc.moveDown();
  doc.fontSize(16).text(`Phone: ${phone}`);
  doc.moveDown();
  doc.fontSize(16).text('Education');
  doc.fontSize(14).text(education);
  doc.moveDown();
  doc.fontSize(16).text('Experience');
  doc.fontSize(14).text(experience);
  doc.moveDown();
  doc.fontSize(16).text('Skills');
  doc.fontSize(14).text(skills);

  doc.end();
};
