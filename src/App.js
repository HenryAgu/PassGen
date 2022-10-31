// Stylesheet
import "./App.css";

function App() {
  return (
    <>
      {/* Pop up section */}
      <div className="pop-up">
        <div className="inner-pop">
          <p>Copied!</p>
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
      </div>
      {/* Card section */}
      <div className="card">
        <div className="inner-cards">
          <div className="password">
            <span>Create Password</span>
            <button>
              <i class="fa-solid fa-clone"></i>
            </button>
          </div>
          <div className="generate">
            <button>Generate Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
