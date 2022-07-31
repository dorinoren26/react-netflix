import Card from "./card";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cardsService from "../services/cardService";

const MyCards = () => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    async function getCards() {
      const { data } = await cardsService.getAll();
      setCard(data);
    }
    getCards();
  }, []);

  return (
    <>
      <div className="container">
        <h1> Who's watching?</h1>
        <br />
        <div className=" row mx-auto gap-4">
          {!cards.length ? (
            <p>No Cards..</p>
          ) : (
            cards.map((card) => <Card key={card._id} card={card} />)
          )}
        </div>
        <br />
        <div className="row">
          <Link to="create-card">
            <button className="btn btn-primary col-4 ">
              Create a new card
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyCards;
