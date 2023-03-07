import React from 'react'
import bg1 from '../assets/radhaKrishna.jpeg'
import bg2 from '../assets/narshima.jpeg'
import bg3 from '../assets/shiva.jpeg'
import img from '../assets/gulal.jpeg'
import img1 from '../assets/lath.jpeg'
import img2 from '../assets/rang.jpeg'
import img3 from '../assets/phul.jpeg'



const what1="In the Braj region of India, where the Hindu deities Radha and Krishna grew up, the festival is celebrated until Rang Panchmi in commemoration of their divine love for each other. The festivities officially usher in spring, with Holi celebrated as a festival of love.[12][34] Garga Samhita, a puranic work by Sage Garga was the first literature to mention the romantic description of Radha and Krishna playing Holi.";
const what2="There is a symbolic legend to explain why Holi is celebrated as a festival of triumph of good over evil in the honour of Hindu god Vishnu and his devotee Prahlada.The Holika bonfire and Holi signifies the celebration of the symbolic victory of good over evil, of Prahlada over Hiranyakashipu, and of the fire that burned Holika.[25]"
const what3="The legendary significance of Holi is linked to Shiva in yoga and deep meditation. Goddess Parvati wanting to bring back Shiva into the world, seeks help from the Hindu god of love called Kamadeva on Vasant Panchami. The love god shoots arrows at Shiva, the yogi opens his third eye and burns Kama to ashes. This upsets both Kama's wife Rati (Kamadevi) and his own wife Parvati. Rati performs her own meditative asceticism for forty days. "
function Avatar(props) {
  return (
   <>
    <div className='what' id="what" style={{width:props.width}}>
    <h3>{props.title}</h3>
    <p>{props.what}    <a href='https://en.wikipedia.org/wiki/Holi#Cultural_significance' style={{fontSize:"15px", textDecoration:"none", color:"blue"}} target={"blank"}>Full Reading</a></p>
    <img src={props.img} alt="bg" />
  </div>
    
    </>
  );
}

function Celebrations(props){
  return(
    <>
    <div className="home4" id="brands">
        <div>
          <h1>Celebrations</h1>

          <article>
          
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
            <a href="https://www.india.com/travel/articles/8-types-of-holi-that-is-celebrated-in-india-and-their-cultural-significance-5289459/" target="blank"><img src={img} alt="Gulal Ki Holi" /></a>
  
          
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
            <a href="https://www.india.com/travel/articles/8-types-of-holi-that-is-celebrated-in-india-and-their-cultural-significance-5289459/" target="blank"><img src={img1} alt="Lath Mar" /></a>
             
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
            <a href="https://www.india.com/travel/articles/8-types-of-holi-that-is-celebrated-in-india-and-their-cultural-significance-5289459/" target="blank"><img src={img2} alt="Rang PAnchmi" /></a>
           
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
            <a href="https://www.india.com/travel/articles/8-types-of-holi-that-is-celebrated-in-india-and-their-cultural-significance-5289459/" target="blank"><img src={img3} alt="Phulo Ki Holi" /></a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}


export default function Home() {

  return (
    <>
      <div className="home" id='home'>
      <main>
      <h3>Happy Holi 2K23</h3>
        <p>A very Happy And Prosperious Holi You All 😁😊</p>
      </main>
      </div>
      <div>
     <h1>Cultural Sgnificance</h1>
     <div className='culture'>
      <Avatar what={what1} img={bg1} title="Radha Krishna" width="80%"/>
      <div className="item1">
     <Avatar what={what2} img={bg2} title="Vishnu" width="90%"/>
      </div>
      <div className="item2">
     <Avatar what={what3} img={bg3} title="Kama and rati" width="97%" />
      </div>
     </div>
     </div>

     <div className="glimpse">
    <Celebrations/>
     </div>
    </>
  )
}
