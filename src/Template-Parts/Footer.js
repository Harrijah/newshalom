import React from "react";

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-info">
                <h2>Shalom - Maison d'accueil</h2>
                <p>
                    Offrez à vos parents une vie confortable, sûre et stimulante avec Shalom - Maison d'Accueil. Nous sommes fiers d'offrir une approche innovante pour améliorer la qualité de vie de nos résidents âgés. Grâce à notre expertise et au programme que nous proposons, vos parents bénéficieront d'un suivi médical et d'un accompagnement personnalisé pour prévenir les maladies dégénératives liées à l'âge. Rejoignez notre famille chez Shalom - Maison d'Accueil pour offrir à vos proches le meilleur de des soins, et profitez de la tranquillité d'esprit en sachant que vos parents sont entre de bonnes mains.
                </p>
            </div>
            <div className="footer-menu">
                <h3>Rubriques</h3>
                <ul className="footer-list">
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Internat</a></li>
                    <li><a href="">Externat</a></li>
                    <li><a href="">A propos de nous</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="rs">
                    <a href="https://www.facebook.com/profile.php?id=100064164513757" className=""><i className="fab fa-facebook myfb"></i></a>
                    <a href="#" className=""><i className="fab fa-linkedin myli"></i></a>
                </div>
            </div>
            <div className="footer-contact">
                <h3>Nous trouver :</h3>
                <ul className="contact-list">
                    <li><u>Adresse</u> : FKT ‘Akany Sambatra’ Itaosy </li>
                    <li><u>Mail</u> : contact@shalom.mg </li>
                    <li><u>Téléphone</u> : +261 (0)34 38 129 35</li>
                </ul>
            </div>
        </div>
    );
}


export default Footer;