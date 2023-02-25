import React from "react";
import entry from "./profileInfo/entry";
import Contacts from "./profileInfo/contact";
import { FaEnvelope, FaRegCalendarAlt,FaPeopleArrows } from "react-icons/fa";


function createContact(entry){
    return(<Contacts name = {entry.name}
                    email = {entry.email}/>)
};
const envStyle = {
    width:'50%',
    height: '100px',
    position: 'relative',
    color:'#2CB0CD'
    
}
function Contact(){

  
    return(<div>
    <div className="contactImg"></div>
    <div className="contactContainer">
    <div className="reach" >
    <div className="envelope"><h2 style={{fontSize: '40px'}}>Contact Us</h2> <FaEnvelope style={envStyle}/></div>
    <div>
    {entry.map(createContact) }
    </div></div>
    <div className="reach">
        <FaRegCalendarAlt style={envStyle}/>
    <div className="mid">
        <h2>Days: Monday - Thursday</h2>
        <h2>Hours: 8:00am - 3:00pm</h2>
    </div>
    </div>
    <div className="reach">
    <FaPeopleArrows style={envStyle}/>
    <div className="mid">

    
    <h2>Dont be shy</h2>
    <h4>We will try our best to help you!</h4>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Contact;