import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

import logo from "../assets/logo.svg";
import vinted from "../assets/Vinted.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <p>Loading...</p>
  ) : (
    <div className="home">
      <div className="Header">
        <section className="top-header">
          <span className="logo">
            <img src={logo} />
          </span>

          <input
            type="search"
            placeholder="Rechercher des milliers de vêtements"
          />

          <nav>
            <ul>
              <li>S'inscire</li>
              <li>Se connecter</li>
              <li>Vends tes articles</li>
            </ul>
          </nav>
        </section>
        <span className="cover">
          <img src={vinted} />
        </span>
      </div>
      <main>
        <section className="section">
          {data.offers.map((offer, index) => {
            return (
              <Link to={`/offer/${offer._id}`}>
                <div key={index} className="product">
                  <img src={offer.product_pictures[0].url} />
                  <p>{offer.product_price} €</p>
                  <p>{offer.product_details[0].MARQUE} </p>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      );
    </div>
  );
};

export default Home;
