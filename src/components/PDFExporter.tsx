import jsPDF from 'jspdf';

export const exportToPDF = (content: string) => {
  const doc = new jsPDF();

  // Split content into lines if needed
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    doc.text(line, 10, 10 + (index * 10)); // Adjust Y position for each line
  });

  // Save the PDF file
  doc.save('report.pdf');
};
