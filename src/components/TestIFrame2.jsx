// import PDFComp from "./PDFComp";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const TestIFrame2 = () => {
  function OfficeViewer({ fileUrl }) {
  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;
  
  return (
    <iframe 
      src={viewerUrl}
      width="100%" 
      height="600px"
      frameBorder="0"
    />
  );
}
  return (
    <>
      <div>TestIFrame2</div>
     {/* <PDFComp/> */}
    </>
  );
};

export default TestIFrame2;
