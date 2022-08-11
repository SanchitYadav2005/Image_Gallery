import React from "react";


function Nature(props){
     
    return(
        <div className="nature-container">
            <img src={props.img} alt={props.alternativeText}/>
        </div>
    )
}


export default Nature;