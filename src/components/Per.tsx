import React from 'react'
import "../css/style.css";
export default function Per() {
    return (
        <div className='Coin'>
            <select className="nav-link nav-select" id="lang">
                <option disabled>Choose language</option>
                <option defaultValue="/en/" selected>
                  1.218%
                </option>
                <option defaultValue="/ru/">RUS <img src="./image/flags/RU.png" alt="" /></option>
                <option defaultValue="/fr/">FR <img src="./image/flags/FR.png" alt="" /></option>
                <option defaultValue="/cn/">CN <img src="./image/flags/CN.png" alt="" /></option>
              </select>
              <div className='Per'>
                   0.007 BTC PER EACH ADDRESS
              </div>
        </div>

    )
}
