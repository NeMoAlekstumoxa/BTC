import React from 'react'
import "../css/style.css";
export default function Coin() {
    return (
        <div className='Coin'>
            <div className=''>
            <select className="nav-link nav-select" id="lang">
                
                <option defaultValue="/en/" selected>
                   <img src="./image/coins/btc.png" alt="" />
                </option>
                <option defaultValue="/ru/"> <img src="./image/coins/eth.png" alt="" /></option>
                <option defaultValue="/ru/"> <img src="./image/coins/atm.png" alt="" /></option>
                </select>
                </div>
                <div className='Cod'>
                   1NJRRCKQTFJLUQXFYCEMXCTH77M5TAYO


                </div>
                <div>
                <select className="nav-link nav-select" id="lang">
                
                <option className='Hourse' defaultValue="/en/" selected>
                    0 HOURSE
                </option>
                <option defaultValue="/ru/"> <img src="./image/coins/eth.png" alt="" /></option>
                <option defaultValue="/ru/"> <img src="./image/coins/atm.png" alt="" /></option>
                </select>
                </div>
               
                <div>
                    + . ADD ANOTHER ADDRES
                </div>



                </div>
    )
}
