import React from "react";
import Profile from "./profileInfo/profile";
import entry from "./profileInfo/entry";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
function createProfile(entry)
{
    return (
        
       
        <Profile key={entry.id}
        img = {entry.img}
        name = {entry.name}
        title = {entry.title}
        bio = {entry.bio}
        />
        

    )
}

function App()
{
    return (
        <div className="profile">{entry.map(createProfile)}</div>
    )
}


export default App;