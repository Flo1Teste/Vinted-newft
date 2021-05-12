import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerVinted">
        <img></img>
        <div>
          <input type="submit" value="Articles" />
          <button>Rechercher des articles</button>
        </div>
        <div>
          <Link to="/signup">S'inscrire</Link>
          <Link to="/login">Se connecter</Link>
          <button>Vends tes articles</button>
        </div>
      </div>
      <div className="headerNavigation">
        <nav>
          <a href="">Femmes</a>
          <a href="">Hommes</a>
          <a href="">Enfants</a>
          <a href="">Maison</a>
          <a href="">A propos</a>
          <a href="">Notre plateforme</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
