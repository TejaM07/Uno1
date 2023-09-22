import React from "react"
import offer1 from "./offer1.png";
import offer2 from "./offer2.png";
import worng from "./worng.png";
import seven from "./seven.png";
import five from "./five.png";
import two from "./two.png";
import offer3 from "./offer3.png";
import secure2 from "./secure2.png";

function Peek() {
    return (
        <div className='app'>
             <style>{'body { background-color: rgb(237, 239, 246); }'}</style>
            <div>
          
          <img src={five} alt={five} id='offer4' width={300} height={200}/>
          <img src={two} alt={two} id='offer5' width={250} height={250}/>
          <img src={offer3} alt={offer3} id='offer6' width={200} height={200}/>
          <img src={offer1} alt={offer1} id='offer' width={270} height={270}/>
          <img src={offer2} alt={offer2} id='offer2' width={270} height={270}/>
          <img src={worng} alt={worng} id='worng' width={300} height={250}/>
          <img src={seven} alt={seven} id='offer3' width={250} height={250}/>
          <img src={secure2} alt={secure2} id='secure2' width={200} height={200}/>
          <h1 id='h1'> <span>The internet can be hard to use</span></h1>
          </div>
          </div>
    )
}
export default Peek;
 