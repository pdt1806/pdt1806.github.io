import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";

import TechStack from "./components/Skills";


export default function App() {
  
  return (
    <>
      <NavBar />
      <Introduction />
      
      <AboutMe />
      <TechStack />
    </>
  );
}
