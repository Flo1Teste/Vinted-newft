import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

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

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offerView">
      <div className="offerView-1">
        <img src={data.product_image.secure_url} alt={data.product_name} />
      </div>
      <div className="offerView-2">
        <span>{data.product_price}</span>
        <h4>{data.product_name}</h4>
      </div>
    </div>
  );
};

export default Offer;
