import React, { useEffect, useState } from "react";
import Navigation from "../Template-Parts/Navigation";

const Banneerhome01 = () => {

    /* -------------------------------- 
    --------------- variables ----------
    --------------------------------- */
    const [contentSlider, setContentSlider] = useState('');
    const [currentSlider, setCurrentslider] = useState(0);
    const [leftSlider, setLeftSlider] = useState(1);
    const [rightSlider, setRightSlider] = useState(2);

    const actdb = [
        {
            id: '00',
            img: "../image/gato fruit.jpg",
            title: 'Art culinaire',
            text: 'Nous offrons une alimentation adaptée par la Nutrithérapie (ou en prise en charge nutritionnelles pour les internats)',
        },
        {
            id: '01',
            img: "../image/lit.jpg",
            title: 'Pensionnat',
            text: 'Shalom - Maison d\'Accueil est un lieu unique où nous prenons soin de nos résidents âgés dans un cadre stimulant, encourageant et personnalisé.',
        },
        {
            id: '02',
            img: "../image/gym.jpg",
            title: 'Gym douce',
            text: 'Nous proposons plusieurs activités physiques comme la gymnastique douce favorisant un renforcement musculaire adéquat et le bon maintien de l’équilibre.',
        },
        {
            id: '03',
            img: "../image/atelier.jpg",
            title: 'Ateliers et jeux',
            text: 'Nous organisons différents jeux collectifs de stimulation et d’animations qui seront des moyens de rencontre et d’ouverture.',
        },
    ];

    /* -------------------------------- 
    --------------- fonctions ----------
    --------------------------------- */
    const listofact = () => {
        let templist = Array.from(actdb) && actdb
            // .filter((activity) => Number(activity.id) == leftSlider || Number(activity.id) == currentSlider || Number(activity.id) == rightSlider)
            .map((activity, index) => (
                <div className="slidercontainer">
                    <div key={index} className={
                        Number(activity.id) == leftSlider ? 'gauche' :
                        (Number(activity.id) == currentSlider ? 'centre' :
                        (Number(activity.id) == rightSlider ? 'droite' : 'hideme'))
                    }>
                        <div className={"mycontent "}>
                            <img src={activity.img} alt="" />
                            <div className="pplimgright">
                                <div className="slidertxt">
                                    <div className="slidercontent">
                                        <h3>{activity.title}</h3>
                                        <p>
                                            {activity.text}
                                        </p>
                                        <button className="mybutton01">En savoir plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        setContentSlider(templist);
    }
    // const displaySlider = () => {
    //     setContentSlider(
    //         <div className="mycontent">
    //             <img src={actdb[currentSlider].img} alt="" />
    //             <div className="pplimgright">
    //                 <div className="slidertxt">
    //                     <div className="slidercontent">
    //                         <h3>{actdb[currentSlider].title}</h3>
    //                         <p>
    //                             {actdb[currentSlider].text}
    //                         </p>
    //                         <button className="mybutton01">En savoir plus</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
        
    // }

    const slidertimer = () => {
        setTimeout(() => { 
            setLeftSlider(((currentSlider)) % actdb.length);
            setCurrentslider((currentSlider + 1) % actdb.length);
            setRightSlider((currentSlider  + 2) % actdb.length);
        }, 5000);
    }


    /* -------------------------------- 
    --------------- logiques ----------
    --------------------------------- */
    useEffect(() => {
    }, []);

    useEffect(() => {
        // displaySlider();
        console.log('leftSlider = ' + leftSlider + ' // currentSlider  = ' + currentSlider + '// rightSlider = ' + rightSlider);
        console.log(currentSlider);
        listofact();
        slidertimer();
    }, [currentSlider]);

    return(
        <div className="homefirst">
            <div className="testimg">
                <img src="../image/pplimg.JPG" alt="" />
            </div>
            
            <div className="homebackground">
                <Navigation />
                <div className="titleban">
                    <h1>Shalom</h1>
                    <h2>Maison d'Accueil</h2>
                </div>
                <div className="slogan">
                    <h3>"Vieillir en beauté et en bonne santé"</h3>
                </div>
            </div>

            <div className="pplslider">
                { contentSlider }
            </div>
        </div>
    )
}

export default Banneerhome01;