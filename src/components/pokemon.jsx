export default function Pokemon({
  pokemonName = "Loading...",
  pokemonNum = "Loading...",
  pokemonType = "Loading...",
  pokemonWeaknesses = "Loading...",
  imgSrc = "Loading...",
}) {
  return (
    <div className="pokemonCard ">
      <p>{`#${pokemonNum}`}</p>
      <img src={imgSrc} alt="Pokemon" />
      <p>
        Name:
        <br />
        {pokemonName}
      </p>
      Types:
      <div className="d-flex justify-content-center align-items-center text-align-center">
      
        {pokemonType.map((type, index) => {
          return <div key={index} className={type + "div"}><div>{type}</div> </div>;
        })}
      </div>
      Weaknesses:
      <div className="d-flex justify-content-center align-items-center text-align-center wrap">
        
        <br />
        {pokemonWeaknesses.map((item, index) => {
          return <div key={index} className={item + "div" + " " + "weaknesses"}>{item} </div>;
        })}
      </div>
    </div>
  );
}
