import React from "react";

const Banneerhome04 = () => {
    return (
        <div className="stdcontainer">
            <div className="banner04">
                <h2>Une maison d'accueil</h2>
                <div className="separator01"></div>
                <p className="introtext">Nous avons conçu deux options pour répondre à vos attentes et votre disponibilité. Que vous choisissiez de profiter d'une pension complète chez nous ou de participer uniquement à nos programmes à la carte, nous nous engageons à fournir une expérience exceptionnelle. Vous êtes libres de personnaliser la durée de votre séjour selon vos besoins, sans aucune contrainte d'adhésion. </p>



                
            <div className="grid-me">
                <div className="vide"></div>
                <div className="sec01">
                    <img src="./image/beaute.JPG" style={{ zIndex: -1 }} className="standard-image" alt="personnes agées dans piscine" />
                </div>
                    <div className="sec02">
                        <div>   
                        <div className="pousseoir">
                            <h3>En internat</h3>
                            <p>
                            Shalom - Maison d'Accueil est un lieu unique où nous prenons soin des personnes âgées, en internat, dans un cadre stimulant, encourageant et personnalisé. 

                            <br/><br/>

                            L'équipe de Shalom - Maison d'Accueil est composée d'un docteur en médecine, coordonnateur des activités au niveau du Centre, également coach en <b>Nutrithérapie</b>, d'un coach en <b>Santé Bien-être</b> et d'un personnel chargé du développement psychosocial du patient en internat et de la stimulation cognitive. Shalom - Maison d'Accueil est fière de son approche innovante et idéale pour prendre soin des parents, offrant un lieu de vie chaleureux, confortable et sécurisé pour les personnes âgées, et invite les gens à découvrir leur formule en internat et à se joindre à leur famille.

                            </p>
                            <button className="mybutton01">En savoir plus</button>
                        </div>
                    </div>
                </div>

                {/* <div class="separator01 sep"></div> */}
                    
                <div className="sec03">
                    <div>
                        <div class="pousseoir">
                            <h3>En externat</h3>
                            <p>
                                Nous offrons désormais notre formule en externat pour les personnes âgées qui souhaitent rester chez elles tout en bénéficiant de nos services de qualité. Nous accueillons des personnes âgées <b>dès l'âge de 50 ans</b>, avec une équipe multidisciplinaire et conviviale pour les accompagner résidents dans leur quotidien.
                                <br/><br/>

                                Notre formule en externat convient à toutes les personnes âgées en bonne santé apparente susceptibles de prendre soins de leur physique en vue de prévenir toutes les maladies dégénératives liées à l'âge, ainsi qu'aux malades atteints d'<b>Alzheimer</b> au stade de début ou de la maladie de <b>Parkinson</b> au stade de début ou pas, et aux personnes âgées souffrant des douleurs articulaires ou de dos chroniques.

                            </p>
                            <button className="mybutton01">En savoir plus</button>
                        </div>
                    </div>        
                </div>
                <div className="sec04">
                    <img src="./image/plage.png" style={{ zIndex: -1 }} class="standard-image" alt="personnes agées avec ballon" />
                </div>
            </div>


            </div>
        </div>
    )
}

export default Banneerhome04;