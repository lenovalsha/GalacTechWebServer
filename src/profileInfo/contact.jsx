import React from "react";

function Contacts(props){
    
    return(
        <div className="person" onClick={() => window.location = 'mailto:'+props.email}  >
            <h4>{props.name}</h4>
            <p>{props.email}</p>
        </div>
    )
}
export default Contacts;