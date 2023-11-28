import React, { useState } from 'react';
import { NavBarManager } from './NavBarManager';
import '../Common.css'; 

export function Manager(){
    return(
        <div className="container">
            <h2 className="manager-header">Manager page</h2> {/* Example of using a class from Common.css */}
            <NavBarManager/>
        </div>
    );
}