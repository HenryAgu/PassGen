// Stylesheet
import "./App.css";

// For AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// For Copy to Clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    setPassword("Create Password");
  };

  // Generate Password
  const passwordHandler = () => {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()-_+={}[]|:'<>.? ";
    let password = "";
    const passwordlength = 16;

    // Loop for randomization
    for (let i = 0; i < passwordlength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    setPassword(password);
  };

  // For AOS animation
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Pop up section */}
      <div className="pop-up">
        {popUp ? (
          <div
            className="inner-pop"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
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
              <CopyToClipboard text={password}>
                <i class="fa-solid fa-clone" onClick={copyPasswordHandler}></i>
              </CopyToClipboard>
            </button>
          </div>
          <div className="generate">
            <button onClick={passwordHandler}>Generate Password</button>
          </div>
        </div>
      </div>
      <footer>Ⓒ Henry Agu 2022.All rights reserved.</footer>
    </>
  );
}

export default App;
