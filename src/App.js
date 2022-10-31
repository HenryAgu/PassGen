// Stylesheet
import "./App.css";

// For AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// hooks
import { useState, useEffect } from "react";
function App() {
  const [password, setPassword] = useState("Create Password");
  const [popUp, setPopUp] = useState(false);

  // Hide PopUp
  const removePopUpHandler = () => {
    setPopUp(false);
  };

  // Copy Password
  const copyPasswordHandler = () => {
    setPopUp(true);
  };

  // Generate Password
  const passwordHandler = () => {};

  // For AOS animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Pop up section */}
      <div className="pop-up">
        {popUp ? (
          <div className="inner-pop">
            <p>Copied!</p>
            <i
              class="fa-sharp fa-solid fa-xmark"
              onClick={removePopUpHandler}
            ></i>
          </div>
        ) : null}
      </div>
      {/* Card section */}
      <div className="card">
        <div className="inner-cards">
          <div className="password">
            <span>{password}</span>
            <button>
              <i class="fa-solid fa-clone" onClick={copyPasswordHandler}></i>
            </button>
          </div>
          <div className="generate">
            <button onClick={passwordHandler}>Generate Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
