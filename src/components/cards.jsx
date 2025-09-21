const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <h4 className="card-subtitle">{props.genre}</h4>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Info
        </a>
      </div>
    </div>
  );
};


export default Card;
