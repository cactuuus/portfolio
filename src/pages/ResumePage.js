import { Document, Page, pdfjs } from "react-pdf";
import { useWindowDimensions } from "react-native-use-dimensions";
import "react-pdf/dist/Page/TextLayer.css";
import resume from "../resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ResumePage = () => {
  const windowWidth = useWindowDimensions().width;
  let width;

  if (windowWidth < 550) {
    width = windowWidth * 0.95;
  } else if (windowWidth < 800) {
    width = 530;
  } else if (windowWidth < 1000) {
    width = 700;
  } else {
    width = 900;
  }

  return (
    <main id="resume-container">
      <div className="text-box new-tab-btn">
        <a href={resume} rel="noreferrer" target="_blank">
          open in a new tab
        </a>
      </div>
      <article id="resume">
        <Document
          file={resume}
          error="failed to load file, try downloading it instead."
        >
          <Page pageNumber={1} renderAnnotationLayer={false} width={width} />
        </Document>
      </article>
    </main>
  );
};

export default ResumePage;
