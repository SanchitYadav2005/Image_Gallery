import React from "react";


function Nature(props){
     
    return(
        <div className="container">
            <img src={props.natureImg} alt={props.alternativeText}/>
        </div>
    )
}


export default Nature;