import React, { useState } from 'react';
import axios from 'axios';
import { NavBarManager } from './NavBarManager';
export function Manager(){
    return(
        <div>
<p>Manager page</p>
<NavBarManager/>
</div>
    );
}