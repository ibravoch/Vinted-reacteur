import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <p>loading...</p>
  ) : (
    <div className="Offer">
      <div>
        <img src={data.product_pictures[0].url} />
      </div>
      <div>
        {" "}
        <p>{data.product_price}</p> <p>{data.product_name} </p>
        <p>{data.product_description}</p>
      </div>
    </div>
  );
};
export default Offer;
