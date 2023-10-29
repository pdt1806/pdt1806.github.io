import "bootstrap/dist/css/bootstrap.css";
import { hydrate, render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
