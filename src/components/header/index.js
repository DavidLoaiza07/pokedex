import React from "react";
import Images from "../../utils/images";
import "./index.style.css";

function Header() {
    return (
        <header className='header'>
            <nav>
                <section><img className="img_logo" src={Images.img1} alt="Home" /></section>

                {/* <form id="pokeForm">
                    <input id="myInput" type="text" name="myPokemon"
                        placeholder="Buscar Pokemon..." id="searchPokemon" className="datoInput" />
                    <input type="submit" id="myButton" value="Buscar" onClick="" />
                </form> */}
            </nav>
        </header>
    );
}

export default Header;