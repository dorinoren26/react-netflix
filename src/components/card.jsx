import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <>
      <div className="card-style container" style={{ width: "18rem" }}>
        <img src={bizImage} className="card-img-top" alt={bizName} />
        <div className="card-body">
          <h3 className="card-title">{bizName}</h3>
          <p className="card-text">{bizDescription}</p>

          <ul className="list-group list-group-flush">
            <div>{bizAddress}</div>
            <div>{bizPhone}</div>
          </ul>
          <button className=" btn-primary btn-card ">
            <Link to={`/my-cards/edit/${_id}`} className="card-link">
              edit
            </Link>
          </button>
          <button className=" btn-primary btn-card ">
            <Link to={`/my-cards/delete/${_id}`} className="card-link">
              delete
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
