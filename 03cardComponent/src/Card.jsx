import propic from "./assets/propic.png";

function Card() {
  return (
    <div className="card">
      {/* <img src="http://via.placeholder.com/150" alt="Profile Picture" /> */}
      <img src={propic} alt="Profile Picture" />
      <h2 className="card-title">DecodeNight</h2>
      <p className="card-text">
        I am a web developer. I love to code. React is my favorite framework.
      </p>
    </div>
  );
}

export default Card;
