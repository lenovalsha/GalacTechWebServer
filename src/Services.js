import React  from "react";
import entry from "./students/entry";
import Students from "./students/students";


function createStudents(entry){
return(<Students name = {entry.name}/>)
}


function Services()
{
    return(<div className="service">
    
        <div class="form">
        <h3>If you cant see the form below, please make sure you are using Google Chrome and logged into your mhc.ca gmail account, then refresh the page.</h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3TEqnNWi99ulF11ZtkTT7o6UggDbfDjejcBPlMR7QXhDeGg/viewform?embedded=true" width="640" height="674" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      {/* <div className="students">
        <h1 className="h1Students">Students</h1>{entry.map(createStudents)}</div> */}
    </div>)
}
export default Services;