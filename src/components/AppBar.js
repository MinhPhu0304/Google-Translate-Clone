import React from 'react';

import DesktopMenu from './desktopMenu';
import MobileMenu from './mobileMenu';

const clientDeviceIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

export default function MenuApp (){

    if(!clientDeviceIsMobile) {
        
        return(<DesktopMenu />);
    } else {
        
        return(
            <MobileMenu />
        );
    }
}
