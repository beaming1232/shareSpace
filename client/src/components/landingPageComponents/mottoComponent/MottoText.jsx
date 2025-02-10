import React, { Component } from 'react';
import './Motto.css'

class MottoText extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p className='textHeader'> Our Motto </p>
                <p className='textContent'>ShareSpace is inspired by a real life issue that the founders faced when they first moved to Canada from different parts of the world. At ShareSpace, we want to make sure that moving to a new place is as seamless and easy as possible. ShareSpace is the one stop solution to accelerate your ideal roommate search.</p>
            </div>

         );
    }
}
 
export default MottoText;