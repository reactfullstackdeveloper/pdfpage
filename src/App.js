import "./styles.css";
import PDF from "./pt.pdf";

export default function App() {
  return (
    <div className="App">
      {/* <embed src={PDF} type="application/pdf" height={800} width={500} /> */}
      <iframe src={PDF} title="fra" frameborder="0"></iframe>
    </div>
  );
}
