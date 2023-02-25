import React from "react";
// import "../component/styles"

function profile(props)
{
    
    return (
    <div className="entry">
    {<img className="img" src={props.img}></img>}
    <div className="info">
    <h1 className="name">{props.name}</h1>
    <h4>{props.title}</h4>
    <h5>{props.bio}</h5>

    </div>

    </div>
    )
    
}

export default profile;