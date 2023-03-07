import { useState } from "react";
import AboutUsPage from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import DisplayValues from "./pages/DisplayValues";
import HomePage from "./pages/home1";

function App() {
  const [Display, setDisplay] = useState("home");
  console.log("hdhdhd", Display);

  return (
    <div className="App ">
      {Display === "home" ? (
        <HomePage setDisplay={setDisplay} />
      ) : Display === "about" ? (
        <AboutUsPage setDisplay={setDisplay} />
      ) : Display === "contact" ? (
        <ContactUs setDisplay={setDisplay} />
      ) : Display === "valu" ? (
        <DisplayValues setDisplay={setDisplay} />
      ) : (
        <></>
      )}

      {/* <ContactUs /> */}
      {/* <Home /> */}
      {/* <HomePage /> */}
      {/* <AboutUsPage /> */}
    </div>
  );
}

export default App;
