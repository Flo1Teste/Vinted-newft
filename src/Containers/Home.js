import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div className="container">
      {data.offers.map((offer) => {
        return (
          <div className="offerContent">
            <div className="offerClick" key={offer._id}>
              <Link to={`/offer/${offer._id}`}>
                <img
                //className="avatar"
                //src={offer.owner.account.avatar.image.secure_url}
                //alt={offer.owner.account.avatar.name}
                />
                <span className="userName">{offer.owner.account.username}</span>
                <br />
                <span className="userName">{offer.owner.account.phone}</span>
                <img
                  style={{ height: 270 }}
                  src={offer.product_image.secure_url}
                  alt={offer.product_name}
                />
                <br />
                <span className="productPrice">{offer.product_price} €</span>
                <br />
                <h className="productName">{offer.product_name}</h>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
