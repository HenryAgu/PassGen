import "./Card.css";
const Card = () => {
  return (
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
  );
};

export default Card;
