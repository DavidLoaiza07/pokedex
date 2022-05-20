import { arrPoke } from "../../utils/images/index";
import "./index.style.css";

function Footer() {
    return (
        <footer className="footer_poke">
            <h3 className="footer_title">OTHERS</h3>
            <div className="more_poke">
                {arrPoke.map((photo, index) => (
                    <figure className="poke_container" key={`photo-${index}`}>
                        <img className="other_poke" src={photo} alt="pokémon adicional  " />
                    </figure>
                ))}
            </div>
        </footer>
    );
}

export default Footer;