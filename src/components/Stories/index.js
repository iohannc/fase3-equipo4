import React from "react"; // Components
import CatTitle from "../Title"
import {
  //StoriesS,
  SideHistories
} from "./Stories.styles";

// import PropTypes from 'prop-types';
import ShowStories from './ShowStories';


const Stories = () => {
  
  const newHistories = [
    {
      "_id": "614811fdbda6bed2a49738fc",
      "titulo": "Canal perdido de youtube",
      "texto": "A mediados del 2009 me encontraba con mi familia, más especificamente, mi hermana y mi cuñada, utilizando YouTube e indagando en los vídeos paranormales. Era la época dónde todo eso estaba en alza, e... "
    },
    {
      "_id": "614811fdbda6bed2a49738e8",
      "titulo": "La estatua del payaso",
      "texto": "María Luisa llegó a la casa del doctor Reyes y su esposa a eso de las 7 de la noche. Había sido contratada para cuidar los dos hijos de la pareja mientras ellos cenaban en un lujoso restaurante de la... "
    },
    {
      "_id": "614811fdbda6bed2a49738fa",
      "titulo": "La cosa",
      "texto": "Ted Martin y Sam Miller eran buenos amigos. Ambos pasaban mucho tiempo juntos. En esa noche en particular estaban sentados sobre una valla cerca de la oficina de correos hablando sobre nada en particular. Había un campo de nabos enfrente de la carretera. De repente vieron algo arrastrarse fuera del campo y ponerse en pie. Parecía un hombre, pero en la oscuridad resultaba difícil saberlo a ciencia cierta. Luego desapareció. Pero pronto apareció de nuevo. Se acercó hasta la mitad de la carretera, en ese momento se dio la vuelta y regresó al campo. Después salió por tercera vez y se dirigió hacia ellos. Llegados a ese punto Ted y Sam sentían miedo y comenzaron a correr. Pero cuando finalmente se detuvieron, pensaron... "
    }, 
    {
      "_id": "614811fdbda6bed2a497390e",
      "titulo": "I was a taxi driver 20 years ago and there's one passenger I will never forget\n",
      "texto": "My name is Philip but my friends call me Phil or Master P as I was known back then. Yeah, I know it’s the name of a famous rapper but I had another friend who went by Mr. T. It was kind of our stick. But this story isn’t about corny nicknames. It’s about a strange girl that I picked up 20 years ago and why I can’t ever forget about her.\n\nI was 28 years old and had been driving taxis for 7 years. It was supposed to be a part-time gig until I graduated college. Well, graduation came and went and I couldn’t find another job, so I decided to stick with it. Over the course of those 7 years, I met my fair share of weirdos, drunks, prostitutes, fellow late night workers, and an assortment of other creatures who... "
    },
    {
      "_id": "614811fdbda6bed2a4973903",
      "titulo": "El destripador rojo",
      "texto": "Chikatilo o el ‘El destripador rojo’, es el mayor asesino en serie de la historia de la Unión Soviética. Nacido en octubre de 1936, fue conocido por cometer asaltos sexuales, asesinatos y mutilaciones a mujeres y niños entre 1978 y 1990. El asesino confesó al menos 56 de los homicidios y en abril de 1992 fue juzgado por 53 de ellos. Tras ser condenado y sentenciado por 52 muertes, fue ejecutado en 1994. \nAndréi en su infancia era introvertido, inseguro y acomplejado por su miopía. Tenía una especial timidez con las mujeres, algo que le pasó factura en una relación adolescente, la cual se rompió por su impotencia sexual.\nAños después, tras graduarse como maestro comenzó a sentirse atraído por los menores... "
    },
    {
      "_id": "614811fdbda6bed2a497390c",
      "titulo": "Have You Ever Wondered What's Inside Those Ugly Buildings Alongside The Highway?",
      "texto": "In high school, we learned that stories have a beginning, middle, and end. Our teachers told us that at the end of a story, there’s a resolution: a lesson that can be learned, or a meaning that can be analyzed.\n\nThis isn’t one of those stories.\n\nThis is just a few hours from a single night in the life of my high school friends and I, a night when we bumped into something that I still don’t understand, and probably never will.\n\nDriving through rural America, you’ll see a lot of buildings that don’t seem to have a purpose. Surrounded by dead fields or gravel parking lots, they just blend into the landscape. The structures themselves are nothing special: concrete silos, corrugated warehouses, low brick... "
    },
    {
      "_id": "614811fdbda6bed2a49738e4",
      "titulo": "La leyenda de las gemelas",
      "texto": "Les preparó el almuerzo y salieron a la calle apresuradas. Como cada día, llevaba a sus hijas gemelas al colegio. Caminaban tarareando una canción y cogidas de la mano cuando el teléfono sonó desde su bolso. Era del trabajo. Respondió rápidamente y su interlocutor le pidió que acudiera de inmediato a la oficina. Había ocurrido algo grave, así que decidió que las niñas continuaran solas; conocían bien el camino. Las besó en la frente y emprendió la ruta de vuelta. Solo dio veinte pasos. A sus espaldas, el ruido de un fuerte golpe seguido de un frenazo hizo que volteara la cabeza con una expresión de horror en el rostro. Los cuerpos de las dos pequeñas yacían inertes bajo un camión. Todavía estaban cogidas... "
    },
    {
      "_id": "614811fdbda6bed2a497390b",
      "titulo": "Every night, something knocks on my door ",
      "texto": "An eerie stillness engulfed the house.\n\nIt was unmoving, lifeless, swallowed up in a pitch-black darkness which left the halls unnervingly dark. My room, which was consumed by the night, was illuminated only by the blaring red numbers on my clock, allowing me to see no further than the foot of my bed. I stared at the wall, my mind conjuring up shapes in the dark. My stomach churning, anticipation keeping me starkly awake. I lay in my bed, motionless. I knew what was to come, could feel it creeping up on me, seizing my body and holding it captive, keeping me bound to my own bed until…\n\n𝘉𝘢𝘯𝘨\n\n𝘉𝘢𝘯𝘨\n\n𝘉𝘢𝘯𝘨.\n\nThe room came alive, thrashing, writhing. My body shook, uncontrollable, trembling, my lips... "
    }
  ];


  
  return (
    <SideHistories>
      <CatTitle align={"left"} name = "HISTORIAS NUEVAS"/>
      <ShowStories listHist={newHistories} />
    </SideHistories>
    
  );
};

export default Stories;

