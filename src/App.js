import React from "react";
import MainContainer from "../src/components/cardContainer/index";
import Header from "../src/components/header/index";
import './App.css';
import Footer from "./components/footer";
import './normalize.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContainer />
            <Footer />
        </div>
    );
}
export default App;
