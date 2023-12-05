import React from "react";
import Filho from "./Filho";

function Pai(props){
    return(
        <div><p>Be Carefull, don't let children close!</p>
        <Filho />
        </div>
    )
}

export default Pai;