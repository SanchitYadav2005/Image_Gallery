import React from "react";


function Nature(props){
     
    return(
        <div>
            <img src={props.img} alt={props.alternativeText}/>
        </div>
    )
}


export default Nature;