import React, { useState } from 'react';
import Watchlist from './Watchlist';

const Button = (props) =>{

    const [button, setButton] =useState("inactive");

    function buttonClick(){
        if(button == "inactive"){
            setButton("active");
        }
        else{
            setButton("inactive")
        }
    }

    return(
        <div>
            <button className={button} onClick={buttonClick}>{props.Watchlist}</button>
            <Watchlist/>
        </div>
    )

}

export default Button;