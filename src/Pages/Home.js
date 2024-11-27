import React from "react";
import Banneerhome02 from "../Components/Banneerhome02";
import Banneerhome01 from "../Components/Banneerhome01";
import Banneerhome03 from "../Components/Banneerhome03";
import Banneerhome04 from "../Components/Banneerhome04";
import Footer from "../Template-Parts/Footer";

const Home = () => {
    return (
        <>
            <Banneerhome01 />
            <Banneerhome02 />
            <Banneerhome03 />
            <Banneerhome04 />
            <Footer />
        </>
    )
}

export default Home;