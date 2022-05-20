import React from "react";
import Images from "../../utils/images";
import "./index.style.css";

function MainContainer() {
    return (
        <main className="container">
            <section className="card-img">
                <article className="name_type_poke">
                    <figure className="container_logo">
                    <img alt="logo" className="poke_logo" src={Images.img0} />
                    </figure>
                    <h2 className="pokemon_name" id="pokemon_name">Charizard</h2>
                </article>
                <img className="img_poke" id="img_poke" src={Images.img5} alt="Charizard" />
            </section>
            <section className="card">
                <article>
                    <p className="poke_title pokemon_index" id="pokemon_index">N°</p>
                    <span className="poke_info pokemon_index_id" id="pokemon_id">006</span>
                </article>
                <article>
                    <p className="poke_title pokemon_type" id="pokemon_type">Type</p>
                    <span className="poke_info pokemon_type_id" id="pokemon_type">Fire</span>
                </article>
                <article>
                    <p className="poke_title height">Height</p>
                    <span className="poke_info height_value" id="speed">1.7m</span>
                </article>
                <article>
                    <p className="poke_title level">Level</p>
                    <span className="poke_info level_value" id="hp">100</span>
                </article>
                <article>
                    <p className="poke_title ability">Ability</p>
                    <span className="poke_info ability_value" id="atack">Flames</span>
                </article>
                <article>
                    <p className="poke_title weight">Weight</p>
                    <span className="poke_info weight_value" id="atack">90.5Kg</span>
                </article>
            </section>
        </main>
    );
}

export default MainContainer;