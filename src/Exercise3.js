

import { useState } from "react"




const Header = (props) => {
    const [headingStyle] = useState({color: 'maroon'})
    const [sloganStyle] = useState({fontStyle: 'italic'})

    return(
        <div>
            <h1 style={headingStyle}>{props.heading}</h1>
            <h3 style={sloganStyle}>{props.slogan}</h3>
        </div>
    );


}

const Exercise3 = () => {
    return(
        <Header heading="Welcome to the App!" slogan = "Stepping in to the new world" />
    );

}
export default Exercise3;