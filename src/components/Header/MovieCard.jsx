import React from "react";

const MovieCard = (props) => {
    return (
            <>
                <h1 style={{color: "#fff"}}>{props.name}</h1>
                <img src={props.image} />
                <h1 style={{color: "#fff"}}>{props.year}</h1>
                <p style={{color: "#fff"}}>{props.type}</p>
            </>
            // <img src={props.Posted} />
            // <h1>{props.year}</h1>
            // <h1>{props.type}</h1>
        
    )
}
export default MovieCard