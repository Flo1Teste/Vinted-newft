import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      // définir le token et l'enregistrer dans un cookie
      const token = response.data.token;

      if (response.data.token) {
        setUser(response.data.token);
        // rediriger vers la page Home mais ne fonctionne pas ??????
        history.push("/");
      }
    } catch (error) {
      if (error.message.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="SignupForm">
        <h2>Se Connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="inputEmail"
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
          />
          <input
            className="inputPassword"
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Mot de passe"
          />
          <span>{errorMessage}</span>
          <input
            className="inputSubmit"
            value="Se connecter"
            onClick={handleSubmit}
            type="submit"
            placeholder="Se connecter"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
