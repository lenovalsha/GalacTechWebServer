import React from "react";
import NavEntry from "./navigation/navEntry";
import Navbar from "../src/navigation/navbar";

function createNavbar(e){
        return(<Navbar key={e.nid}
                        navName={e.name}
                        href={e.href}
                        default = {e.default}
                        color = {e.color}
                        />)
}

function Navigation(){
    return(<div className="nav">
    <div className="border">
    <div>
    {NavEntry.map(createNavbar)}

    </div>
    <div className="logo"></div>

    </div>
    </div>)
}
export default Navigation;