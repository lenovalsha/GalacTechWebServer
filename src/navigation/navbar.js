import React from "react";



function Navbar(props){
    const [isHover,setHover] = React.useState(false);
    
    
    
    const MouseEnter =() =>{
        setHover(true);
    }
    const MouseLeave = ()=> {
        setHover(false)
    }
    const hoverStyle =  {
        position: 'relative',
        left: isHover ? '50px' : '-40px',                         
        Content: isHover ? 'props.navName': 'hello',
        display: 'block',
        fontSize: isHover? '110px':'80px',
        color: props.color,
        zIndex : '2',
        textShadow: isHover ? '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black' : '-2px 0 #2596be, 0 2px #2596be, 2px 0 #2596be, 0 -2px #2596be'
    
   }
    return(
            <ul>
                <li >
                    <a href={props.href}><span style={hoverStyle} onMouseOver={MouseEnter} onMouseOut={MouseLeave}>{isHover ? props.navName: props.default}</span></a>
                </li>
            </ul>
    )
}

export default Navbar;