import React from "react";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";


function Home(){

    return(
        
<div>
 
<Image src="https://res.cloudinary.com/hidl3r/image/upload/v1631381654/itp/LeBus-interior-luxury-coach-bus-background_pdzuvu.jpg" fluid />

<button className="time">Timetables</button>
<button className="booknow">Book Now</button>
<button className="contactnow">Contact Us</button>
</div>



    )

}

export default Home; 