export default function Pokemon({
  pokemonName = "Loading...",
  pokemonNum = "Loading...",
  pokemonType = "Loading...",
  pokemonWeaknesses = "Loading...",
  imgSrc = "Loading...",
}) {
  //generates pokemonCard using props inherited from a derived mapped state of all Pokemon
  return (
    <div className={`${pokemonType[0]}pokemonCard`}>
      <p className="thick-text">{`#${pokemonNum}`}</p>
      <img src={imgSrc} alt="Pokemon" className="cardImage" />
      <p>
        <p className="thin-text">Name:</p>
        <p className="no-margins light-box-shadow">{pokemonName}</p>
      </p>
      <p className="thin-text">Types:</p>
      <div className="d-flex justify-content-center align-items-center text-align-center">
      
        {pokemonType.map((type, index) => {
          return <div key={index} className={type + "div" + " " + "types"}><div>{type}</div> </div>;
        })}
      </div>
      <p className="thin-text">Weaknesses:</p>
      <div className="d-flex justify-content-center align-items-center text-align-center wrap">
        
        <br />
        {pokemonWeaknesses.map((weakness, index) => {
          return <div key={index} className={weakness + "div" + " " + "weaknesses"}>{weakness} </div>;
        })}
      </div>
    </div>
  );
}
