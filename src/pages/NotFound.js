import React from 'react';
import {Link} from 'react-router-dom';
import NotFoundImage from'../static/image/NotFound.jpg';


export default function NotFound(){
    return(
        <div>
            <img    src={NotFoundImage} 
                    alt=""
                    style={{ 
                            height: '95vh',
                            width: '95vw',
                            objectFit: 'contain'}} />
            <center><Link to="/">Return to Home Page</Link></center>
        </div>
    );
}