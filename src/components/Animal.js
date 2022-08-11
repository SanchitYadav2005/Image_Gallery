import React from "react";


function Animal(props){
     
    return(
        <div className="container">
            <img src={props.animalImg} alt={props.alternativeText}/>
        </div>
    )
}


export default Animal;