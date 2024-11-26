import React from "react";


const Banneerhome03 = () => {
    return (
        <div className="stdcontainer">
            <h2>Nos formations</h2>
            <div className="separator01"></div>

            <div className="bannerhome03">
                <div className="leftpart">
                    {/* <img src="./image/mamie.jpg" alt="mamie" /> */}
                </div>
                <div className="rightpart">
                    <h3>Santé & Bien-être</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam distinctio est sit a possimus commodi similique quaerat, saepe ipsa cum itaque nostrum, repellat et. Officia modi animi suscipit iste.</p>
                    <button className="mybutton01">En savoir plus</button>
                </div>
            </div>

            <div className="bannerhome04">
                <div className="leftpart">
                    <h3>Nutrithérapie</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam distinctio est sit a possimus commodi similique quaerat, saepe ipsa cum itaque nostrum, repellat et. Officia modi animi suscipit iste.</p>
                    <button className="mybutton01">En savoir plus</button>
                 </div>
                <div className="rightpart"></div>
            </div>

            <section className="activities">
                <h2>Nos activités</h2>
                <div className="separator01"></div>
                <p className="mypara">Nous avons programmé diverses activités stimulantes et passionnantes afin de casser la routine. Ces activités sont pour le plus souvent à des fins de thérapie non médicamenteuse et pour assurer le bien-être de nos hôtes. </p>
                <div className="pictos">
                    <div className="picto">
                        <img src="./image/picto06.jpg" alt="Zumba senior" />
                        <p>Zumba senior</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto07.jpg" alt="Peinture" />
                        <p>Peinture</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto05.jpg" alt="Ballon Gym" />
                        <p>Ballon Gym</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto02.jpg" alt="Lecture" />
                        <p>Lecture</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto03.jpg" alt="Musique" />
                        <p>Musique</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto04.jpg" alt="Art culinaire" />
                        <p>Art culinaire</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto01.jpg" alt="exercices musculaires" />
                        <p>Exercices musculaires</p>
                    </div>
                    <div className="picto">
                        <img src="./image/picto08.jpg" alt="autres" />
                        <p>Et encore d'autres ...</p>
                    </div>
                </div>
            </section>

            <section className="roll-image">
                <div className="vide"></div>
                <div className="qui">
                    <div className="qui-text">
                        <h2>Un programme complet, mais pour qui ?</h2>
                        <div className="separator01"></div>
                        <ul>
                            <li className="usercheck">Toute personne à partir de 40 ans souhaitant garder une bonne forme physique et mentale </li>
                            <li className="usercheck">Toute personne désireuse de se faire soigner par la nutrithérapie</li>
                            <li className="usercheck">Les personnes qui suivent ou veulent suivre un traitement médical</li>
                            <li className="usercheck">Les personnes âgées souffrant des douleurs articulaires ou de dos chroniques</li>
                            <li className="usercheck">Les malades atteints d’Alzheimer ou de la maladie de Parkinson au stade de début ou non</li>
                            <li className="usercheck">Les personnes en convalescence, ou qui viennent sortir d'hôpital.</li>
                            <li className="usercheck">Les personnes âgées en quête de paix, de soins et d'une ambiance conviviale.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banneerhome03;