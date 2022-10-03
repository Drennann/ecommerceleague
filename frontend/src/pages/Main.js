import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

document.title = "LeagueMerch";

export default function Main() {
  const navigate = useNavigate();

  return (
    <motion.div className="MainContainer"
      animate={{width:"100%"}}
      exit={{x: window.innerHeight, transition:{
        duration:0.2
      }}}  
    >
      <div className="MainContainer2">
        <motion.h1 
          whileHover={{backgroundColor: "#ff6276"}}
          className="BuyNavigate" onClick={() => navigate("/Items")}>
          Buy Merch
        </motion.h1>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/x6G_uqtQ-z0?version=3&autoplay=1&mute=1&controls=0&playlist=x6G_uqtQ-z0&loop=1`}
        title="video"
      ></iframe>
      <div className="Section2">
        <div className="Section2Text">
          <motion.p 
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x:0 , transition:{
              duration: 0.8
            }}}
          >
            Holaosadosakodakoad asd asd ad ad asdasdas da da da sd asda dasdsa
            da sdasdas da sdasdsad asda sdas das dsad asd
          </motion.p>
          <motion.p 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y:0 , transition:{
              duration: 0.8
            }}}
          >
            Holaosadosakodakoad asd asd ad ad asdasdas da da da sd asda dasdsa
            da sdasdas da sdasdsad asda sdas das dsad asd
          </motion.p>          <motion.p 
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x:0 , transition:{
              duration: 0.8
            }}}
          >
            Holaosadosakodakoad asd asd ad ad asdasdas da da da sd asda dasdsa
            da sdasdas da sdasdsad asda sdas das dsad asd
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

// 1215 717
